import type { ILanguage } from '../../Portfolio/Home/Domain/Entities';

export const AdapterLanguage: Record<'es' | 'en', ILanguage> = {
  es: {
    profile: {
      name: 'Ismael Hurtado Vargas',
      role: 'Full-Stack Web & Mobile Developer / IA',
      summary: 'Construyo productos web y móviles con enfoque en rendimiento, UX y automatización con IA.',
      socials: [
        { platform: 'GitHub', url: 'https://github.com/ismaellhv', icon: 'github' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ihurtadov', icon: 'linkedin' },
      ],
    },
    sections: {
      about: 'ACERCA DE MÍ',
      experience: 'EXPERIENCIA',
      projects: 'PROYECTOS DESTACADOS',
    },
    about: {
      paragraphs: [
        'Soy un desarrollador Full-Stack apasionado con un buen ojo para el diseño y una motivación por el rendimiento. Mi trayectoria comenzó en 2020, y desde entonces, he tenido el privilegio de trabajar con diversos clientes y empresas, perfeccionando mis habilidades tanto en tecnologías frontend como backend.',
        'Me especializo en la interacción entre sistemas backend complejos e interfaces de usuario intuitivas. Actualmente, estoy explorando las potencialidades de la IA en el desarrollo de software, buscando formas de automatizar flujos de trabajo y crear aplicaciones más inteligentes.',
      ],
    },
    experiences: [
      {
        company: 'Municipalidad Metropolitana de Lima',
        role: 'Analista Programador Senior',
        period: '2023–Presente',
        description: [
          'Desarrollo de APIs robustas y escalables.',
          'Creación de dashboards interactivos para análisis de datos.',
          'Integraciones con servicios de terceros y optimización de performance.',
        ],
      },
      {
        company: 'Dae Hipoteraria',
        role: 'Full-Stack Developer',
        period: '2023–Presente',
        description: [
          'Desarrollo de APIs robustas y escalables.',
          'Creación de dashboards interactivos para análisis de datos.',
          'Integraciones con servicios de terceros y optimización de performance.',
        ],
      },
    ],
    featuredProjects: [
      {
        id: '1',
        title: 'Portafolio Astro',
        description: 'Portfolio personal con arquitectura hexagonal y alto rendimiento.',
        tags: ['Astro', 'Tailwind', 'TypeScript'],
        link: '#',
      },
      {
        id: '2',
        title: 'Dashboard Analítico',
        description: 'Plataforma de visualización de datos en tiempo real.',
        tags: ['React', 'Node', 'Postgres'],
        link: '#',
      },
      {
        id: '3',
        title: 'App Móvil',
        description: 'Aplicación móvil para gestión de tareas.',
        tags: ['React Native', 'Expo'],
        link: '#',
      },
      {
        id: '4',
        title: 'Chatbot IA',
        description: 'Asistente virtual conversacional potenciado por LLMs.',
        tags: ['Node', 'LLM', 'Vector DB'],
        link: '#',
      },
    ],
  },
  en: {
    profile: {
      name: 'Ismael Hurtado Vargas',
      role: 'Full-Stack Web & Mobile Developer / AI',
      summary: 'Building web and mobile products focusing on performance, UX, and AI automation.',
      socials: [
        { platform: 'GitHub', url: 'https://github.com/ismaellhv', icon: 'github' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ihurtadov', icon: 'linkedin' },
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
        period: '2023–Present',
        description: [
          'Development of robust and scalable APIs.',
          'Creation of interactive dashboards for data analysis.',
          'Integrations with third-party services and performance optimization.',
        ],
      },
      {
        company: 'Dae Hipoteraria',
        role: 'Full-Stack Developer',
        period: '2023–Present',
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
        title: 'Astro Portfolio',
        description: 'Personal portfolio with hexagonal architecture and high performance.',
        tags: ['Astro', 'Tailwind', 'TypeScript'],
        link: '#',
      },
      {
        id: '2',
        title: 'Analytical Dashboard',
        description: 'Real-time data visualization platform.',
        tags: ['React', 'Node', 'Postgres'],
        link: '#',
      },
      {
        id: '3',
        title: 'Mobile App',
        description: 'Mobile application for task management.',
        tags: ['React Native', 'Expo'],
        link: '#',
      },
      {
        id: '4',
        title: 'AI Chatbot',
        description: 'Conversational virtual assistant powered by LLMs.',
        tags: ['Node', 'LLM', 'Vector DB'],
        link: '#',
      },
    ],
  },
};
