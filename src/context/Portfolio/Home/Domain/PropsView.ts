import type { PortfolioData } from './Entities';

export interface PropsView {
  loading: boolean;
  value: PortfolioData | null;
  error: string | null;
  init: () => Promise<void>;
}
