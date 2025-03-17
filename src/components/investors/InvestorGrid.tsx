import { useSearch } from '@/components/search/SearchContext'
import Link from 'next/link'
import { BadgeCheckIcon } from '@heroicons/react/solid'

export default function InvestorGrid() {
  const { results, loading, error } = useSearch()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        {error}
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No investors found</h3>
        <p className="text-gray-500">
          Try adjusting your search filters to find more results.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {results.map((investor) => (
        <Link
          key={investor.id}
          href={`/investors/${investor.id}`}
          className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {investor.name}
                {investor.isVerified && (
                  <BadgeCheckIcon
                    className="inline-block w-5 h-5 ml-2 text-blue-500"
                    aria-label="Verified investor"
                  />
                )}
              </h3>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                {investor.category}
              </span>
            </div>

            <p className="text-gray-600 mb-4 line-clamp-2">{investor.description}</p>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium mr-2">Sectors:</span>
                <span>{investor.focusAreas.join(', ')}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium mr-2">Stages:</span>
                <span>{investor.investmentStages.join(', ')}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium mr-2">Ticket Size:</span>
                <span>
                  £{investor.ticketSize.min.toLocaleString()} - 
                  {investor.ticketSize.max
                    ? ` £${investor.ticketSize.max.toLocaleString()}`
                    : '+ '}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 