import React, { createContext, useContext, useState, useCallback } from 'react'
import type { SearchFilters, Investor } from '@/types'

interface SearchContextType {
  filters: SearchFilters
  setFilters: (filters: SearchFilters) => void
  results: Investor[]
  loading: boolean
  error: string | null
  searchInvestors: () => Promise<void>
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>({})
  const [results, setResults] = useState<Investor[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchInvestors = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      // TODO: Implement actual API call to search investors
      // For now, we'll simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock results
      setResults([])
    } catch (err) {
      setError('Failed to search investors. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [filters])

  return (
    <SearchContext.Provider
      value={{
        filters,
        setFilters,
        results,
        loading,
        error,
        searchInvestors,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
} 