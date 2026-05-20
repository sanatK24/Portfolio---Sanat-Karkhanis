import { useState, useEffect } from 'react'
import { Portfolio } from '../types/portfolio'

export const usePortfolio = () => {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const response = await fetch('/src/data/portfolio.json')
        if (!response.ok) throw new Error('Failed to load portfolio')
        const data = await response.json() as Portfolio
        setPortfolio(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setLoading(false)
      }
    }

    loadPortfolio()
  }, [])

  return { portfolio, loading, error }
}
