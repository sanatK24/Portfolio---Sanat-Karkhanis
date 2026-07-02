import { Portfolio } from '../types/portfolio'
import portfolioData from '../data/portfolio.json'

export const usePortfolio = () => {
  return {
    portfolio: portfolioData as unknown as Portfolio,
    loading: false,
    error: null,
  }
}
