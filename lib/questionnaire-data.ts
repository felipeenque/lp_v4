export const questionnaireData = {
  steps: [
    {
      title: "Informações Pessoais",
      fields: [
        { name: "idade", label: "Sua idade", type: "text", placeholder: "Ex.: 35" },
        {
          name: "capital",
          label: "Qual capital disponível para investir?",
          type: "radio",
          options: ["Até R$ 50 mil", "R$ 50 mil – R$ 100 mil", "Acima de R$ 100 mil"],
        },
      ],
    },
    {
      title: "Perfil Pessoal",
      fields: [
        {
          name: "faixaEtaria",
          label: "Qual é a sua faixa etária?",
          type: "radio",
          options: ["Menos de 25 anos", "25 a 34 anos", "35 a 44 anos", "45 a 54 anos", "55 anos ou mais"],
        },
        {
          name: "escolaridade",
          label: "Qual é o seu nível de escolaridade?",
          type: "radio",
          options: ["Ensino Médio completo", "Ensino Superior incompleto", "Ensino Superior completo", "Pós-graduação"],
        },
        {
          name: "experienciaGestao",
          label: "Você possui experiência prévia com gestão de negócios ou equipes?",
          type: "radio",
          options: [
            "Sim, como proprietário(a) de negócio",
            "Sim, como gestor(a) ou l��der de equipe",
            "Não, mas tenho muito interesse em aprender",
            "Não e não tenho interesse",
          ],
        },
        {
          name: "motivacao",
          label: "Como você descreveria sua principal motivação para empreender?",
          type: "radio",
          options: [
            "Busca por independência financeira",
            "Realização de um sonho pessoal",
            "Identificação de uma oportunidade de mercado",
            "Necessidade (falta de outras opções de trabalho)",
          ],
        },
        {
          name: "localizacao",
          label: "Qual é a sua cidade e estado de interesse para abrir a franquia?",
          type: "text",
          placeholder: "Ex: São Paulo, SP",
        },
      ],
    },
    {
      title: "Perfil Financeiro",
      fields: [
        {
          name: "capitalInvestimento",
          label:
            "Qual é o capital total que você dispõe para investir na franquia? (Incluindo taxa de franquia, capital de giro e custos de instalação)",
          type: "radio",
          options: [
            "Até R$ 50.000",
            "De R$ 50.001 a R$ 100.000",
            "De R$ 100.001 a R$ 200.000",
            "De R$ 200.001 a R$ 500.000",
            "Acima de R$ 500.000",
          ],
        },
        {
          name: "necessidadeFinanciamento",
          label: "Você necessitará de financiamento para compor o valor do investimento?",
          type: "radio",
          options: ["Sim, totalmente", "Sim, parcialmente", "Não, possuo capital próprio suficiente"],
        },
        {
          name: "expectativaPayback",
          label: "Qual é a sua expectativa de retorno do investimento (payback)?",
          type: "radio",
          options: ["Até 12 meses", "De 13 a 24 meses", "De 25 a 36 meses", "Acima de 36 meses"],
        },
        {
          name: "expectativaFaturamento",
          label: "Qual a sua expectativa de faturamento médio mensal?",
          type: "radio",
          options: ["Até R$ 30.000", "De R$ 30.001 a R$ 60.000", "De R$ 60.001 a R$ 100.000", "Acima de R$ 100.000"],
        },
      ],
    },
    {
      title: "Preferências de Negócio",
      fields: [
        {
          name: "segmento",
          label: "Segmento que você mais se identifica",
          type: "checkbox",
          options: ["Alimentação", "Serviços", "Saúde & Beleza"],
        },
      ],
    },
    {
      title: "Perfil Profissional e de Interesses",
      fields: [
        {
          name: "segmentosInteresse",
          label:
            "Em qual(is) segmento(s) de mercado você tem mais interesse ou experiência? (Pode marcar mais de uma opção)",
          type: "checkbox",
          options: [
            "Alimentação",
            "Saúde, Beleza e Bem-estar",
            "Serviços e Outros Negócios",
            "Casa e Construção",
            "Educação",
            "Entretenimento e Lazer",
            "Moda",
          ],
        },
        {
          name: "tempoDedicacao",
          label: "Quanto tempo você pretende dedicar à operação da franquia por dia?",
          type: "radio",
          options: [
            "Meio período (até 4 horas)",
            "Período integral (de 6 a 8 horas)",
            "Total dedicação (mais de 8 horas, incluindo finais de semana se necessário)",
          ],
        },
        {
          name: "formatoNegocio",
          label: "Você prefere um modelo de negócio que opere em qual formato?",
          type: "radio",
          options: [
            "Loja física (ponto comercial)",
            "Home office",
            "Modelo híbrido (home office com atendimento externo)",
          ],
        },
        {
          name: "nivelSuporte",
          label: "Qual nível de suporte da franqueadora você considera ideal?",
          type: "radio",
          options: [
            "Suporte completo em todas as áreas (marketing, operações, gestão)",
            "Suporte focado em áreas específicas que tenho menos conhecimento",
            "Suporte mínimo, prefiro ter mais autonomia",
          ],
        },
      ],
    },
    {
      title: "Perfil Comportamental",
      fields: [
        {
          name: "perfilRisco",
          label: "Como você lida com riscos?",
          type: "radio",
          options: [
            "Prefiro investimentos seguros e com baixo risco",
            "Estou disposto(a) a assumir riscos moderados por um retorno maior",
            "Gosto de assumir riscos calculados para maximizar os ganhos",
            "Sou bastante agressivo(a) e busco altos retornos, mesmo com riscos elevados",
          ],
        },
        {
          name: "habilidadeVendas",
          label: "Qual é o seu nível de habilidade com vendas e relacionamento com o cliente?",
          type: "radio",
          options: [
            "Avançado, tenho muita experiência e facilidade",
            "Intermediário, tenho alguma experiência, mas posso melhorar",
            "Básico, tenho pouca ou nenhuma experiência, mas estou disposto(a) a aprender",
          ],
        },
        {
          name: "relacaoProcessos",
          label: "Como você se sente em relação a seguir padrões e processos definidos pela franqueadora?",
          type: "radio",
          options: [
            "Muito confortável, prefiro ter um guia claro a seguir",
            "Confortável, entendo a importância, mas gosto de ter alguma flexibilidade",
            "Um pouco desconfortável, prefiro criar meus próprios métodos",
          ],
        },
      ],
    },
  ],
} as const
