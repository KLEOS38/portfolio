export type InvestorCategory =
  | 'Angel Investor'
  | 'Venture Capital'
  | 'Private Equity'
  | 'Property Investor'
  | 'Crowdfunding Platform'
  | 'Corporate Investor'
  | 'Syndicate'

export type InvestmentStage =
  | 'Pre-seed'
  | 'Seed'
  | 'Series A'
  | 'Series B'
  | 'Series C'
  | 'Growth'
  | 'Late Stage'

export type Sector =
  | 'Fintech'
  | 'Proptech'
  | 'Healthtech'
  | 'E-commerce'
  | 'SaaS'
  | 'AI/ML'
  | 'Blockchain'
  | 'Cleantech'
  | 'Other'

export interface TicketSize {
  min: number
  max: number | null
}

export interface Investor {
  id: string
  name: string
  category: InvestorCategory
  description: string
  focusAreas: Sector[]
  investmentStages: InvestmentStage[]
  ticketSize: TicketSize
  location: string
  contactEmail: string
  website: string
  isVerified: boolean
  portfolioHighlights: string[]
  linkedinUrl?: string
  twitterUrl?: string
  createdAt: Date
  updatedAt: Date
}

export interface UserSubscription {
  tier: 'free' | 'pro'
  searchesRemaining: number
  validUntil: Date
}

export interface SearchFilters {
  category?: InvestorCategory
  sectors?: Sector[]
  stages?: InvestmentStage[]
  ticketSize?: {
    min?: number
    max?: number
  }
  location?: string
  verified?: boolean
} 