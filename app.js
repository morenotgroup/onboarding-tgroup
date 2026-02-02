/*
  Deck em HTML/JS (sem frameworks)
  Navegação: ← → | espaço | PageUp / PageDown
  Overview (grid): tecla O
  Dicas:
    - Conteúdo fica em content.js
    - Logos/fotos ficam em /assets
*/

(function () {
  const data = window.ONBOARDING_DATA;
  if (!data) {
    console.error("ONBOARDING_DATA não encontrado. Verifique content.js.");
    return;
  }

  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  const deck = $("#deck");
  const hudTitle = $("#hudTitle");
  const hudSub = $("#hudSub");
  const hudCount = $("#hudCount");
  const progressBar = $("#progressBar");
  const overlay = $("#overlay");

  function esc(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function icon(name) {
    // ícones inline bem leves (sem libs)
    const icons = {
      spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z"/></svg>',
      calendar:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 8H4v10h16V10z"/></svg>',
      check:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.2 4.8 12 3.4 13.4 9 19 21 7l-1.4-1.4z"/></svg>',
      bolt:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>',
      heart:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.4-10-9.2C-0.4 7.7 2.2 3.9 6.2 4.2c1.9.1 3.2 1.2 3.8 2.2.6-1 1.9-2.1 3.8-2.2 4-.3 6.6 3.5 4.2 7.6C19 16.6 12 21 12 21z"/></svg>',
      people:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 11c1.7 0 3-1.3 3-3S17.7 5 16 5s-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-8 1.4-8 4v2h16v-2c0-2.6-5.3-4-8-4zm8 0c-.4 0-.8 0-1.2.1 1.7.8 3.2 2 3.2 3.9v2h6v-2c0-2.6-5.3-4-8-4z"/></svg>',
      shield:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm0 18c-3.3-1.2-6-4.8-6-9V6.3L12 4l6 2.3V11c0 4.2-2.7 7.8-6 9z"/></svg>',
    };
    return icons[name] || icons.spark;
  }

  function slide({
    kicker,
    title,
    subtitle,
    html,
    note,
    theme = "default",
    compact = false,
  }) {
    return `
      <section class="slide theme-${esc(theme)} ${compact ? "compact" : ""}" data-note="${esc(
      note || ""
    )}">
        <div class="slide-inner">
          <header class="slide-header">
            <div class="kicker">${esc(kicker || "")}</div>
            <h1>${esc(title || "")}</h1>
            ${subtitle ? `<p class="subtitle">${esc(subtitle)}</p>` : ""}
          </header>
          <main class="slide-body">${html || ""}</main>
        </div>
      </section>
    `;
  }

  function bullets(list, opts = {}) {
    const iconName = opts.icon || "check";
    return `
      <ul class="bullets">
        ${list
          .map(
            (b) => `
          <li>
            <span class="bullet-icon" aria-hidden="true">${icon(
              iconName
            )}</span>
            <span class="bullet-text">${esc(b)}</span>
          </li>`
          )
          .join("\n")}
      </ul>
    `;
  }

  function cards(items, renderFn) {
    return `
      <div class="cards">
        ${items.map(renderFn).join("\n")}
      </div>
    `;
  }

  function pill(text, tone = "neutral") {
    return `<span class="pill pill-${tone}">${esc(text)}</span>`;
  }

  const slides = [];

  // 0) Cover
  slides.push(
    slide({
      kicker: "ONBOARDING",
      title: data.meta.deckTitle,
      subtitle: data.meta.deckSubtitle,
      theme: "cover",
      html: `
        <div class="hero">
          <div class="hero-left">
            <div class="logo-line">
              <img src="assets/logos/tgroup-logo.webp" alt="Logo T.Group" class="logo" />
            </div>
            <div class="hero-block">
              <div class="hero-tag">${pill("2026", "accent")} ${pill(
        "performance + tech",
        "accent2"
      )}</div>
              <p class="hero-text">Um onboarding rápido, direto e com a cara do T.Group — para você começar bem e entregar forte desde o início.</p>
              <div class="hero-meta">
                <div>${icon("calendar")} <strong>Formato:</strong> 30–45 min + Q&amp;A</div>
                <div>${icon("people")} <strong>Quem conduz:</strong> ${esc(
                  data.meta.gcContato
                )} + liderança</div>
              </div>
            </div>
          </div>
          <div class="hero-right">
            <div class="glass big">
              <h2>Como navegar</h2>
              <div class="grid2">
                <div class="mini">${icon("bolt")} <span>Setas</span></div>
                <div class="mini">${icon("bolt")} <span>Espaço</span></div>
                <div class="mini">${icon("bolt")} <span>PageUp/Down</span></div>
                <div class="mini">${icon("bolt")} <span>O (overview)</span></div>
              </div>
              <p class="muted">Dica: pressione <strong>N</strong> para ver as notas do apresentador.</p>
            </div>
          </div>
        </div>
      `,
      note: "Alinhe expectativa: onboarding = cultura + rotinas + benefícios + como crescer em 2026.",
    })
  );

  // 1) Agenda
  slides.push(
    slide({
      kicker: "ROTEIRO",
      title: "O que você vai levar daqui hoje",
      subtitle: "O objetivo é você sair com contexto, clareza e próximos passos.",
      html: `
        ${bullets(data.agenda, { icon: "spark" })}
        <div class="callout">
          <div class="callout-icon" aria-hidden="true">${icon(
            "bolt"
          )}</div>
          <div>
            <strong>Atalho de cultura:</strong> no T.Group, a gente prefere combinar o jogo logo no início (rituais, prazos e formas de trabalhar) pra evitar ruído e acelerar entrega.
          </div>
        </div>
      `,
      note: "Mostre que é uma apresentação prática; convide o novo colaborador a interromper com dúvidas.",
    })
  );

  // 2) Quem somos
  slides.push(
    slide({
      kicker: "T.GROUP",
      title: data.whoWeAre.headline,
      subtitle: data.whoWeAre.subheadline,
      html: `${bullets(data.whoWeAre.bullets, { icon: "check" })}`,
      note: data.whoWeAre.note,
    })
  );

  // 3) Estrutura
  slides.push(
    slide({
      kicker: "ESTRUTURA 2026",
      title: "4 empresas, 1 cultura",
      subtitle:
        "Você vai ver o nome das empresas sempre no padrão T.<NomeSemEspaço>.",
      html: `
        <div class="grid4">
          ${data.companies
            .map(
              (c) => `
            <div class="glass card">
              <div class="card-top">
                <img class="logo-sm" src="${esc(
                  c.logo
                )}" alt="Logo ${esc(c.name)}" />
                ${pill(c.name, "accent")}
              </div>
              <h3>${esc(c.tagline)}</h3>
              <p class="muted">${esc(c.description)}</p>
              <div class="chips">
                ${c.highlights.map((h) => pill(h, "neutral")).join(" ")}
              </div>
            </div>
          `
            )
            .join("\n")}
        </div>
      `,
      note:
        "Use exemplos reais do dia a dia: comissões de formatura, captação de marcas, eventos, venues etc.",
    })
  );

  // 4) Timeline
  slides.push(
    slide({
      kicker: "HISTÓRIA",
      title: data.timeline.title,
      subtitle:
        "Marcos editáveis — ajuste os anos/títulos para ficar 100% fiel ao histórico interno.",
      html: `
        <div class="timeline">
          ${data.timeline.items
            .map(
              (t) => `
            <div class="time-item">
              <div class="time-year">${esc(t.year)}</div>
              <div class="time-body">
                <div class="time-title">${esc(t.title)}</div>
                <div class="time-desc">${esc(t.desc)}</div>
              </div>
            </div>
          `
            )
            .join("\n")}
        </div>
        <p class="muted">${esc(data.timeline.note || "")}</p>
      `,
      note: data.timeline.note,
      theme: "dark",
    })
  );

  // 5–8) Empresas detalhadas
  data.companies.forEach((c) => {
    slides.push(
      slide({
        kicker: "EMPRESA",
        title: c.name,
        subtitle: c.longDesc,
        theme: c.theme || "default",
        html: `
          <div class="two-col">
            <div>
              ${bullets(c.bullets, { icon: "check" })}
              <div class="callout">
                <div class="callout-icon" aria-hidden="true">${icon(
                  "spark"
                )}</div>
                <div><strong>Exemplos de entregas:</strong> ${esc(c.examples)}</div>
              </div>
            </div>
            <div>
              <div class="glass big">
                <div class="mini-title">Quick facts</div>
                <div class="facts">
                  ${c.facts
                    .map(
                      (f) => `
                    <div class="fact">
                      <div class="fact-k">${esc(f.k)}</div>
                      <div class="fact-v">${esc(f.v)}</div>
                    </div>
                  `
                    )
                    .join("\n")}
                </div>
                <p class="muted">${esc(
                  c.logoHint ||
                    "Troque o SVG placeholder pelo logo oficial em /assets/logos."
                )}</p>
              </div>
            </div>
          </div>
        `,
        note: c.note || "",
      })
    );
  });

  // 9) Sócios
  slides.push(
    slide({
      kicker: "LIDERANÇA",
      title: "Sócios do T.Group",
      subtitle:
        "Cards prontos: é só substituir a foto em /assets/people (e, se quiser, colocar links internos).",
      html: cards(data.partners, (p) => {
        return `
          <div class="glass card partner">
            <img class="avatar" src="${esc(
              p.photo
            )}" alt="Foto de ${esc(p.name)}" />
            <div class="partner-body">
              <div class="partner-name">${esc(p.name)}</div>
              <div class="partner-role">${esc(p.role)}</div>
              <div class="partner-tags">${pill(p.company, "accent")} ${
          p.brand ? pill(p.brand, "accent2") : ""
        }</div>
            </div>
          </div>
        `;
      }),
      theme: "dark",
      note:
        "Se fizer sentido, conte 1 frase de ‘o que essa pessoa resolve’ para o colaborador memorizar rápido.",
    })
  );

  // 10) Cultura & jeito de trabalhar
  slides.push(
    slide({
      kicker: "CULTURA",
      title: "Como a gente quer que seja o dia a dia",
      subtitle:
        "Leve no jeito, sério no combinado. Aqui a régua é alta — e o ambiente precisa ser seguro.",
      html: `
        ${bullets(data.culture.bullets, { icon: "heart" })}
        <div class="callout">
          <div class="callout-icon" aria-hidden="true">${icon(
            "shield"
          )}</div>
          <div><strong>Segurança e respeito:</strong> diversidade, respeito às mulheres e liberdade de ir e vir em espaços seguros são princípios inegociáveis.</div>
        </div>
      `,
      note: data.culture.note,
    })
  );

  // 11) Rituais
  slides.push(
    slide({
      kicker: "RITUAIS",
      title: "O que mantém a casa viva",
      subtitle:
        "Rituais existem pra criar conexão e previsibilidade — sem matar a espontaneidade.",
      html: `
        <div class="grid3">
          ${data.rituals
            .map(
              (r) => `
            <div class="glass card">
              <div class="card-top">
                <div class="icon-bubble" aria-hidden="true">${icon(
                  r.icon
                )}</div>
                ${pill(r.frequency, "neutral")}
              </div>
              <h3>${esc(r.name)}</h3>
              <p class="muted">${esc(r.desc)}</p>
              <div class="chips">
                ${r.tags.map((t) => pill(t, "neutral")).join(" ")}
              </div>
            </div>
          `
            )
            .join("\n")}
        </div>
      `,
      note:
        "Mostre como o colaborador participa (inscrição, horários, onde vê comunicados).",
    })
  );

  // 12) Processos obrigatórios
  slides.push(
    slide({
      kicker: "PROCESSOS",
      title: "Rotinas obrigatórias (sem drama)",
      subtitle:
        "Essas rotinas existem pra manter a operação fluindo e evitar gargalo lá na frente.",
      html: `
        <div class="two-col">
          <div class="glass big">
            <h3>Mensal</h3>
            ${bullets(data.mandatory.monthly, { icon: "check" })}
          </div>
          <div class="glass big">
            <h3>Diário</h3>
            ${bullets(data.mandatory.daily, { icon: "check" })}
          </div>
        </div>
        <p class="muted">Dica prática: se você cumprir essas duas rotinas, metade do DP/financeiro já fica organizado automaticamente.</p>
      `,
      note:
        "Reforce prazos e onde a pessoa encontra os links (NF-Express, enquete do almoço).",
      theme: "dark",
    })
  );

  // 13) Benefícios PJ
  slides.push(
    slide({
      kicker: "BENEFÍCIOS",
      title: "Benefícios para PJ",
      subtitle:
        "Pacote pensado para bem-estar, desenvolvimento e vida real — com regras simples.",
      html: `
        <div class="grid3">
          ${data.benefitsPJ
            .map(
              (b) => `
            <div class="glass card">
              <div class="card-top">
                <div class="icon-bubble" aria-hidden="true">${icon(
                  b.icon
                )}</div>
                ${pill(b.type, "accent")}
              </div>
              <h3>${esc(b.name)}</h3>
              <p class="muted">${esc(b.desc)}</p>
              <div class="chips">
                ${b.tags.map((t) => pill(t, "neutral")).join(" ")}
              </div>
            </div>
          `
            )
            .join("\n")}
        </div>
      `,
      note: "Explique como solicitar/ativar e onde ficam as regras oficiais (doc interno).",
    })
  );

  // 14) Performance 2026
  slides.push(
    slide({
      kicker: "2026",
      title: "Performance, PDI e Lideranças",
      subtitle:
        "Em 2026, essas frentes rodam de forma inédita com todo mundo — de forma leve, mas com método.",
      html: `
        <div class="two-col">
          <div>
            ${bullets(data.performance2026.bullets, { icon: "bolt" })}
            <div class="callout">
              <div class="callout-icon" aria-hidden="true">${icon(
                "spark"
              )}</div>
              <div><strong>Objetivo:</strong> clareza de expectativa + feedback recorrente + crescimento real (não só no feeling).</div>
            </div>
          </div>
          <div>
            <div class="glass big">
              <div class="mini-title">Como isso te ajuda (na prática)</div>
              ${bullets(data.performance2026.howItHelps, { icon: "check" })}
            </div>
          </div>
        </div>
      `,
      note: data.performance2026.note,
      theme: "dark",
    })
  );

  // 15) 30-60-90
  slides.push(
    slide({
      kicker: "PRIMEIROS 90 DIAS",
      title: "Seu plano 30–60–90 (bem simples)",
      subtitle:
        "Um mapa leve para você se sentir parte, entender a operação e começar a gerar impacto.",
      html: `
        <div class="grid3">
          ${data.first90
            .map(
              (p) => `
            <div class="glass card">
              <div class="card-top">${pill(p.range, "accent")}</div>
              <h3>${esc(p.title)}</h3>
              ${bullets(p.bullets, { icon: "check" })}
            </div>
          `
            )
            .join("\n")}
        </div>
      `,
      note:
        "Se você usa 1:1 ou follow-up semanal, conecte aqui. Mostre que existe método, não microgestão.",
    })
  );

  // 16) Checklist final
  slides.push(
    slide({
      kicker: "CHECKLIST",
      title: "Pra sair daqui com tudo encaminhado",
      subtitle:
        "Se você fizer isso, sua primeira semana fica lisa (e a gente também ganha tempo).",
      html: `
        <div class="glass big">
          ${bullets(data.nextSteps, { icon: "check" })}
        </div>
        <div class="footer-note">
          <span class="muted">Dúvidas? Procure ${esc(
            data.meta.gcContato
          )}.</span>
        </div>
      `,
      note: "Finalize reforçando acolhimento e disponibilidade de GC.",
      theme: "cover",
      compact: true,
    })
  );

  // Render
  deck.innerHTML = slides.join("\n");

  const slideEls = $$(".slide", deck);
  let idx = 0;
  let overview = false;
  let showNotes = false;

  function clamp(n) {
    return Math.max(0, Math.min(slideEls.length - 1, n));
  }

  function setHash() {
    const n = String(idx + 1).padStart(2, "0");
    history.replaceState(null, "", `#/${n}`);
  }

  function readHash() {
    const m = (location.hash || "").match(/#\/\/(\d+)/);
    if (!m) return 0;
    const n = parseInt(m[1], 10);
    if (Number.isNaN(n)) return 0;
    return clamp(n - 1);
  }

  function updateHUD() {
    const current = slideEls[idx];
    const h1 = $("h1", current);
    const sub = $(".subtitle", current);

    hudTitle.textContent = h1 ? h1.textContent : data.meta.deckTitle;
    hudSub.textContent = sub ? sub.textContent : data.meta.deckSubtitle;

    hudCount.textContent = `${idx + 1} / ${slideEls.length}`;
    const pct = ((idx + 1) / slideEls.length) * 100;
    progressBar.style.width = `${pct}%`;

    const note = current.getAttribute("data-note") || "";
    overlay.innerHTML = `
      <div class="overlay-card">
        <div class="overlay-title">Notas do apresentador</div>
        <div class="overlay-body">${esc(note || "(sem notas)")}</div>
        <div class="overlay-tip muted">Tecla N para ocultar</div>
      </div>
    `;
  }

  function render() {
    slideEls.forEach((s, i) => {
      s.classList.toggle("active", i === idx);
      s.classList.toggle("prev", i === idx - 1);
      s.classList.toggle("next", i === idx + 1);
    });

    document.body.classList.toggle("overview", overview);
    document.body.classList.toggle("notes", showNotes);

    updateHUD();
    setHash();
  }

  function go(nextIdx) {
    idx = clamp(nextIdx);
    render();
  }

  function next() {
    go(idx + 1);
  }

  function prev() {
    go(idx - 1);
  }

  // Overview grid
  function toggleOverview() {
    overview = !overview;
    if (overview) {
      slideEls.forEach((s, i) => {
        s.style.setProperty("--ov-i", i);
        s.addEventListener(
          "click",
          () => {
            if (!overview) return;
            overview = false;
            go(i);
          },
          { once: true }
        );
      });
    }
    render();
  }

  function toggleNotes() {
    showNotes = !showNotes;
    render();
  }

  // Keyboard
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      if (!overview) next();
      return;
    }
    if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      if (!overview) prev();
      return;
    }
    if (e.key === "Home") {
      e.preventDefault();
      if (!overview) go(0);
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      if (!overview) go(slideEls.length - 1);
      return;
    }
    if (e.key.toLowerCase() === "o") {
      e.preventDefault();
      toggleOverview();
      return;
    }
    if (e.key.toLowerCase() === "n") {
      e.preventDefault();
      toggleNotes();
      return;
    }
    if (e.key === "Escape" && overview) {
      e.preventDefault();
      toggleOverview();
      return;
    }
  });

  // Swipe (mobile)
  let x0 = null;
  window.addEventListener("touchstart", (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    x0 = e.touches[0].clientX;
  });
  window.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const x1 = (e.changedTouches && e.changedTouches[0].clientX) || x0;
    const dx = x1 - x0;
    x0 = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) next();
    else prev();
  });

  // Init
  idx = readHash();
  render();
  window.addEventListener("hashchange", () => {
    idx = readHash();
    render();
  });
})();
