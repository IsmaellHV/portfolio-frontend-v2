import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/context/shared/Infrastructure/StoreLanguage';
import { useEffect, useState } from 'react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  if (!mounted) return <div className="w-8 h-9" />;

  return (
    <Button variant="ghost" size="sm" onClick={toggleLang} className="font-mono text-xs h-9 px-2 rounded-none hover:bg-transparent text-foreground hover:text-foreground/80 transition-colors">
      {language.toUpperCase()}
    </Button>
  );
}
