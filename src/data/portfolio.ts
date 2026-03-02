export type Locale = 'es' | 'en';

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  summary: string;
  socials: SocialLink[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  github?: string;
}

export interface About {
  paragraphs: string[];
}

export interface SectionTitles {
  about: string;
  experience: string;
  projects: string;
}

export interface PortfolioData {
  profile: Profile;
  sections: SectionTitles;
  about: About;
  experiences: Experience[];
  featuredProjects: Project[];
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
    backHome: string;
    visitProject: string;
    theme: string;
  };
  pages: {
    projectsTitle: string;
  };
}

export const PORTFOLIO_BY_LOCALE: Record<Locale, PortfolioData> = {
  es: {
    profile: {
      name: 'Ismael Hurtado Vargas',
      role: 'Full-Stack Web & Mobile Developer / IA',
      summary: 'Construyo productos web y moviles con enfoque en rendimiento, UX y automatizacion con IA.',
      socials: [
        { platform: 'GitHub', url: 'https://github.com/ismaellhv' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ihurtadov' },
      ],
    },
    sections: {
      about: 'ACERCA DE MI',
      experience: 'EXPERIENCIA',
      projects: 'PROYECTOS DESTACADOS',
    },
    about: {
      paragraphs: [
        'Soy un desarrollador Full-Stack apasionado con un buen ojo para el diseno y una motivacion por el rendimiento. Mi trayectoria comenzo en 2020, y desde entonces, he tenido el privilegio de trabajar con diversos clientes y empresas, perfeccionando mis habilidades tanto en tecnologias frontend como backend.',
        'Me especializo en la interaccion entre sistemas backend complejos e interfaces de usuario intuitivas. Actualmente, estoy explorando las potencialidades de la IA en el desarrollo de software, buscando formas de automatizar flujos de trabajo y crear aplicaciones mas inteligentes.',
      ],
    },
    experiences: [
      {
        company: 'Municipalidad Metropolitana de Lima',
        role: 'Analista Programador Senior',
        period: '2023-Presente',
        description: [
          'Desarrollo de APIs robustas y escalables.',
          'Creación de dashboards interactivos para analisis de datos.',
          'Integraciones con servicios de terceros y optimizacion de performance.',
        ],
      },
      {
        company: 'Dae Hipoteraria',
        role: 'Full-Stack Developer',
        period: '2025-Presente',
        description: [
          'Desarrollo de APIs robustas y escalables.',
          'Creación de dashboards interactivos para analisis de datos.',
          'Integraciones con servicios de terceros y optimizacion de performance.',
        ],
      },
    ],
    featuredProjects: [
      {
        id: '1',
        title: 'Portfolio v1',
        description: 'Portfolio personal v1 construido con React, TailwindCSS, NodeJS y TypeScript.',
        tags: ['React', 'Tailwind', 'NodeJS', 'TypeScript'],
        link: 'https://v1.ismaelhv.com/',
        github: 'https://github.com/IsmaellHV/portfolio-frontend-v1',
        image: '/src/assets/projects/portfolio-v1.png',
      },
    ],
  },
  en: {
    profile: {
      name: 'Ismael Hurtado Vargas',
      role: 'Full-Stack Web & Mobile Developer / AI',
      summary: 'Building web and mobile products focusing on performance, UX, and AI automation.',
      socials: [
        { platform: 'GitHub', url: 'https://github.com/ismaellhv' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ihurtadov' },
      ],
    },
    sections: {
      about: 'ABOUT',
      experience: 'EXPERIENCE',
      projects: 'FEATURED PROJECTS',
    },
    about: {
      paragraphs: [
        "I'm a passionate Full-Stack Developer with a keen eye for design and a drive for performance. My journey started in 2020, and since then, I've had the privilege of working with various clients and companies, refining my skills in both frontend and backend technologies.",
        "I specialize in the interaction between complex backend systems and intuitive user interfaces. Currently, I'm exploring the potentials of AI in software development, looking for ways to automate workflows and create smarter applications.",
      ],
    },
    experiences: [
      {
        company: 'Municipalidad Metropolitana de Lima',
        role: 'Senior Programmer Analyst',
        period: '2023-Present',
        description: [
          'Development of robust and scalable APIs.',
          'Creation of interactive dashboards for data analysis.',
          'Integrations with third-party services and performance optimization.',
        ],
      },
      {
        company: 'Dae Hipoteraria',
        role: 'Full-Stack Developer',
        period: '2025-Present',
        description: [
          'Development of robust and scalable APIs.',
          'Creation of interactive dashboards for data analysis.',
          'Integrations with third-party services and performance optimization.',
        ],
      },
    ],
    featuredProjects: [
      {
        id: '1',
        title: 'Portfolio v1',
        description: 'Personal portfolio v1 built with React, TailwindCSS, NodeJS and TypeScript.',
        tags: ['React', 'Tailwind', 'NodeJS', 'TypeScript'],
        link: 'https://v1.ismaelhv.com/',
        github: 'https://github.com/IsmaellHV/portfolio-frontend-v1',
        image: '/src/assets/projects/portfolio-v1.png',
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
      backHome: 'Volver al inicio',
      visitProject: 'Visitar proyecto',
      theme: 'Tema',
    },
    pages: {
      projectsTitle: 'Proyectos',
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
      backHome: 'Back to home',
      visitProject: 'Visit project',
      theme: 'Theme',
    },
    pages: {
      projectsTitle: 'Projects',
    },
  },
};

export const getPortfolioData = (locale: Locale): PortfolioData => {
  return PORTFOLIO_BY_LOCALE[locale];
};
