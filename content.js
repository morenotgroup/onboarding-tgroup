// Edite este arquivo para atualizar conteúdos sem mexer no layout.
// Dica: mantenha tudo bem objetivo por slide (3–6 bullets) e use o campo "note" para lembretes do apresentador.

window.ONBOARDING_DATA = {
  meta: {
    deckTitle: "Onboarding T.Group",
    deckSubtitle: "Boas-vindas • Cultura • Rotinas • Benefícios • Performance 2026",
    year: 2026,
    // Troque para o link interno do GC/People Ops se vocês tiverem
    gcContato: "Gente e Cultura",
  },

  // 1) Quem somos
  whoWeAre: {
    headline: "Bem-vindo(a) ao T.Group",
    subheadline:
      "Aqui a gente mistura entretenimento, execução de alto nível e um jeito leve de trabalhar — com responsabilidade e segurança.",
    bullets: [
      "Holding focada em experiências: eventos, ativações, festas e operação completa.",
      "4 empresas em 2026: T.Youth, T.Brands, T.Venues e T.Dreams.",
      "A cultura puxa para colaboração, autonomia e entrega com qualidade.",
    ],
    note:
      "Abra com energia, contextualize o momento 2026 e mostre que onboarding não é só burocracia: é aceleração.",
  },

  // 2) Timeline
  timeline: {
    title: "Timeline: 2012 → 2026",
    // Importante: mantenha os marcos aqui como 'editáveis'. Se algum marco não existir, remova.
    items: [
      { year: 2012, title: "Fundação", desc: "Início da história do grupo no universo de eventos e experiências." },
      { year: 2015, title: "Escala", desc: "Expansão de operação e aumento do portfólio de projetos." },
      { year: 2018, title: "Profissionalização", desc: "Processos, áreas especialistas e base para crescer com consistência." },
      { year: 2020, title: "Resiliência", desc: "Adaptações de modelo, digital e replanejamento de operação." },
      { year: 2023, title: "Aceleração", desc: "Mais dados, mais tecnologia e mais integração entre empresas." },
      { year: 2026, title: "Performance + Tech", desc: "Ano de estruturar ciclos de performance, PDI e liderança para todo mundo." },
    ],
    note: "Se você tiver datas/nomes oficiais, atualize aqui para ficar 100% fiel à história real.",
  },

  // 3) Empresas
  companies: {
    title: "As empresas do T.Group",
    subtitle:
      "Cada empresa tem um foco — e a gente ganha jogo quando trabalha junto, sem vaidade e com clareza de escopo.",
    items: [
      {
        key: "T.Youth",
        logo: "assets/logos/tyouth.svg",
        what: "Universo universitário e formaturas",
        bullets: [
          "Atendimento e produção de bailes de gala e jornadas de formatura.",
          "Operação com alto volume e padrão de experiência.",
          "Interface diária com comissões, fornecedores e times internos.",
        ],
      },
      {
        key: "T.Brands",
        logo: "assets/logos/tbrands.svg",
        what: "Marcas, ativações e live marketing",
        bullets: [
          "Projetos com marcas (experiência, presença, conteúdo e conversão).",
          "Planejamento, criação e execução ponta a ponta.",
          "Foco em resultado e qualidade de entrega.",
        ],
      },
      {
        key: "T.Venues",
        logo: "assets/logos/tvenues.svg",
        what: "Espaços e locação",
        bullets: [
          "Captação e operação de espaços para eventos.",
          "Relacionamento com clientes e parceiros.",
          "Cuidado com experiência do público e do contratante.",
        ],
      },
      {
        key: "T.Dreams",
        logo: "assets/logos/tdreams.svg",
        what: "Festivais e propriedades",
        bullets: [
          "Criação/gestão de projetos e marcas próprias.",
          "Operações com alto impacto e narrativa.",
          "Portfólio pode incluir frentes como Ginga e Leto (ajuste conforme real).",
        ],
      },
    ],
    note:
      "Se você já tiver descrições oficiais curtas por empresa (2 linhas), substitua em 'what' e ajuste bullets.",
  },

  // 4) Sócios
  partners: {
    title: "Sócios",
    subtitle: "Quem toca as empresas no dia a dia.",
    people: [
      {
        name: "Guilherme Wolff",
        company: "T.Venues / T.Dreams (Ginga)",
        photo: "assets/people/placeholder-person.svg",
      },
      {
        name: "Lucas Jorge",
        company: "Financeiro • T.Youth",
        photo: "assets/people/placeholder-person.svg",
      },
      {
        name: "Vinicius David",
        company: "T.Youth",
        photo: "assets/people/placeholder-person.svg",
      },
      {
        name: "Luis Donato",
        company: "Produção • T.Youth",
        photo: "assets/people/placeholder-person.svg",
      },
      {
        name: "Matheus Gori",
        company: "T.Brands",
        photo: "assets/people/placeholder-person.svg",
      },
      {
        name: "Rafael Shinohara",
        company: "T.Dreams",
        photo: "assets/people/placeholder-person.svg",
      },
      {
        name: "Paulo Sério (Leto)",
        company: "T.Dreams",
        photo: "assets/people/placeholder-person.svg",
      },
    ],
    note:
      "Troque as fotos pelos headshots oficiais. Formatos recomendados: 1:1, 800x800, JPG/WebP.",
  },

  // 5) Cultura & combinados
  culture: {
    title: "Cultura & combinados",
    bullets: [
      "Respeito e segurança em primeiro lugar — principalmente em ambientes de evento.",
      "Diversidade é prática, não slogan: cuidado com linguagem, piadas e comportamentos.",
      "Feedback rápido, direto e com responsabilidade.",
      "Autonomia vem com alinhamento: avisa cedo, registra, entrega.",
    ],
    highlight:
      "Se algo te deixa desconfortável: fale com a liderança ou com Gente e Cultura. A porta tem que estar sempre aberta.",
  },

  // 6) Rituais
  rituals: {
    title: "Rituais do T.Group",
    subtitle: "Cultura acontece em rotina. Esses rituais são nosso 'ritmo'.",
    items: [
      {
        name: "Esportes T.Group",
        when: "mensal (agenda divulgada)",
        desc: "Prática esportiva para conexão e bem-estar. Zero pressão, 100% integração.",
      },
      {
        name: "Café com T",
        when: "mensal",
        desc: "Atualizações das empresas e da holding: conquistas, aprendizados e próximos movimentos.",
      },
      {
        name: "Aniversariantes",
        when: "mensal",
        desc: "Momento rápido de celebração e conexão. A gente não deixa passar batido.",
      },
      {
        name: "Happy Hour",
        when: "toda última quinta do mês",
        desc: "Encontro leve para fechar o mês e fortalecer a cultura. Sem obrigação — mas sempre vale.",
      },
      {
        name: "Manicure & Massagem",
        when: "agenda divulgada",
        desc: "Serviços com valores acessíveis. Bem-estar sem complicação.",
      },
      {
        name: "Folga de Aniversário",
        when: "1 dia/ano",
        desc: "Seu dia é seu dia. Combine com a liderança e registre conforme o processo interno.",
      },
    ],
  },

  // 7) Processos obrigatórios
  mandatory: {
    title: "Processos obrigatórios (sim, todo mês)",
    items: [
      {
        name: "NF-Express",
        frequency: "mensal",
        why: "Garante pagamento correto e previsibilidade financeira.",
        how: [
          "Recebe o link do período de envio (ou acesse o link fixo interno).",
          "Emita a NF com o valor orientado (se houver ajuste, GC entra em contato).",
          "Suba a NF dentro do prazo para não gerar atraso de pagamento.",
        ],
      },
      {
        name: "Enquete do almoço",
        frequency: "diária",
        why: "Evita desperdício e organiza a logística do almoço.",
        how: [
          "Preenche no dia anterior se vai almoçar na sede.",
          "No dia, preenche a ordem de chegada (para priorização e organização).",
        ],
      },
    ],
  },

  // 8) Benefícios (PJ)
  benefitsPJ: {
    title: "Benefícios para PJs",
    subtitle: "Benefícios bons viram retenção. Benefícios usados viram cultura.",
    items: [
      {
        name: "TotalPass",
        desc: "Bem-estar físico + apoio à saúde mental (conforme plano).",
      },
      {
        name: "Petin",
        desc: "Plataforma de cuidados para pets (parceria).",
      },
      {
        name: "Belas Artes",
        desc: "20% de desconto em todos os cursos (parceria).",
      },
      {
        name: "Programa Capacitar",
        desc: "Acesso a cursos online gratuitos na Udemy — disponível a qualquer momento.",
      },
      {
        name: "Férias",
        desc: "Direito a férias após 1 ano (alinhado com o contrato/política interna).",
      },
    ],
  },

  // 9) Performance 2026
  performance2026: {
    title: "Performance, PDI e Lideranças — 2026 é o ano",
    subtitle:
      "A partir de 2026, performance vira sistema (não achismo). E desenvolvimento vira trilha (não improviso).",
    bullets: [
      "Ciclos de performance com critérios claros e combinados por área.",
      "PDI para todo mundo: objetivos, trilhas e rituais de acompanhamento.",
      "Desenvolvimento de lideranças (inédito no grupo nesse formato).",
      "Decisão com dado + contexto: menos ruído, mais clareza de evolução.",
    ],
    note:
      "Linke com a apresentação GC 2026 e diga: 'isso aqui muda o jogo pra quem quer crescer rápido'.",
  },

  // 10) Fechamento
  closing: {
    title: "Próximos passos",
    bullets: [
      "Entrar nos grupos oficiais e salvar os links de rotina (NF-Express e almoço).",
      "Alinhar expectativas do seu escopo + primeiros 30 dias com sua liderança.",
      "Garantir acessos (e-mail, Drive, calendários, ferramentas internas).",
      "Qualquer dúvida: chama Gente e Cultura — melhor perguntar cedo do que apagar incêndio depois.",
    ],
    footer:
      "Bem-vindo(a). Agora é com você: cola com o time, entende o jogo e entrega bonito.",
  },
};
