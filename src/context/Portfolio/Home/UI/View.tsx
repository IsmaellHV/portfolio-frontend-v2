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

  const { profile, about, sections, experiences, featuredProjects } = props.value;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-24 min-h-screen">
          {/* Left Column - Sticky Intro */}
          <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-8 sm:py-16 lg:py-24">
            <HeroSection profile={profile} />
          </div>
          
          {/* Right Column - Scrollable Content */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16 lg:py-24" id="content">
            <AboutSection about={about} title={sections.about} />
            <ExperienceSection experiences={experiences} title={sections.experience} />
            <ProjectsSection projects={featuredProjects} title={sections.projects} />
          </div>
        </div>
      </div>
    </div>
  );
};
