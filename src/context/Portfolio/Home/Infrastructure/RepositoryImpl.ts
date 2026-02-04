import type { Repository } from '../Domain/Repository';
import type { PortfolioData } from '../Domain/Entities';

export class RepositoryImpl implements Repository {
  async getPortfolioData(lang: 'es' | 'en' = 'es'): Promise<PortfolioData> {
    const isEn = lang === 'en';

    return {
      profile: {
        name: 'Ismael Hurtado Vargas',
        role: isEn ? 'Full-Stack Web & Mobile Developer / AI' : 'Full-Stack Web & Mobile Developer / IA',
        summary: isEn ? 'Building web and mobile products focusing on performance, UX, and AI automation.' : 'Construyo productos web y móviles con enfoque en rendimiento, UX y automatización con IA.',
        socials: [
          { platform: 'GitHub', url: 'https://github.com/ismaellhv', icon: 'github' },
          { platform: 'LinkedIn', url: 'https://linkedin.com/in/ihurtadov', icon: 'linkedin' },
        ],
      },
      experiences: [
        {
          company: 'Municipalidad Metropolitana de Lima',
          role: isEn ? 'Senior Programmer Analyst' : 'Analista Programador Senior',
          period: isEn ? '2023–Present' : '2023–Presente',
          description: isEn ? ['Development of robust and scalable APIs.', 'Creation of interactive dashboards for data analysis.', 'Integrations with third-party services and performance optimization.'] : ['Desarrollo de APIs robustas y escalables.', 'Creación de dashboards interactivos para análisis de datos.', 'Integraciones con servicios de terceros y optimización de performance.'],
        },
        {
          company: 'Dae Hipoteraria',
          role: 'Full-Stack Developer',
          period: isEn ? '2023–Present' : '2023–Presente',
          description: isEn ? ['Development of robust and scalable APIs.', 'Creation of interactive dashboards for data analysis.', 'Integrations with third-party services and performance optimization.'] : ['Desarrollo de APIs robustas y escalables.', 'Creación de dashboards interactivos para análisis de datos.', 'Integraciones con servicios de terceros y optimización de performance.'],
        },
      ],
      featuredProjects: [
        {
          id: '1',
          title: isEn ? 'Astro Portfolio' : 'Portafolio Astro',
          description: isEn ? 'Personal portfolio with hexagonal architecture and high performance.' : 'Portfolio personal con arquitectura hexagonal y alto rendimiento.',
          tags: ['Astro', 'Tailwind', 'TypeScript'],
          link: '#',
        },
        {
          id: '2',
          title: isEn ? 'Analytical Dashboard' : 'Dashboard Analítico',
          description: isEn ? 'Real-time data visualization platform.' : 'Plataforma de visualización de datos en tiempo real.',
          tags: ['React', 'Node', 'Postgres'],
          link: '#',
        },
        {
          id: '3',
          title: isEn ? 'Mobile App' : 'App Móvil',
          description: isEn ? 'Mobile application for task management.' : 'Aplicación móvil para gestión de tareas.',
          tags: ['React Native', 'Expo'],
          link: '#',
        },
        {
          id: '4',
          title: isEn ? 'AI Chatbot' : 'Chatbot IA',
          description: isEn ? 'Conversational virtual assistant powered by LLMs.' : 'Asistente virtual conversacional potenciado por LLMs.',
          tags: ['Node', 'LLM', 'Vector DB'],
          link: '#',
        },
      ],
    };
  }
}
