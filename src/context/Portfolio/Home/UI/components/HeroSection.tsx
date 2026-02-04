import type { Profile } from '../../Domain/Entities';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { AppRoutes } from '@/context/shared/Domain/Routes';

export const HeroSection = ({ profile }: { profile: Profile }) => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-start space-y-10 py-20 animate-in fade-in zoom-in-95 duration-1000">
      <div className="space-y-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-tight">
          {profile.name.split(' ')[0]} <span className="text-foreground/60">{profile.name.split(' ')[1]}</span>
        </h1>
        <h2 className="text-lg md:text-xl text-foreground/80 font-mono tracking-wide pl-4 border-l border-primary/50">{profile.role}</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed font-sans font-light">{profile.summary}</p>
      </div>

      <div className="flex flex-wrap gap-6 pt-8">
        <Button size="lg" asChild className="text-base rounded-none h-12 px-8 bg-foreground text-background hover:bg-foreground/90 transition-all font-mono">
          <a href={AppRoutes.home.projects}>
            Selected Work <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <div className="flex gap-4">
          {profile.socials.map((social) => (
            <Button key={social.platform} variant="outline" size="icon" asChild className="rounded-none border-foreground/20 hover:border-foreground hover:bg-transparent h-12 w-12 transition-all">
              <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.platform}>
                {social.icon === 'github' && <Github className="h-5 w-5" />}
                {social.icon === 'linkedin' && <Linkedin className="h-5 w-5" />}
                {social.icon === 'twitter' && <Twitter className="h-5 w-5" />}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
