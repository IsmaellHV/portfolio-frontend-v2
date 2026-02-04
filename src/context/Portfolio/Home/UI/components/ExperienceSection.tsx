import type { Experience } from '../../Domain/Entities';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <section id="experience" className="py-20 space-y-10">
      <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 border-l border-border/50 hover:border-primary transition-colors duration-500">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
                <span className="text-sm font-mono text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full w-fit">{exp.period}</span>
              </div>
              <p className="text-lg text-primary font-medium">{exp.role}</p>
              <ul className="space-y-2 text-muted-foreground pt-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-muted-foreground/50" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
