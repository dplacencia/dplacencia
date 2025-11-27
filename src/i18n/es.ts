export const es = {
  locale: "es",
  nav: {
    home: "Inicio",
    services: "Servicios",
    about: "Sobre mí",
    workingTogether: "Cómo trabajo",
    contact: "Contacto",
    switcher: {
      en: "EN",
      es: "ES",
    },
  },
  meta: {
    homeTitle: "Daniel Placencia | Consultor Cloud, DevOps y SRE",
    homeDescription:
      "Consultoría en Cloud, DevOps y SRE para plataformas fiables, escalables y eficientes en AWS, Kubernetes y entornos híbridos.",
    servicesTitle: "Servicios | Consultoría Cloud, DevOps y SRE",
    servicesDescription:
      "Ofertas de consultoría de alto impacto para arquitectura cloud, fiabilidad, velocidad de entrega y plataformas preparadas para IA/LLM.",
    aboutTitle: "Sobre mí | Daniel Placencia",
    aboutDescription:
      "Consultor senior en Cloud/DevOps/MLOps/SRE con experiencia en AWS, Kubernetes, IaC, observabilidad e infraestructura de IA.",
    contactTitle: "Contacto | Trabaja conmigo",
    contactDescription: "Contacta para proyectos de consultoría, revisiones o soporte de incidencias.",
    workingTitle: "Cómo trabajo | Daniel Placencia",
    workingDescription:
      "Cómo trabaja Daniel como consultor independiente: modelo, facturación, disponibilidad y soporte.",
    notFoundTitle: "Página no encontrada | dplacencia.com",
  },
  hero: {
    label: "Cloud · DevOps · MLOps · SRE · Infraestructura IA",
    title: "Diseñando y mejorando plataformas cloud y on-prem para que los equipos entreguen con confianza.",
    subtitle:
      "Ayudo a equipos de ingeniería a operar infraestructuras estables, eficientes y escalables en AWS, Kubernetes y entornos on-prem — con soporte opcional para entornos preparados para GPU y cargas de trabajo de IA.",
    cards: [
      {
        title: "Listo para producción",
        body: "Cloud multi-cuenta, Kubernetes endurecido, guardrails con IaC.",
      },
      {
        title: "Menos incidencias",
        body: "Despliegues más seguros, SLOs, dashboards y buen on-call.",
      },
      {
        title: "Preparado para IA/LLM",
        body: "Clusters preparados para GPU e inferencia que aguantan producción.",
      },
    ],
    tech: [
      "AWS · GCP · Azure",
      "Infraestructura híbrida / on-prem",
      "Kubernetes · Helm · ArgoCD",
      "Terraform · OpenTofu · GitOps",
      "Seguridad y observabilidad (Vault · PKI · Grafana Stack)",
      "Infraestructura IA / GPU",
    ],
    ctas: {
      primary: "Ver servicios de consultoría",
      secondary: "Contactar sobre un proyecto",
      tertiary: "Reservar vía Malt",
    },
    outcomesTitle: "Resultados que entrego",
    outcomes: [
      "Entornos productivos estabilizados con SLOs y runbooks claros",
      "Releases más rápidas y seguras con CI/CD y políticas de despliegue",
      "Plataformas cloud con control de costes y visibilidad",
      "Bases en Kubernetes/ECS listas para IA/LLM y GPU",
    ],
    bestFitTitle: "Clientes ideales",
    bestFit:
      "Equipos SaaS, scale-ups y fundadores en etapa temprana que necesitan arquitectura fiable en la nube/on-prem, pipelines de entrega mas solidos, mayor visibilidad o preparacion para cargas de IA, sin aumentar plantilla.",
    resultsTitle: "Resultados recientes",
    resultsNote: "Anonimizados, logrados en otros proyectos",
    results: [
      {
        title: "40% despliegues más rápidos",
        body: "Optimicé pipelines de GitHub Actions e IaC para acortar ciclos de build/deploy y reducir operaciones manuales.",
      },
      {
        title: "60% releases más rápidas",
        body:
          "Rearquitecturé GitLab CI/CD con ArgoCD + Argo Rollouts para despliegues más seguros, reduciendo lead time y aumentando la confianza.",
      },
      {
        title: "EKS endurecido + observabilidad",
        body:
          "Entregué AWS multi-cuenta con EKS, PKI respaldada por Vault y baselines de Prometheus/Grafana/Loki para SLOs claros.",
      },
    ],
    processTitle: "Cómo trabajo",
    processNote: "Colaboraciones enfocadas y de bajo ruido",
    processSteps: [
      { title: "Analizar", body: "Discovery rápido en arquitectura, delivery y operaciones; acordar criterios de éxito." },
      { title: "Planificar", body: "Roadmap priorizado 30–90 días con quick wins y control de riesgos." },
      {
        title: "Estabilizar",
        body: "Implementar guardrails, observabilidad, mejoras en CI/CD y hábitos de incidentes.",
      },
      { title: "Capacitar", body: "Entregar runbooks, dashboards y prácticas para que el equipo sea autónomo." },
    ],
  },
  services: {
    heading: "Servicios",
    intro:
      "Consultoría de alto impacto y bajo ruido, centrada en fiabilidad cloud, velocidad de entrega y plataformas listas para IA/LLM.",
    learnMore: "¿Quieres saber cómo trabajo como consultor independiente?",
    learnMoreLink: "Saber más →",
    offers: [
      {
        title: "Revisión de Arquitectura y Roadmap",
        duration: "2–3 semanas",
        description:
          "Evaluación profunda de bases AWS + Kubernetes (cloud o híbrido/on-prem): multi-cuenta, seguridad, CI/CD, observabilidad y control de costes.",
        items: [
          "Informe de hallazgos con prioridades",
          "Roadmap de 30–90 días con quick wins",
          "Arquitecturas de referencia y guardrails",
        ],
        note: "Ideal para: equipos que van a escalar o tienen riesgos de fiabilidad/costes.",
      },
      {
        title: "Uplift de Fiabilidad y Delivery",
        duration: "4–8 semanas",
        description:
          "Estabilizar producción y acelerar releases: pipelines más seguros, estrategias de despliegue, SLOs, runbooks y observabilidad.",
        items: [
          "Endurecimiento de CI/CD (feature flags, canary/blue-green)",
          "SLOs, alertas, dashboards y buen on-call",
          "Runbooks de incidentes y operación",
        ],
        note: "Ideal para: equipos que entregan pero viven apagando fuegos o lanzan lento.",
      },
      {
        title: "Infraestructura IA / LLM",
        duration: "3–6 semanas",
        description:
          "Entornos cloud preparados para GPU para inferencia/entrenamiento: Kubernetes o ECS con red segura, control de costes y monitorización real.",
        items: [
          "Diseño de clusters con autoscaling y scheduling de GPU",
          "Observabilidad de latencia, coste y señales de calidad de modelo",
          "Plantillas IaC y runbooks de despliegue",
        ],
        note: "Ideal para: equipos que productizan IA y necesitan operación de nivel producción.",
      },
      {
        title: "Soporte de Incidentes Puntual",
        duration: "",
        description:
          "Ayuda corta y focalizada para incidencias: fiabilidad en Kubernetes, red en AWS, rendimiento o picos de coste.",
        items: [],
        note: "Tiempo de respuesta y alcance se acuerdan por engagement.",
      },
    ],
  },
  about: {
    heading: "Sobre mí",
    intro:
      "Soy Daniel Placencia Alvarez, consultor senior en Cloud/DevOps/MLOps/SRE especializado en AWS, Kubernetes, IaC, observabilidad e infraestructura IA/LLM. Ayudo a equipos de ingeniería a estabilizar producción, acelerar delivery y mantener las plataformas seguras y con control de costes.",
    recentWork: "Experiencia reciente",
    roles: [
      {
        title: "DevOps Engineer — Celtiberian Solutions",
        dates: "Ene 2025 – Presente",
        body: "AWS multi-cuenta, EKS con PKI en Vault, baselines de observabilidad, aceleración de CI/CD.",
      },
      {
        title: "Tech Lead / DevOps Specialist — DSpot",
        dates: "Oct 2021 – Dic 2024",
        body: "Reingeniería de CI/CD (60% releases más rápidas), migración a AWS con Terraform/OpenTofu, integración ePOS.",
      },
      {
        title: "MLOps Specialist — datwit",
        dates: "Abr 2021 – Sep 2024",
        body: "Pipelines en AWS SageMaker/ECS, APIs sensibles a latencia, monitorización con CloudWatch + Grafana/Prometheus.",
      },
      {
        title: "HPC & Data Center Sysadmin — UCLV",
        dates: "Sep 2019 – Abr 2022",
        body: "Automatización con Puppet/Ansible, almacenamiento Ceph, adopción de CI/CD, hardening de seguridad.",
      },
    ],
    credentialsTitle: "Credenciales",
    credentials: [
      {
        label: "AWS Certified Solutions Architect – Associate",
        suffix: " (válida hasta jun 2026)",
        link: "https://www.credly.com/badges/69980c64-8b3a-49eb-b4b3-8f97bc3020cd",
      },
      { label: "Ingeniería en Telecomunicaciones y Electrónica (UCLV)" },
    ],
    languagesTitle: "Idiomas",
    languages: ["Español (nativo)", "Inglés (profesional)"],
  },
  contact: {
    heading: "Contacto",
    intro: "Para proyectos de consultoría, revisiones de arquitectura o soporte de incidencias, contáctame en:",
    emailLabel: "Email",
    emailResponse: "(suelo responder en 1 día laborable)",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    maltLabel: "Malt",
    maltProfile: "Perfil en Malt",
    maltNote: "Si prefieres, reserva y gestiona el proyecto allí.",
    emailCta: "contact@dplacencia.com",
    mailtoSubject: "Consulta de proyecto para Daniel Placencia",
    mailtoBody:
      "Hola Daniel,%0A%0ANecesitamos ayuda con [contexto breve]. Tamaño de equipo: [] Stack: [] Plazo: []%0A%0AGracias.",
  },
  workingTogether: {
    label: "Cómo trabajo",
    heading: "Cómo trabajo",
    howTitle: "Cómo trabajo",
    howBody: [
      "Trabajo como consultor independiente con base en España y 100% remoto, priorizando lo asíncrono. Colaboro con líderes de ingeniería y founders mediante alcances claros, entregables definidos y comunicación transparente, no con esquemas abiertos de “time & materials”.",
      "Me enfoco en arquitectura, diseño de plataforma y mejoras de alto impacto en infraestructura cloud / on-prem / híbrida, no en cubrir un rol genérico de “un par de manos extra”.",
    ],
    businessTitle: "Modelo y facturación",
    businessBody: [
      "Trabajo en modelo B2B como autónomo registrado en España. También estoy dado de alta como operador intracomunitario (VIES), por lo que clientes de la UE pueden facturar sin IVA bajo inversión del sujeto pasivo.",
      "Las facturas pueden emitirse mensualmente o por hitos, según el engagement. Métodos de pago habituales: transferencia SEPA y soluciones de negocio como Revolut Business / Pro.",
    ],
    availabilityTitle: "Disponibilidad y soporte",
    availabilityBody: [
      "Llevo un número limitado de clientes a la vez para mantener profundidad y calidad. La mayoría de las colaboraciones son de dedicación parcial, centradas en revisiones de arquitectura, mejoras de plataforma, prácticas DevOps/SRE e infraestructura relacionada con IA.",
      "El trabajo de incidentes urgentes o críticos (caídas en producción, inestabilidad grave) puede acordarse con un modelo de respuesta prioritaria, prepago y una estructura de tarifas diferente.",
    ],
  },
  notFound: {
    label: "404",
    heading: "Esta página no existe.",
    body:
      "Si escribiste la dirección, revisa la URL. De lo contrario, vuelve a inicio o avísame si crees que hay un problema.",
    home: "Volver al inicio",
    report: "Reportar un problema",
  },
  footer: {
    tagline: "Cloud · DevOps · MLOps · SRE · Infra IA",
  },
};
