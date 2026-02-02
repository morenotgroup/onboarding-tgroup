// content.js
// Tudo no window para evitar problema de import/export no deploy.

window.DECK_SETTINGS = {
  // "60" = deck completo / "40" = deck mais direto (remove slides marcados como pace:"deep")
  mode: "60"
};

window.DECK = {
  meta: {
    brandPill: "T.Group • 2026",
    title: "Onboarding T.Group",
    subtitle: "Boas-vindas • Cultura • Rotinas • Benefícios • Performance 2026",
    note: "Use este material como base e personalize por área.",
    contactLabel: "Contato: Gente e Cultura",
    contactUrl: "https://example.com" // coloque aqui o link do canal oficial/GC hub se quiser
  },

  slides: [
    // 0 — CAPA
    {
      id: "capa",
      layout: "cover",
      title: "t.group",
      kicker: "Onboarding 2026",
      subtitle: "Boas-vindas • Cultura • Rotinas • Benefícios • Performance",
      footerLeft: "← → / Space • O overview"
    },

    // 1 — AGENDA
    {
      id: "agenda",
      layout: "bullets",
      title: "O que você vai levar daqui hoje",
      subtitle: "Um onboarding direto, sem enrolação — e que te deixa pronto(a) pro jogo.",
      bullets: [
        "Quem é o T.Group e como a casa funciona",
        "Empresas do grupo (o que cada uma faz)",
        "Rituais e rotina da sede (o que é “padrão da casa”)",
        "Processos obrigatórios (NF-Express, almoço e estacionamento)",
        "Benefícios PJ + desenvolvimento (Performance, PDI e Lideranças 2026)",
        "Onde estão as coisas (hub de links + QR)"
      ],
      
    },

    // 2 — QUEM SOMOS
    {
      id: "quem-somos",
      layout: "twoCol",
      title: "O que é o T.Group",
      left: {
        kicker: "Visão rápida",
        text: "Somos uma holding de entretenimento e experiências. Aqui, a gente trabalha com velocidade, criatividade e responsabilidade — com espaço pra autonomia, mas com combinado claro."
      },
      right: {
        cards: [
          { title: "O que valorizamos", text: "Clareza + ritmo + parceria. Entrega forte sem perder respeito e segurança." },
          { title: "Como você cresce aqui", text: "Performance com suporte (feedback, PDI e liderança mais estruturada em 2026)." },
          { title: "Como a gente opera", text: "Processos simples e consistentes (NF, almoço, comunicação e rituais)." },
          { title: "Cultura viva", text: "Rituais mensais + convivência segura + ambiente que dá vontade de estar." }
        ]
      }
    },

    // 3 — TIMELINE (placeholders editáveis)
    {
      id: "timeline",
      layout: "timeline",
      title: "Timeline (2012 → 2026)",
      subtitle: "Ajuste os marcos abaixo com a história oficial (a estrutura já está pronta).",
      items: [
        { year: "2012", title: "Fundação", text: "Início da história do grupo e das primeiras operações." },
        { year: "2016", title: "Crescimento e consolidação", text: "Expansão de operação, público e capacidade de entrega." },
        { year: "2020", title: "Resiliência + reinvenção", text: "Adaptações de portfólio e modelo de execução." },
        { year: "2023", title: "Estruturação e dados", text: "Mais processo, mais controle, mais consistência no dia a dia." },
        { year: "2024", title: "Cultura e rituais", text: "Rituais ganham força: Café com T, HH, esportes e etc." },
        { year: "2025", title: "Escala e padronização", text: "Sistemas e rotinas para reduzir ruído e aumentar performance." },
        { year: "2026", title: "Ano de performance + tecnologia", text: "GC puxando performance, PDI e desenvolvimento de lideranças em escala." }
      ]
    },

    // 4 — EMPRESAS (VISÃO)
    {
      id: "empresas-visao",
      layout: "cards",
      title: "Empresas do T.Group (2026)",
      subtitle: "Quatro frentes que se complementam — cada uma com sua especialidade.",
      cards: [
        { title: "T.Youth", text: "Operação e atendimento de formaturas e bailes de gala. Ritmo alto, execução e encantamento." },
        { title: "T.Venues", text: "Captação, gestão e operação de espaços. Experiência e padrão de entrega." },
        { title: "T.Brands", text: "Relação com marcas, ativações e parcerias. Comercial + estratégia + execução." },
        { title: "T.Dreams", text: "Festivais e festas para o público 25+ (ex.: Raiz - Lauana, Tudo vira Reggae - Maneva, Ginga 2026). Projetos que viram memória." }
      ],
      
    },

    // 5–8 — EMPRESAS (DEEP) — some no modo 40
    {
      id: "tyouth",
      layout: "bullets",
      title: "T.Youth",
      subtitle: "Formaturas, bailes e experiências que marcam.",
      pace: "deep",
      bullets: [
        "Operação ponta a ponta: atendimento, planejamento e execução",
        "Experiência do formando como prioridade",
        "Ritmo alto e alinhamento constante entre áreas"
      ],
      badges: ["Para quem atua diretamente", "Para contexto de quem está em outra empresa"]
    },
    {
      id: "tvenues",
      layout: "bullets",
      title: "T.Venues",
      subtitle: "Espaços e operação impecável.",
      pace: "deep",
      bullets: [
        "Captação + relacionamento com clientes",
        "Gestão de agenda e contratos",
        "Operação do espaço: padrão, segurança e experiência"
      ]
    },
    {
      id: "tbrands",
      layout: "bullets",
      title: "T.Brands",
      subtitle: "Marcas, ativações e parceria real.",
      pace: "deep",
      bullets: [
        "Comercial e relacionamento",
        "Ativações e campanhas com execução forte",
        "Conectar marca ao público com criatividade + resultado"
      ]
    },
    {
      id: "tdreams",
      layout: "bullets",
      title: "T.Dreams",
      subtitle: "Festivais e festas 25+: de ideia a experiência.",
      pace: "deep",
      bullets: [
        "Construção e gestão de projetos",
        "Ex.: Ginga como frentes do ecossistema",
        "Planejamento, produção e padrão de entrega"
      ]
    },

    // 9 — SÓCIOS (com placeholders de foto)
    {
      id: "socios",
      layout: "people",
      title: "Sócios do T.Group",
      subtitle: "Quem lidera as frentes do grupo (substitua as fotos em /assets/people/).",
      people: [
        { name: "Guilherme Wolff", role: "T.Venues • T.Dreams (Ginga)", photo: "assets/people/placeholder-person.svg" },
        { name: "Lucas Jorge", role: "Financeiro • T.Youth", photo: "assets/people/placeholder-person.svg" },
        { name: "Vinicius David", role: "T.Youth", photo: "assets/people/placeholder-person.svg" },
        { name: "Luis Donato", role: "Produção • T.Youth", photo: "assets/people/placeholder-person.svg" },
        { name: "Matheus Gori", role: "T.Brands", photo: "assets/people/placeholder-person.svg" },
        { name: "Rafael Shinohara", role: "T.Dreams", photo: "assets/people/placeholder-person.svg" },
        { name: "Paulo Sério (Leto)", role: "T.Dreams", photo: "assets/people/placeholder-person.svg" }
      ]
    },

    // 10 — JEITO DE TRABALHAR
    {
      id: "jeito",
      layout: "twoCol",
      title: "Jeito T.Group de trabalhar",
      left: {
        kicker: "Combinação que funciona",
        text: "A gente é jovem, rápido e intenso — então o que segura a qualidade é: combinado claro + comunicação objetiva + respeito."
      },
      right: {
        cards: [
          { title: "Autonomia com alinhamento", text: "Você tem espaço. Mas sempre com dono, prazo e combinado explícito." },
          { title: "Comunicação objetiva", text: "Menos ruído. Mais clareza. Se algo travar, chama cedo." },
          { title: "Execução com padrão", text: "Evento bonito é só o resultado — o backstage tem processo." },
          { title: "Respeito e segurança", text: "Ambiente seguro não é “extra”: é base." }
        ]
      }
    },

    // 11 — RITUAIS
    {
      id: "rituais",
      layout: "cards",
      title: "Rituais que mantêm a cultura viva",
      subtitle: "O que acontece todo mês — pra conectar, alinhar e dar vibe de time.",
      cards: [
        { title: "Café com T", text: "Ritual mensal de alinhamento e visão geral do grupo." },
        { title: "Esportes T.Group", text: "Prática esportiva e integração — reforça vínculo e saúde." },
        { title: "Happy Hour (última quinta)", text: "Encontro leve pra fechar o mês e integrar geral." },
        { title: "Aniversariantes do mês", text: "Celebração e reconhecimento — simples e consistente." }
      ]
    },

    // 12 — SERVIÇOS + FOLGA
    {
      id: "servicos",
      layout: "bullets",
      title: "Serviços e qualidade de vida",
      subtitle: "Coisas simples que fazem diferença de verdade.",
      bullets: [
        "Manicure e Massagem com valores acessíveis (calendário divulgado pela GC)",
        "Folga de aniversário (regras e forma de solicitar com GC)",
        "Rituais sociais que fortalecem vínculo (sem virar obrigação chata)"
      ],
      
    },

    // 13 — PROCESSOS OBRIGATÓRIOS
    {
      id: "processos",
      layout: "twoCol",
      title: "Processos obrigatórios (sem drama)",
      left: {
        kicker: "Mensal + Diário",
        text: "Essas rotinas evitam ruído, atrasos e desgaste desnecessário. O combinado é simples."
      },
      right: {
        cards: [
          { title: "Mensal: Nota Fiscal (NF-Express)", text: "Envio dentro do prazo definido. Evita atraso de pagamento e retrabalho." },
          { title: "Diário: Enquete do almoço", text: "Você avisa se vem no dia seguinte — ajuda cozinha, organização e fluxo." },
          { title: "Diário: Ordem de chegada do almoço", text: "Rotina da casa pra organizar o atendimento e reduzir bagunça." },
          { title: "Presencial: Estacionamento", text: "Tem grupo específico pra organizar as vagas de quem vem de carro." }
        ]
      }
    },

    // 14 — NF EXPRESS
    {
      id: "nfexpress",
      layout: "bullets",
      title: "NF-Express (o básico que você precisa saber)",
      subtitle: "GC centraliza o processo pra facilitar tua vida — e manter tudo em ordem.",
      bullets: [
        "Quem emite: colaboradores PJ conforme combinado com GC",
        "Prazo: sempre acompanhar a comunicação oficial do mês",
        "Se mudou salário/área: GC valida o valor antes do envio",
        "Envio fora do prazo = risco real de atraso e retrabalho"
      ],
      
    },

    // 15 — ALMOÇO
    {
      id: "almoco",
      layout: "bullets",
      title: "Almoço: enquetes diárias",
      subtitle: "Parece pequeno, mas organiza tudo (e evita estresse).",
      bullets: [
        "Enquete: quem vem no dia seguinte",
        "Enquete: ordem de chegada do almoço",
        "Objetivo: previsibilidade, agilidade e menos confusão na sede"
      ],
      
    },

    // 16 — ESTACIONAMENTO
    {
      id: "estacionamento",
      layout: "twoCol",
      title: "Estacionamento (organização das vagas)",
      left: {
        kicker: "Presencial + carro",
        text: "Pra deixar justo e organizado, usamos um grupo específico para coordenar quem vai de carro nos dias presenciais."
      },
      right: {
        cards: [
          { title: "Como funciona", text: "Você avisa no grupo quando pretende ir de carro e verifica disponibilidade." },
          { title: "Por que existe", text: "Evita conflito, improviso e correria na chegada." },
          { title: "Boa prática", text: "Avisar com antecedência + transparência de uso." },
          { title: "Link do grupo", text: "Coloque o link oficial no hub de links (slide “Onde estão as coisas”)." }
        ]
      }
    },

    // 17 — BENEFÍCIOS PJ
    {
      id: "beneficios",
      layout: "cards",
      title: "Benefícios para PJ",
      subtitle: "O pacote 2026 pensado pra facilitar vida e incentivar desenvolvimento.",
      cards: [
        { title: "TotalPass", text: "Bem-estar físico + apoio à saúde mental (acesso conforme regras divulgadas)." },
        { title: "Petin", text: "Plataforma de cuidados e benefícios para pets." },
        { title: "Belas Artes (20%)", text: "Desconto nos cursos parceiros (ver regras e cursos válidos)." },
        { title: "Capacitar (cursos online)", text: "Acesso a cursos online gratuitos pra estudar quando e onde quiser." },
        { title: "Férias após 1 ano", text: "Regra aplicada conforme política e alinhamento com GC." },
        { title: "Ritual + cultura", text: "Esportes, HH e ações mensais também são “benefício real”." }
      ]
    },

    // 18 — PERFORMANCE (core)
    {
      id: "performance",
      layout: "twoCol",
      title: "Performance 2026 (de um jeito mais adulto)",
      left: {
        kicker: "Inédito em escala",
        text: "Em 2026, GC vai rodar ações de performance com todos os colaboradores — com régua clara e suporte real."
      },
      right: {
        cards: [
          { title: "O que muda", text: "Mais clareza de expectativas, prioridades e feedback." },
          { title: "O que não muda", text: "Cultura jovem e dinâmica — só com mais direção." },
          { title: "Como funciona", text: "Ciclos + conversas estruturadas + registro simples." },
          { title: "Por que isso é bom", text: "Menos ruído, mais crescimento e reconhecimento justo." }
        ]
      }
    },

    // 19 — PDI
    {
      id: "pdi",
      layout: "bullets",
      title: "PDI (Plano de Desenvolvimento Individual)",
      subtitle: "A ideia é simples: metas de crescimento + compromissos práticos + acompanhamento.",
      bullets: [
        "1–3 objetivos de desenvolvimento por ciclo",
        "Ações claras: curso, prática, shadowing, leitura, projeto",
        "Acompanhamento em checkpoints (sem virar burocracia)",
        "Alinhamento: colaborador + liderança + GC"
      ],
      badges: ["Clareza", "Acompanhamento", "Evolução real"]
    },

    // 20 — LIDERANÇAS
    {
      id: "liderancas",
      layout: "bullets",
      title: "Desenvolvimento de lideranças",
      subtitle: "Liderar bem reduz turnover e aumenta performance — ponto.",
      bullets: [
        "Rituais de liderança: 1:1, feedback e alinhamento",
        "Competências: comunicação, decisão, delegação, segurança psicológica",
        "GC apoiando: guias, acompanhamento e trilhas"
      ],
      
    },

    // 21 — AMBIENTE SEGURO
    {
      id: "ambiente-seguro",
      layout: "twoCol",
      title: "Ambiente seguro",
      left: {
        kicker: "Regra de ouro",
        text: "Respeito e segurança são inegociáveis. Aqui não tem espaço pra assédio, humilhação, ameaça ou “brincadeira” que constrange."
      },
      right: {
        cards: [
          { title: "O que esperamos", text: "Postura respeitosa, linguagem adequada, consentimento e limites claros." },
          { title: "Se algo acontecer", text: "Procure GC. Você será acolhido(a) com seriedade e sigilo." },
          { title: "Não retaliação", text: "Reportar não pode virar punição indireta. Isso é compromisso." },
          { title: "Cuidado coletivo", text: "Se viu algo errado, não normaliza: chama GC." }
        ]
      }
    },

    // 22 — HUB LINKS + QR
    {
      id: "hub",
      layout: "links",
      title: "Onde estão as coisas",
      subtitle: "Esse slide vira seu “hub oficial”. Troque os links e pronto.",
      qrLabel: "Abra este hub no celular",
      // DICA: coloque aqui o link da SUA página/hub (pode ser um Notion, Google Site, ou uma página do seu próprio Vercel)
      qrUrl: "em breve",
      links: [
        { icon: "🧾", label: "NF-Express", url: "https://seu-link-nf-express-aqui", note: "Envio mensal de nota fiscal (PJ)" },
        { icon: "🍽️", label: "Enquete do almoço", url: "https://seu-link-enquete-almoco-aqui", note: "Quem vem amanhã + organização" },
        { icon: "⏱️", label: "Ordem de chegada", url: "https://seu-link-ordem-chegada-aqui", note: "Fila / ordem de atendimento do almoço" },
        { icon: "🚗", label: "Grupo Estacionamento", url: "https://seu-link-grupo-estacionamento-aqui", note: "Organização das vagas nos dias presenciais" },
        { icon: "💪", label: "Esportes T.Group", url: "https://seu-link-esportes-aqui", note: "Calendário e como participar" },
        { icon: "🎉", label: "Rituais do mês", url: "https://seu-link-rituais-aqui", note: "Café com T, HH, aniversariantes, etc." },
        { icon: "🎓", label: "Capacitar (cursos)", url: "https://seu-link-capacitar-aqui", note: "Cursos e trilhas (PJ)" },
        { icon: "🧠", label: "Benefícios (guia)", url: "https://seu-link-beneficios-aqui", note: "TotalPass, Petin, Belas Artes e regras" }
      ],
      
    },

    // 23 — 30/60/90 (fechamento)
    {
      id: "309090",
      layout: "twoCol",
      title: "30 • 60 • 90 dias (pra você começar bem)",
      left: {
        kicker: "Primeiros 30",
        text: "Entender contexto, rotina, prioridades e padrão de entrega."
      },
      right: {
        cards: [
          { title: "30 dias", text: "Conhecer time, processos, expectativas e “como a casa funciona”." },
          { title: "60 dias", text: "Entregar com mais autonomia e reduzir dependência." },
          { title: "90 dias", text: "Dominar rotina + contribuir com melhoria (sem atropelar)." },
          { title: "Sempre", text: "Dúvida travando = chama cedo (liderança/GC)." }
        ]
      }
    }
  ]
};
