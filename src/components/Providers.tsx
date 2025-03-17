import { SearchProvider } from './search/SearchContext'
import { SubscriptionProvider } from './subscription/SubscriptionContext'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SubscriptionProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </SubscriptionProvider>
  )
} 