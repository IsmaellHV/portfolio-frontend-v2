export type Locale = 'es' | 'en';

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  status: string;
  tagline: string;
  summary: string;
  socials: SocialLink[];
}

export interface Stat {
  num: string;
  label: string;
}

export interface ExperienceRole {
  role: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Experience {
  company: string;
  period: string;
  duration?: string;
  current?: boolean;
  location?: string;
  roles: ExperienceRole[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year?: string;
  client?: string;
  link?: string;
  image?: string;
  github?: string;
}

export interface About {
  paragraphs: string[];
  meta: Array<[string, string]>;
}

export interface SectionTitles {
  about: string;
  aboutHeadline: string;
  experience: string;
  experienceHeadline: string;
  projects: string;
  projectsHeadline: string;
}

export interface PortfolioData {
  profile: Profile;
  sections: SectionTitles;
  about: About;
  experiences: Experience[];
  featuredProjects: Project[];
  stats: Stat[];
}

export interface LocaleMessages {
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  actions: {
    viewAllProjects: string;
    viewFullExperience: string;
    backHome: string;
    visitProject: string;
    workTogether: string;
    seeProjects: string;
    theme: string;
  };
  pages: {
    projectsTitle: string;
    experienceTitle: string;
  };
  contact: {
    kicker: string;
    headline: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    errorGeneric: string;
    errorCaptcha: string;
    errorRequiredName: string;
    errorRequiredEmail: string;
    errorInvalidEmail: string;
    errorRequiredMessage: string;
  };
}

export const PORTFOLIO_BY_LOCALE: Record<Locale, PortfolioData> = {
  es: {
    profile: {
      name: 'Ismael Hurtado Vargas',
      role: 'Full-Stack & Mobile · IA',
      status: 'Lima, PE',
      tagline: 'Construyo productos web y móviles que combinan rendimiento, diseño cuidado y automatización con IA.',
      summary: 'Construyo productos web y móviles con enfoque en rendimiento, UX y automatización con IA.',
      socials: [
        { platform: 'GitHub', url: 'https://github.com/ismaellhv' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ihurtadov' },
      ],
    },
    sections: {
      about: 'Acerca de mí',
      aboutHeadline: 'Ingeniero Full-Stack centrado en producto, performance y craft.',
      experience: 'Experiencia',
      experienceHeadline: 'Roles donde he construido cosas reales.',
      projects: 'Trabajo seleccionado',
      projectsHeadline: 'Trabajo seleccionado.',
    },
    about: {
      paragraphs: [
        'Soy un desarrollador Full-Stack apasionado con buen ojo para el diseño y motivación por el rendimiento. Trabajo en tecnología desde 2014 y como desarrollador profesional desde 2016, perfeccionando habilidades tanto en frontend como en backend.',
        'Me especializo en la intersección entre sistemas backend complejos e interfaces intuitivas. Actualmente exploro las potencialidades de la IA en el desarrollo de software, automatizando flujos de trabajo y creando aplicaciones más inteligentes.',
      ],
      meta: [
        ['Ubicación', 'Lima, Perú'],
        ['Idiomas', 'Español · Inglés'],
        ['Enfoque', 'Web · Mobile · IA'],
      ],
    },
    stats: [
      { num: '10+', label: 'Años en tech' },
      { num: '20+', label: 'Sistemas en producción' },
      { num: '5+', label: 'Empresas / clientes' },
    ],
    experiences: [
      {
        company: 'Dae Hipotecaria',
        period: 'May 2025 — 2026',
        duration: '1 año',
        location: 'Lima, Perú',
        roles: [
          {
            role: 'Full-Stack Developer',
            period: 'May 2025 — 2026',
            description: [
              'Sistema de ministraciones para la gestión y control de desembolsos por etapas en créditos hipotecarios.',
              'Workflow de aprobación con notificaciones a tasadores, área legal y tesorería.',
              'Servicios en Python para validación documental e integraciones con buró crediticio.',
              'Despliegue containerizado y entornos reproducibles con Docker.',
            ],
            tags: ['React', 'NestJS', 'Node.js', 'Prisma', 'Python', 'Docker'],
          },
        ],
      },
      {
        company: 'Exandal Holding Group',
        period: '2025 — 2026',
        duration: '1 año',
        location: 'Lima, Perú',
        roles: [
          {
            role: 'Full-Stack Developer',
            period: '2025 — 2026',
            description: [
              'Sistema de gestión y análisis de calidad para productos agroindustriales: tara, quinua, harina y goma de tara.',
              'Registro de muestras, ensayos de laboratorio (humedad, taninos, granulometría) y trazabilidad por lote.',
              'Integración con SAP para sincronizar lotes, órdenes de producción e inventario.',
            ],
            tags: ['JavaScript', 'Node.js', 'MongoDB', 'SAP'],
          },
        ],
      },
      {
        company: 'Municipalidad Metropolitana de Lima',
        period: '2023 — 2026',
        duration: '3 años',
        location: 'Lima, Perú',
        roles: [
          {
            role: 'Senior Software Developer',
            period: '2023 — 2026',
            description: [
              'Implementación del Sistema Integrado de Administración Municipal (SIAM).',
              'Servicios backend para las apps Lima Segura y Voluntarios por Lima.',
              'ChatBot con RAG para atención automatizada de consultas TUPA y no-TUPA.',
              'ChatBot con IA para la generación automática de tickets.',
            ],
            tags: ['React', 'NestJS', 'Node.js', 'Prisma', 'Docker'],
          },
        ],
      },
      {
        company: 'Autoridad de Transporte Urbano (ATU)',
        period: '2020 — 2023',
        duration: '2 años',
        location: 'Lima, Perú',
        roles: [
          {
            role: 'Software Developer',
            period: '2020 — 2023',
            description: [
              'Módulo de tickets en el Sistema de Registro de Actividades (SRA).',
              'Módulo TUPA del Sistema de Pasarela de Pagos.',
              'Control de acceso en el Sistema de Sintomatología.',
              'Pagos y consulta de deuda en SISATU.',
              'Gestión de almacén y órdenes de trabajo en el Sistema Operacional.',
            ],
            tags: ['Angular', 'Node.js', 'SQL Server', 'REST'],
          },
        ],
      },
      {
        company: 'Cobra Perú',
        period: '2014 — 2021',
        duration: '6 años',
        location: 'Lima, Perú',
        roles: [
          {
            role: 'Software Developer',
            period: '2018 — 2021',
            description: [
              'Aplicaciones web con Vanilla JavaScript en el frontend y Node.js en el backend, integradas con servicios REST.',
            ],
            tags: ['JavaScript', 'Node.js', 'REST'],
          },
          {
            role: 'Software Developer',
            period: '2016 — 2018',
            description: [
              'Aplicaciones web con Vanilla JavaScript en el frontend y Node.js en el backend, integradas con servicios REST.',
            ],
            tags: ['JavaScript', 'Node.js', 'REST'],
          },
          {
            role: 'Analista Estadístico',
            period: '2014 — 2016',
            description: [
              'Automatización del envío de reportes con C# y SQL Server.',
              'Generación de reportes con macros de Excel (VBScript).',
              'Manipulación de datos en SQL Server 2008R2.',
              'Análisis de indicadores de producción y calidad para Telefónica del Perú.',
              'Dashboards y KPIs corporativos en Power BI.',
            ],
            tags: ['C#', 'SQL Server', 'Power BI', 'VBA'],
          },
        ],
      },
    ],
    featuredProjects: [
      {
        id: '01',
        title: 'Portfolio v1',
        description: 'Portfolio personal v1 construido con React, TailwindCSS, NodeJS y TypeScript.',
        tags: ['React', 'Tailwind', 'Node.js', 'TypeScript'],
        year: '2024',
        client: 'Personal',
        link: 'https://v1.ismaelhv.com/',
        github: 'https://github.com/IsmaellHV/portfolio-frontend-v1',
        image: '/src/assets/projects/portfolio-v1.png',
      },
      {
        id: '02',
        title: 'FastLink',
        description:
          'Acortador de URLs gratis, rápido y privado. Protección anti-bots con Cloudflare Turnstile y soporte multi-idioma.',
        tags: ['Astro', 'React', 'TailwindCSS', 'TypeScript'],
        year: '2025',
        client: 'Personal',
        link: 'https://ismaelhv.com/fastlink/',
        github: 'https://github.com/IsmaellHV/fastlink',
        image: '/src/assets/projects/fastlink.png',
      },
      {
        id: '03',
        title: 'DevTools',
        description:
          'Set de utilidades para desarrolladores en el navegador: Base64, QR, JSON, AES, JWT y más. Todo se ejecuta localmente, sin uploads.',
        tags: ['Astro', 'React', 'TailwindCSS', 'TypeScript'],
        year: '2025',
        client: 'Personal',
        link: 'https://ismaelhv.com/tools/',
        github: 'https://github.com/IsmaellHV/tools',
        image: '/src/assets/projects/tools.png',
      },
    ],
  },
  en: {
    profile: {
      name: 'Ismael Hurtado Vargas',
      role: 'Full-Stack & Mobile · AI',
      status: 'Lima, PE',
      tagline:
        'I build web and mobile products that pair performance with thoughtful design and AI-powered automation.',
      summary: 'Building web and mobile products focused on performance, UX, and AI automation.',
      socials: [
        { platform: 'GitHub', url: 'https://github.com/ismaellhv' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ihurtadov' },
      ],
    },
    sections: {
      about: 'About me',
      aboutHeadline: 'Full-stack engineer focused on product, performance, and craft.',
      experience: 'Experience',
      experienceHeadline: "Where I've built real things.",
      projects: 'Selected work',
      projectsHeadline: 'Selected work.',
    },
    about: {
      paragraphs: [
        "I'm a passionate full-stack developer with an eye for design and a drive for performance. I've been in tech since 2014 and shipping professionally since 2016, refining both frontend and backend craft.",
        "I sit at the intersection of complex backend systems and intuitive interfaces. Right now I'm exploring AI in software development — automating workflows and building smarter apps.",
      ],
      meta: [
        ['Location', 'Lima, Peru'],
        ['Languages', 'Spanish · English'],
        ['Focus', 'Web · Mobile · AI'],
      ],
    },
    stats: [
      { num: '10+', label: 'Years in tech' },
      { num: '20+', label: 'Shipped systems' },
      { num: '5+', label: 'Companies / clients' },
    ],
    experiences: [
      {
        company: 'Dae Hipotecaria',
        period: 'May 2025 — 2026',
        duration: '1 yr',
        location: 'Lima, Peru',
        roles: [
          {
            role: 'Full-Stack Developer',
            period: 'May 2025 — 2026',
            description: [
              'Disbursement system managing staged payouts of mortgage loans.',
              'Approval workflow with automated notifications to appraisers, legal and treasury teams.',
              'Python services for document validation and credit-bureau integrations.',
              'Containerized deployment and reproducible environments with Docker.',
            ],
            tags: ['React', 'NestJS', 'Node.js', 'Prisma', 'Python', 'Docker'],
          },
        ],
      },
      {
        company: 'Exandal Holding Group',
        period: '2025 — 2026',
        duration: '1 yr',
        location: 'Lima, Peru',
        roles: [
          {
            role: 'Full-Stack Developer',
            period: '2025 — 2026',
            description: [
              'Quality management and analysis system for agroindustrial products: tara, quinoa, tara flour and tara gum.',
              'Sample logging, lab assays (moisture, tannins, granulometry) and lot traceability.',
              'SAP integration to sync lots, production orders and inventory.',
            ],
            tags: ['JavaScript', 'Node.js', 'MongoDB', 'SAP'],
          },
        ],
      },
      {
        company: 'Lima Metropolitan Municipality',
        period: '2023 — 2026',
        duration: '3 yrs',
        location: 'Lima, Peru',
        roles: [
          {
            role: 'Senior Software Developer',
            period: '2023 — 2026',
            description: [
              'Implementation of the Integrated Municipal Administration System (SIAM).',
              'Backend services for the Lima Segura and Voluntarios por Lima apps.',
              'RAG-powered ChatBot for automated handling of TUPA and non-TUPA queries.',
              'AI-powered ChatBot for automated ticket generation.',
            ],
            tags: ['React', 'NestJS', 'Node.js', 'Prisma', 'Docker'],
          },
        ],
      },
      {
        company: 'Urban Transport Authority (ATU)',
        period: '2020 — 2023',
        duration: '2 yrs',
        location: 'Lima, Peru',
        roles: [
          {
            role: 'Software Developer',
            period: '2020 — 2023',
            description: [
              'Ticket module in the Activity Registration System (SRA).',
              'TUPA module in the Payment Gateway System.',
              'Access control in the Symptomatology Record System.',
              'Payments and debt inquiry in SISATU.',
              'Warehouse and work-order modules in the Operational Management System.',
            ],
            tags: ['Angular', 'Node.js', 'SQL Server', 'REST'],
          },
        ],
      },
      {
        company: 'Cobra Perú',
        period: '2014 — 2021',
        duration: '6 yrs',
        location: 'Lima, Peru',
        roles: [
          {
            role: 'Software Developer',
            period: '2018 — 2021',
            description: [
              'Web applications with Vanilla JavaScript on the frontend and Node.js on the backend, integrated with REST services.',
            ],
            tags: ['JavaScript', 'Node.js', 'REST'],
          },
          {
            role: 'Software Developer',
            period: '2016 — 2018',
            description: [
              'Web applications with Vanilla JavaScript on the frontend and Node.js on the backend, integrated with REST services.',
            ],
            tags: ['JavaScript', 'Node.js', 'REST'],
          },
          {
            role: 'Statistical Analyst',
            period: '2014 — 2016',
            description: [
              'Report-sending automation built with C# and SQL Server.',
              'Report generation via Excel Macros (VBScript).',
              'Data manipulation across SQL Server 2008R2.',
              'Production and quality KPI analysis for Telefónica del Perú.',
              'Corporate dashboards and KPIs in Power BI.',
            ],
            tags: ['C#', 'SQL Server', 'Power BI', 'VBA'],
          },
        ],
      },
    ],
    featuredProjects: [
      {
        id: '01',
        title: 'Portfolio v1',
        description: 'Personal portfolio v1 built with React, TailwindCSS, NodeJS and TypeScript.',
        tags: ['React', 'Tailwind', 'Node.js', 'TypeScript'],
        year: '2024',
        client: 'Personal',
        link: 'https://v1.ismaelhv.com/',
        github: 'https://github.com/IsmaellHV/portfolio-frontend-v1',
        image: '/src/assets/projects/portfolio-v1.png',
      },
      {
        id: '02',
        title: 'FastLink',
        description:
          'Free, fast and privacy-friendly URL shortener. Cloudflare Turnstile protection and multi-language support.',
        tags: ['Astro', 'React', 'TailwindCSS', 'TypeScript'],
        year: '2025',
        client: 'Personal',
        link: 'https://ismaelhv.com/fastlink/',
        github: 'https://github.com/IsmaellHV/fastlink',
        image: '/src/assets/projects/fastlink.png',
      },
      {
        id: '03',
        title: 'DevTools',
        description:
          'Set of in-browser developer utilities: Base64, QR, JSON, AES, JWT and more. Everything runs locally — no uploads.',
        tags: ['Astro', 'React', 'TailwindCSS', 'TypeScript'],
        year: '2025',
        client: 'Personal',
        link: 'https://ismaelhv.com/tools/',
        github: 'https://github.com/IsmaellHV/tools',
        image: '/src/assets/projects/tools.png',
      },
    ],
  },
};

export const MESSAGES_BY_LOCALE: Record<Locale, LocaleMessages> = {
  es: {
    nav: {
      about: 'Acerca',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    actions: {
      viewAllProjects: 'Ver todos los proyectos',
      viewFullExperience: 'Ver experiencia completa',
      backHome: 'Volver al inicio',
      visitProject: 'Visitar proyecto',
      workTogether: 'Trabajemos juntos',
      seeProjects: 'Ver proyectos',
      theme: 'Tema',
    },
    pages: {
      projectsTitle: 'Proyectos',
      experienceTitle: 'Experiencia',
    },
    contact: {
      kicker: 'Contacto',
      headline: 'Conversemos sobre tu próximo proyecto.',
      description: 'Escríbeme y te responderé en menos de 24 horas.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo',
      emailPlaceholder: 'tu@correo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: '¿En qué puedo ayudarte?',
      submit: 'Enviar mensaje',
      submitting: 'Enviando...',
      success: 'Mensaje enviado. Te responderé pronto.',
      errorGeneric: 'No se pudo enviar el mensaje. Intenta nuevamente.',
      errorCaptcha: 'Verifica el captcha antes de enviar.',
      errorRequiredName: 'Ingresa tu nombre.',
      errorRequiredEmail: 'Ingresa tu correo.',
      errorInvalidEmail: 'Correo no válido.',
      errorRequiredMessage: 'Ingresa un mensaje.',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    actions: {
      viewAllProjects: 'View all projects',
      viewFullExperience: 'View full experience',
      backHome: 'Back to home',
      visitProject: 'Visit project',
      workTogether: "Let's work together",
      seeProjects: 'See projects',
      theme: 'Theme',
    },
    pages: {
      projectsTitle: 'Projects',
      experienceTitle: 'Experience',
    },
    contact: {
      kicker: 'Contact',
      headline: "Let's talk about your next project.",
      description: 'Drop me a message and I will reply within 24 hours.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'How can I help?',
      submit: 'Send message',
      submitting: 'Sending...',
      success: 'Message sent. I will reply soon.',
      errorGeneric: 'Could not send the message. Please try again.',
      errorCaptcha: 'Complete the captcha before submitting.',
      errorRequiredName: 'Enter your name.',
      errorRequiredEmail: 'Enter your email.',
      errorInvalidEmail: 'Invalid email.',
      errorRequiredMessage: 'Enter a message.',
    },
  },
};

export const getPortfolioData = (locale: Locale): PortfolioData => {
  return PORTFOLIO_BY_LOCALE[locale];
};
