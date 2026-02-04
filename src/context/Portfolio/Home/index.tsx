import { useEffect } from 'react';
import { Controller } from './Infrastructure/Controller';
import { View } from './UI/View';
import type { PortfolioData } from './Domain/Entities';

export const ManagerEntity = ({ initialData }: { initialData?: PortfolioData }) => {
  const controller = Controller(initialData);

  useEffect(() => {
    if (!initialData) {
      controller.init();
    }
  }, []);

  return <View {...controller} />;
};
