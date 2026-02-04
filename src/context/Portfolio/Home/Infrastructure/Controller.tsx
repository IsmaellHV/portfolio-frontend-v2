import { useState, useEffect } from 'react';
import type { PropsView } from '../Domain/PropsView';
import type { PortfolioData } from '../Domain/Entities';
import { RepositoryImpl } from './RepositoryImpl';
import { useLanguageStore } from '@/context/shared/Infrastructure/StoreLanguage';

export const Controller = (initialData?: PortfolioData | null): PropsView => {
  const [value, setValue] = useState<PortfolioData | null>(initialData || null);
  const [loading, setLoading] = useState<boolean>(!initialData);
  const [error, setError] = useState<string | null>(null);

  const { language } = useLanguageStore();

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const repository = new RepositoryImpl();
      const data = await repository.getPortfolioData(language);
      setValue(data);
    } catch (e) {
      console.error(e);
      setError('Failed to load portfolio data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Si cambia el idioma, y YA teníamos datos (es decir, no es el primer render con initialData correcto), recargamos.
    // Ojo: initialData viene en el idioma por defecto del servidor (probablemente ES).
    // Si el store dice EN, debemos recargar.
    fetchData();
  }, [language]);

  const init = async () => {
    if (!value) await fetchData();
  };

  return {
    loading,
    value,
    error,
    init,
  };
};
