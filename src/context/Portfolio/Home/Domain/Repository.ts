import type { PortfolioData } from './Entities';

export interface Repository {
  getPortfolioData(lang?: 'es' | 'en'): Promise<PortfolioData>;
}
