import type { PortfolioData } from '../../Domain/Entities';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';

export const HomeView = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-24 pb-24">
      <HeroSection profile={data.profile} />
      <AboutSection />
      <ExperienceSection experiences={data.experiences} />
      <ProjectsSection projects={data.featuredProjects} />
    </div>
  );
};
