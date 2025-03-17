import React, { createContext, useContext, useState, useEffect } from 'react'
import type { UserSubscription } from '@/types'

interface SubscriptionContextType {
  subscription: UserSubscription | null
  loading: boolean
  error: string | null
  checkSubscription: () => Promise<void>
  upgradeSubscription: () => Promise<void>
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [subscription, setSubscription] = useState<UserSubscription | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const checkSubscription = async () => {
    setLoading(true)
    setError(null)

    try {
      // TODO: Implement actual API call to check subscription
      // For now, we'll simulate a free tier subscription
      const mockSubscription: UserSubscription = {
        tier: 'free',
        searchesRemaining: 3,
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      }
      setSubscription(mockSubscription)
    } catch (err) {
      setError('Failed to check subscription status')
    } finally {
      setLoading(false)
    }
  }

  const upgradeSubscription = async () => {
    setLoading(true)
    setError(null)

    try {
      // TODO: Implement actual payment flow
      // For now, we'll simulate upgrading to pro
      const mockProSubscription: UserSubscription = {
        tier: 'pro',
        searchesRemaining: Infinity,
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      }
      setSubscription(mockProSubscription)
    } catch (err) {
      setError('Failed to upgrade subscription')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkSubscription()
  }, [])

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        loading,
        error,
        checkSubscription,
        upgradeSubscription,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider')
  }
  return context
} 