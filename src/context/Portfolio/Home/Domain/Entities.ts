export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  role: string;
  summary: string;
  socials: SocialLink[];
  avatarUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface About {
  paragraphs: string[];
}

export interface Sections {
  about: string;
  experience: string;
  projects: string;
}

export interface ILanguage {
  profile: Profile;
  sections: Sections;
  about: About;
  experiences: Experience[];
  featuredProjects: Project[];
}

export type PortfolioData = ILanguage;
