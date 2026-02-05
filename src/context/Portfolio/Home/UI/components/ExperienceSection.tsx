import type { Experience } from '../../Domain/Entities';

export const ExperienceSection = ({ experiences, title }: { experiences: Experience[]; title: string }) => {
  return (
    <section id="experience" className="space-y-4 sm:space-y-6 lg:space-y-8 scroll">
      <h2 className="text-xs sm:text-sm font-medium tracking-wider uppercase text-foreground/50">{title}</h2>
      <div className="space-y-6 sm:space-y-8 lg:space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group space-y-2 sm:space-y-3">
            <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto] gap-1 sm:gap-4 items-start sm:items-baseline">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.role} · {exp.company}
                </h3>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground font-mono">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <span className="text-foreground/30 select-none mt-0.5">→</span>
                  <span className="flex-1">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
