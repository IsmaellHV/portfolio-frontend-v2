import type { Project } from '../../Domain/Entities';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const ProjectsSection = ({ projects, title }: { projects: Project[]; title: string }) => {
  return (
    <section id="projects" className="space-y-8 scroll">
      <h2 className="text-sm font-medium tracking-wider uppercase text-foreground/50">{title}</h2>
      <div className="space-y-1">
        {projects.map((project, index) => (
          <a key={project.id} href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="group block py-6 -mx-4 px-4 rounded-md hover:bg-muted/30 transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="relative text-xs px-2.5 py-1 rounded-full bg-secondary/50 text-foreground/70 font-mono border border-border/40 group-hover:border-border/60 transition-colors overflow-hidden">
                        {tag}
                        {/* <BorderBeam duration={8} size={60} className="from-transparent via-white to-transparent" />
                        <BorderBeam duration={8} size={300} className="from-transparent via-gray-500 to-transparent" /> */}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {index < projects.length - 1 && <div className="mt-6 border-b border-border/30 group-hover:border-border/50 transition-colors" />}
          </a>
        ))}
      </div>
      <div className="pt-6">
        <a href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group">
          View All Projects
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
