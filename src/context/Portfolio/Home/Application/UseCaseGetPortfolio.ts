import type { PortfolioRepository } from '../Domain/PortfolioRepository';
import type { PortfolioData } from '../Domain/Entities';

export class UseCaseGetPortfolio {
  constructor(private readonly repository: PortfolioRepository) {}

  async execute(): Promise<PortfolioData> {
    return this.repository.getPortfolioData();
  }
}
