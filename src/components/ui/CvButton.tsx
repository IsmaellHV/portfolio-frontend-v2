import { useLanguageStore } from '@/context/shared/Infrastructure/StoreLanguage';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export const CvButton = () => {
  const { language } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cvUrl = language === 'en' ? '/cv/english.pdf' : '/cv/spanish.pdf';

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <Button variant="ghost" size="sm" asChild className="gap-2 font-medium text-muted-foreground hover:text-foreground transition-colors">
      <a href={cvUrl} download target="_blank" rel="noopener noreferrer">
        <span className="hidden md:inline">CV</span>
        <Download className="w-4 h-4" />
      </a>
    </Button>
  );
};
