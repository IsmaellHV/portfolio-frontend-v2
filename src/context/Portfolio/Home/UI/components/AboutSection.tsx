import type { About } from '../../Domain/Entities';

export const AboutSection = ({ about, title }: { about: About; title: string }) => {
  return (
    <section id="about" className="space-y-8 scroll">
      <h2 className="text-sm font-medium tracking-wider uppercase text-foreground/50">{title}</h2>
      <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};
