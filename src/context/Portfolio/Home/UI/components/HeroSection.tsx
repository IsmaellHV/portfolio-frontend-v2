import type { Profile } from '../../Domain/Entities';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const HeroSection = ({ profile }: { profile: Profile }) => {
  return (
    <section id="hero" className="space-y-6 sm:space-y-8 lg:space-y-12 animate-in fade-in slide-in-from-left-4 duration-1000">
      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          {profile.name.split(' ')[0]}<br/>
          <span className="text-foreground/50">{profile.name.split(' ')[1]}</span>
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg text-foreground/70 font-medium max-w-sm">
          {profile.role}
        </h2>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
        {profile.summary}
      </p>

      <div className="flex gap-4 pt-1 sm:pt-2 lg:pt-4">
        {profile.socials.map((social) => (
          <a 
            key={social.platform}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={social.platform}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {social.icon === 'github' && <Github className="h-5 w-5 sm:h-6 sm:w-6" />}
            {social.icon === 'linkedin' && <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />}
            {social.icon === 'twitter' && <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />}
          </a>
        ))}
      </div>
    </section>
  );
};
