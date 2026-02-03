// app.js
(function () {
  const $ = (sel) => document.querySelector(sel);

  const stage = $("#stage");
  const hudCounter = $("#hudCounter");
  const hudTitle = $("#hudTitle");
  const hudSubtitle = $("#hudSubtitle");
  const hudBrand = $("#hudBrand");
  const hudNote = $("#hudNote");
  const hudContact = $("#hudContact");

  const overview = $("#overview");
  const overviewGrid = $("#overviewGrid");
  const btnCloseOverview = $("#btnCloseOverview");
  const toast = $("#toast");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function escapeHTML(str) {
    return String(str ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.add("hidden"), 2400);
  }

  function renderError() {
    stage.innerHTML = `
      <div class="slide">
        <div class="slide-content">
          <p class="kicker">Erro de carregamento</p>
          <h1 class="h2">Não encontrei <code>window.DECK.slides</code></h1>
          <hr class="sep" />
          <p class="sub">
            Isso normalmente acontece quando <b>content.json</b> não carregou, ou quando o arquivo não foi publicado.
          </p>
          <ul class="ul">
            <li>Abra o DevTools → Console e rode: <code>window.DECK</code></li>
            <li>Abra DevTools → Network e confirme se <code>content.json</code> está com status 200</li>
            <li>Confirme no <code>index.html</code> que <code>content.js</code> vem antes de <code>app.js</code></li>
          </ul>
          <p class="sub">Depois de corrigir, faça commit e atualize a página com hard refresh.</p>
        </div>
      </div>
    `;
  }

  const deckPromise = window.DECK_READY instanceof Promise ? window.DECK_READY : Promise.resolve(window.DECK);

  deckPromise
    .then((deckData) => {
      if (!deckData || !Array.isArray(deckData.slides)) {
        renderError();
        return null;
      }
      return deckData;
    })
    .then((deckData) => {
      if (!deckData) return;

      const deck = deckData;
      const settings = window.DECK_SETTINGS || { mode: "60" };

      if (deck.meta) {
        if (deck.meta.brandPill) hudBrand.textContent = deck.meta.brandPill;
        if (deck.meta.title) hudTitle.textContent = deck.meta.title;
        if (deck.meta.subtitle) hudSubtitle.textContent = deck.meta.subtitle;
        if (deck.meta.note) hudNote.textContent = deck.meta.note;

        if (deck.meta.contactUrl) {
          hudContact.href = deck.meta.contactUrl;
        } else {
          hudContact.href = "#";
        }
        hudContact.textContent = deck.meta.contactLabel || "Gente e Cultura";
      }

      const mode = String(settings.mode || "60").trim();
      let slides = deck.slides.slice();

      if (mode === "40") {
        slides = slides.filter((s) => s.pace !== "deep");
      }

      let index = 0;

      const hash = window.location.hash;
      if (hash && hash.startsWith("#/")) {
        const n = Number(hash.replace("#/", ""));
        if (!Number.isNaN(n) && n >= 1 && n <= slides.length) index = n - 1;
      }

      function setHash() {
        window.location.hash = `#/${index + 1}`;
      }

      function updateCounter() {
        hudCounter.textContent = `${index + 1}/${slides.length}`;
      }

      function renderBullets(bullets) {
        if (!bullets?.length) return "";
        const items = bullets.map((b) => `<li>${escapeHTML(b)}</li>`).join("");
        return `<ul class="ul">${items}</ul>`;
      }

      function renderBadges(badges) {
        if (!badges?.length) return "";
        const items = badges.map((b) => `<span class="badge">${escapeHTML(b)}</span>`).join("");
        return `<div class="badges">${items}</div>`;
      }

      function renderCards(cards, columns = 2) {
        if (!cards?.length) return "";
        const cls = columns === 3 ? "grid-3" : "cards";
        return `
          <div class="${cls}">
            ${cards
              .map(
                (c) => `
              <div class="card">
                <div class="card-title">${escapeHTML(c.title)}</div>
                <p class="card-text">${escapeHTML(c.text)}</p>
              </div>
            `
              )
              .join("")}
          </div>
        `;
      }

      function renderModules(modules) {
        if (!modules?.length) return "";
        return `
          <div class="modules">
            ${modules
              .map(
                (m) => `
              <a class="module-card" href="${escapeHTML(m.url)}" target="_blank" rel="noreferrer">
                <div class="module-ico">${escapeHTML(m.icon || "🔗")}</div>
                <div class="module-meta">
                  <div class="module-title">${escapeHTML(m.title)}</div>
                  <p class="module-text">${escapeHTML(m.text || "")}</p>
                </div>
              </a>
            `
              )
              .join("")}
          </div>
        `;
      }

      function renderPeople(people) {
        if (!people?.length) return "";
        return `
          <div class="people-grid">
            ${people
              .map(
                (p) => `
              <div class="person">
                <img class="avatar" src="${escapeHTML(p.photo)}" alt="${escapeHTML(p.name)}" />
                <div>
                  <p class="person-name">${escapeHTML(p.name)}</p>
                  <p class="person-role">${escapeHTML(p.role)}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        `;
      }

      function renderTimeline(items) {
        if (!items?.length) return "";
        return `
          <div class="timeline">
            ${items
              .map(
                (it) => `
              <div class="tl-item">
                <div class="tl-year">${escapeHTML(it.year)}</div>
                <div>
                  <p class="tl-title">${escapeHTML(it.title)}</p>
                  <p class="tl-text">${escapeHTML(it.text)}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        `;
      }

      function renderLinks(slide) {
        const links = slide.links || [];
        const qrUrl = slide.qrUrl || "";
        const qrImg = qrUrl
          ? `https://quickchart.io/qr?text=${encodeURIComponent(qrUrl)}&size=220`
          : "";

        return `
          <div class="grid-2">
            <div>
              ${renderBadges(slide.badges)}
              <div class="links" style="margin-top:12px;">
                ${links
                  .map(
                    (l) => `
                  <a class="link-btn" href="${escapeHTML(l.url)}" target="_blank" rel="noreferrer">
                    <div class="link-ico">${escapeHTML(l.icon || "🔗")}</div>
                    <div class="link-meta">
                      <p class="link-title">${escapeHTML(l.label)}</p>
                      <p class="link-note">${escapeHTML(l.note || "")}</p>
                    </div>
                  </a>
                `
                  )
                  .join("")}
              </div>
            </div>

            <div>
              <div class="card card--light" style="height:100%; display:flex; flex-direction:column; gap:12px;">
                <div>
                  <div class="card-title">${escapeHTML(slide.qrLabel || "QR Code")}</div>
                  <p class="card-text">Aponte a câmera e abra o hub/links direto no celular.</p>
                </div>

                <div class="qr-wrap">
                  <img class="qr" src="${escapeHTML(qrImg)}" alt="QR code do hub" />
                  <div class="qr-text">
                    <div style="font-weight:760; margin-bottom:6px;">Link do hub:</div>
                    <div style="word-break:break-all;">${escapeHTML(qrUrl || "— coloque seu link aqui —")}</div>
                    <div style="margin-top:10px; color: rgba(255,255,255,.55);">
                      Dica: use um link estável (Vercel/Notion/Site) pra não trocar todo mês.
                    </div>
                  </div>
                </div>

                <div class="card card--light" style="margin-top:auto;">
                  <div class="card-title">Pulo rápido</div>
                  <p class="card-text">Pressione <b>O</b> para abrir o Overview e ir direto em qualquer tema.</p>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      function wrapSlide(content, slide) {
        const image = slide.image ? escapeHTML(slide.image) : "";
        const classes = ["slide"];
        if (slide.layout === "cover") classes.push("slide--cover");
        if (slide.layout === "chapter") classes.push("slide--chapter");
        if (image) classes.push("slide--image");
        return `
          <div class="${classes.join(" ")}" ${image ? "data-parallax=\"true\"" : ""}>
            ${image ? `<div class="slide-media" style="background-image:url('${image}')"></div>` : ""}
            ${image ? '<div class="slide-overlay"></div>' : ""}
            <div class="slide-content">${content}</div>
          </div>
        `;
      }

      function renderSlide(slide) {
        const title = slide.title || "";
        const subtitle = slide.subtitle || "";
        const kicker = slide.kicker || "";

        if (slide.layout === "cover") {
          return wrapSlide(
            `
              <div class="cover-stack">
                <p class="kicker">${escapeHTML(kicker)}</p>
                <h1 class="h1">${escapeHTML(title)}</h1>
                <p class="sub">${escapeHTML(subtitle)}</p>
                <div class="cover-pill">
                  <span class="pill">${escapeHTML(slide.footerLeft || "← → / Space • O overview")}</span>
                </div>
              </div>
            `,
            slide
          );
        }

        if (slide.layout === "chapter") {
          return wrapSlide(
            `
              <div class="chapter-stack">
                ${kicker ? `<p class="kicker">${escapeHTML(kicker)}</p>` : ""}
                <h1 class="h1">${escapeHTML(title)}</h1>
                ${subtitle ? `<p class="sub">${escapeHTML(subtitle)}</p>` : ""}
              </div>
            `,
            slide
          );
        }

        if (slide.layout === "bullets") {
          return wrapSlide(
            `
              ${kicker ? `<p class="kicker">${escapeHTML(kicker)}</p>` : ""}
              <h2 class="h2">${escapeHTML(title)}</h2>
              ${subtitle ? `<p class="sub">${escapeHTML(subtitle)}</p>` : ""}
              <hr class="sep" />
              ${renderBullets(slide.bullets)}
              ${renderBadges(slide.badges)}
            `,
            slide
          );
        }

        if (slide.layout === "twoCol") {
          const left = slide.left || {};
          const right = slide.right || {};
          return wrapSlide(
            `
              <h2 class="h2">${escapeHTML(title)}</h2>
              ${subtitle ? `<p class="sub">${escapeHTML(subtitle)}</p>` : ""}
              <hr class="sep" />
              <div class="grid-2">
                <div class="loose-panel">
                  ${left.kicker ? `<p class="kicker">${escapeHTML(left.kicker)}</p>` : ""}
                  ${left.text ? `<p class="sub" style="margin-top:10px;">${escapeHTML(left.text)}</p>` : ""}
                  ${renderBullets(left.bullets)}
                  ${renderBadges(left.badges)}
                </div>
                <div>
                  ${renderCards(right.cards, 2)}
                </div>
              </div>
            `,
            slide
          );
        }

        if (slide.layout === "cards") {
          return wrapSlide(
            `
              <h2 class="h2">${escapeHTML(title)}</h2>
              ${subtitle ? `<p class="sub">${escapeHTML(subtitle)}</p>` : ""}
              <hr class="sep" />
              ${renderCards(slide.cards, 2)}
              ${renderBadges(slide.badges)}
            `,
            slide
          );
        }

        if (slide.layout === "people") {
          return wrapSlide(
            `
              <h2 class="h2">${escapeHTML(title)}</h2>
              ${subtitle ? `<p class="sub">${escapeHTML(subtitle)}</p>` : ""}
              <hr class="sep" />
              ${renderPeople(slide.people)}
            `,
            slide
          );
        }

        if (slide.layout === "timeline") {
          return wrapSlide(
            `
              <h2 class="h2">${escapeHTML(title)}</h2>
              ${subtitle ? `<p class="sub">${escapeHTML(subtitle)}</p>` : ""}
              <hr class="sep" />
              ${renderTimeline(slide.items)}
            `,
            slide
          );
        }

        if (slide.layout === "links") {
          return wrapSlide(
            `
              <h2 class="h2">${escapeHTML(title)}</h2>
              ${subtitle ? `<p class="sub">${escapeHTML(subtitle)}</p>` : ""}
              <hr class="sep" />
              ${renderLinks(slide)}
            `,
            slide
          );
        }

        if (slide.layout === "modules") {
          return wrapSlide(
            `
              <h2 class="h2">${escapeHTML(title)}</h2>
              ${subtitle ? `<p class="sub">${escapeHTML(subtitle)}</p>` : ""}
              <hr class="sep" />
              ${renderModules(slide.modules)}
            `,
            slide
          );
        }

        return wrapSlide(
          `
            <h2 class="h2">${escapeHTML(title)}</h2>
            ${subtitle ? `<p class="sub">${escapeHTML(subtitle)}</p>` : ""}
            <hr class="sep" />
            <p class="sub">Layout desconhecido: <code>${escapeHTML(slide.layout)}</code></p>
          `,
          slide
        );
      }

      let activeSlide = null;
      let parallaxTarget = { x: 0, y: 0 };
      let parallaxCurrent = { x: 0, y: 0 };
      let parallaxRaf = null;

      function updateParallax() {
        if (!activeSlide) return;
        parallaxCurrent.x += (parallaxTarget.x - parallaxCurrent.x) * 0.08;
        parallaxCurrent.y += (parallaxTarget.y - parallaxCurrent.y) * 0.08;
        activeSlide.style.setProperty("--parallax-x", `${parallaxCurrent.x}px`);
        activeSlide.style.setProperty("--parallax-y", `${parallaxCurrent.y}px`);
        parallaxRaf = requestAnimationFrame(updateParallax);
      }

      function handleParallaxMove(event) {
        if (reducedMotion) return;
        if (!activeSlide?.dataset?.parallax) return;
        const rect = stage.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        parallaxTarget = { x: x * 18, y: y * 14 };
        if (!parallaxRaf) {
          parallaxRaf = requestAnimationFrame(updateParallax);
        }
      }

      function resetParallax() {
        if (!activeSlide) return;
        parallaxTarget = { x: 0, y: 0 };
        parallaxCurrent = { x: 0, y: 0 };
        activeSlide.style.setProperty("--parallax-x", "0px");
        activeSlide.style.setProperty("--parallax-y", "0px");
      }

      function render() {
        const slide = slides[index];
        stage.innerHTML = renderSlide(slide);
        activeSlide = stage.querySelector(".slide");
        resetParallax();
        updateCounter();
        setHash();
      }

      function openOverview() {
        overviewGrid.innerHTML = slides
          .map((s, i) => {
            const sub = s.subtitle || s.kicker || "";
            return `
              <div class="thumb" data-idx="${i}">
                <p class="thumb-title">${escapeHTML(String(i + 1).padStart(2, "0"))}. ${escapeHTML(s.title || "Sem título")}</p>
                <p class="thumb-sub">${escapeHTML(sub)}</p>
              </div>
            `;
          })
          .join("");

        overview.classList.remove("hidden");
      }

      function closeOverview() {
        overview.classList.add("hidden");
      }

      function toggleOverview() {
        if (overview.classList.contains("hidden")) openOverview();
        else closeOverview();
      }

      document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          if (!overview.classList.contains("hidden")) return;
          index = Math.min(slides.length - 1, index + 1);
          render();
          return;
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          if (!overview.classList.contains("hidden")) return;
          index = Math.max(0, index - 1);
          render();
          return;
        }
        if (e.key.toLowerCase() === "o") {
          e.preventDefault();
          toggleOverview();
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault();
          closeOverview();
          return;
        }
      });

      btnCloseOverview.addEventListener("click", closeOverview);

      overview.addEventListener("click", (e) => {
        const target = e.target.closest(".thumb");
        if (!target) return;
        const i = Number(target.getAttribute("data-idx"));
        if (!Number.isNaN(i)) {
          index = i;
          closeOverview();
          render();
          showToast(`Indo para: ${index + 1}/${slides.length}`);
        }
      });

      stage.addEventListener("click", () => {
        if (!overview.classList.contains("hidden")) return;
        index = Math.min(slides.length - 1, index + 1);
        render();
      });

      stage.addEventListener("mousemove", handleParallaxMove);
      stage.addEventListener("mouseleave", resetParallax);

      render();

      console.log("[Onboarding] mode =", mode, "| slides =", slides.length);
      console.log("[Onboarding] window.DECK =", window.DECK);
    })
    .catch((error) => {
      console.error("[Onboarding] Erro inesperado", error);
      renderError();
    });
})();
