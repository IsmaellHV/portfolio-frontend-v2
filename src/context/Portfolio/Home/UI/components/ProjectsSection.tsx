import type { Project } from '../../Domain/Entities';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="space-y-8 scroll">
      <h2 className="text-sm font-medium tracking-wider uppercase text-foreground/50">Featured Projects</h2>
      <div className="space-y-10">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group block space-y-3 cursor-pointer"
          >
            <div className="flex items-baseline gap-2">
              <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-foreground/50 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <div className="pt-4">
        <a 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors group"
        >
          View All Projects
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
