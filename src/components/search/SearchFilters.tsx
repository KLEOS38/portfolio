import { useState } from 'react'
import { useSearch } from './SearchContext'
import type { InvestorCategory, InvestmentStage, Sector } from '@/types'

const categories: InvestorCategory[] = [
  'Angel Investor',
  'Venture Capital',
  'Private Equity',
  'Property Investor',
  'Crowdfunding Platform',
  'Corporate Investor',
  'Syndicate',
]

const stages: InvestmentStage[] = [
  'Pre-seed',
  'Seed',
  'Series A',
  'Series B',
  'Series C',
  'Growth',
  'Late Stage',
]

const sectors: Sector[] = [
  'Fintech',
  'Proptech',
  'Healthtech',
  'E-commerce',
  'SaaS',
  'AI/ML',
  'Blockchain',
  'Cleantech',
  'Other',
]

interface SearchFiltersProps {
  vertical?: boolean
}

export default function SearchFilters({ vertical = false }: SearchFiltersProps) {
  const { filters, setFilters, searchInvestors, loading } = useSearch()
  const [localFilters, setLocalFilters] = useState(filters)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFilters(localFilters)
    searchInvestors()
  }

  const handleChange = (field: keyof typeof localFilters, value: any) => {
    setLocalFilters(prev => ({ ...prev, [field]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${vertical ? '' : 'md:grid md:grid-cols-4 md:gap-4 md:space-y-0'}`}>
      {/* Categories */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Investor Type
        </label>
        <select
          aria-label="Select investor type"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={localFilters.category || ''}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="">All Types</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Sectors */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sector
        </label>
        <select
          aria-label="Select sector"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={localFilters.sectors?.[0] || ''}
          onChange={(e) => handleChange('sectors', e.target.value ? [e.target.value] : [])}
        >
          <option value="">All Sectors</option>
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </div>

      {/* Investment Stage */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Stage
        </label>
        <select
          aria-label="Select investment stage"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={localFilters.stages?.[0] || ''}
          onChange={(e) => handleChange('stages', e.target.value ? [e.target.value] : [])}
        >
          <option value="">All Stages</option>
          {stages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex items-end">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search Investors'}
        </button>
      </div>
    </form>
  )
} 