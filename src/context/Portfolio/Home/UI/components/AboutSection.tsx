export const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <h2 className="text-3xl font-bold tracking-tight sticky top-24">About Me</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>I'm a passionate Full-Stack Developer with a keen eye for design and a drive for performance. My journey started in 2020, and since then, I've had the privilege of working with various clients and companies, refining my skills in both frontend and backend technologies.</p>
          <p>I specialize in the interaction between complex backend systems and intuitive user interfaces. Currently, I'm exploring the potentials of AI in software development, looking for ways to automate workflows and create smarter applications.</p>
          <p>When I'm not coding, you can find me exploring new tech trends, contributing to open source, or optimizing my own digital garden.</p>
        </div>
      </div>
    </section>
  );
};
