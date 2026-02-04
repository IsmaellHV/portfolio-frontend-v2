import type { PropsView } from '../Domain/PropsView';
import { HeroSection } from '../UI/components/HeroSection';
import { AboutSection } from '../UI/components/AboutSection';
import { ExperienceSection } from '../UI/components/ExperienceSection';
import { ProjectsSection } from '../UI/components/ProjectsSection';
import { Loader2 } from 'lucide-react';

export const View = (props: PropsView) => {
  if (props.loading && !props.value) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (props.error) {
    return <div className="text-destructive text-center py-20">Error: {props.error}</div>;
  }

  if (!props.value) {
    return null;
  }

  const { profile, experiences, featuredProjects } = props.value;

  return (
    <div className="container mx-auto px-6 md:px-12 max-w-5xl space-y-24 pb-24">
      <HeroSection profile={profile} />
      <AboutSection />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={featuredProjects} />
    </div>
  );
};
