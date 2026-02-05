import type { Repository } from '../Domain/Repository';
import type { ILanguage } from '../Domain/Entities';
import { AdapterLanguage } from '../../../shared/Infrastructure/AdapterLanguage';

export class RepositoryImpl implements Repository {
  async getPortfolioData(lang: 'es' | 'en' = 'es'): Promise<ILanguage> {
    return AdapterLanguage[lang];
  }
}
