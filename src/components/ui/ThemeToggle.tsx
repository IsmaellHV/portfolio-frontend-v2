import { AnimatedThemeToggler } from './animated-theme-toggler';

export function ThemeToggle() {
  return (
    <AnimatedThemeToggler 
      duration={400}
      className="rounded-full w-9 h-9 flex items-center justify-center border-none hover:bg-transparent text-foreground hover:text-foreground/80 transition-colors [&>svg]:h-[1.2rem] [&>svg]:w-[1.2rem]" 
      aria-label="Toggle Theme"
    />
  );
}
