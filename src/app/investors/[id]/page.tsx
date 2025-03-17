import { notFound } from 'next/navigation'
import { BadgeCheckIcon, GlobeAltIcon, MailIcon } from '@heroicons/react/solid'
import { LinkedInIcon, TwitterIcon } from '@/components/icons/Social'
import AdBanner from '@/components/ads/AdBanner'
import type { Metadata } from 'next'

// This would be replaced with actual data fetching
async function getInvestor(id: string) {
  // TODO: Implement actual API call
  return null
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const investor = await getInvestor(params.id)
  
  if (!investor) {
    return {
      title: 'Investor Not Found | London Investors Directory',
    }
  }

  return {
    title: `${investor.name} | London Investors Directory`,
    description: investor.description,
  }
}

export default async function InvestorProfile({ params }: { params: { id: string } }) {
  const investor = await getInvestor(params.id)

  if (!investor) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <AdBanner className="h-[100px] w-full" size="1200x100" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                    {investor.name}
                    {investor.isVerified && (
                      <BadgeCheckIcon
                        className="w-8 h-8 ml-2 text-blue-500"
                        aria-label="Verified investor"
                      />
                    )}
                  </h1>
                  <p className="mt-2 text-lg text-gray-600">{investor.category}</p>
                </div>
                <div className="flex space-x-4">
                  {investor.linkedinUrl && (
                    <a
                      href={investor.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600"
                    >
                      <LinkedInIcon className="w-6 h-6" />
                    </a>
                  )}
                  {investor.twitterUrl && (
                    <a
                      href={investor.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400"
                    >
                      <TwitterIcon className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6 prose prose-blue max-w-none">
                <p>{investor.description}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Investment Focus</h2>
                  <dl className="mt-4 space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Sectors</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {investor.focusAreas.join(', ')}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Investment Stages</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {investor.investmentStages.join(', ')}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Ticket Size</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        £{investor.ticketSize.min.toLocaleString()} - 
                        {investor.ticketSize.max
                          ? ` £${investor.ticketSize.max.toLocaleString()}`
                          : '+ '}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
                  <dl className="mt-4 space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Location</dt>
                      <dd className="mt-1 text-sm text-gray-900">{investor.location}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Website</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        <a
                          href={investor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <GlobeAltIcon className="w-4 h-4 mr-1" />
                          Visit Website
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        <a
                          href={`mailto:${investor.contactEmail}`}
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <MailIcon className="w-4 h-4 mr-1" />
                          Contact
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Portfolio Highlights */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {investor.portfolioHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-100"
                  >
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* In-content Ad */}
            <div className="my-8">
              <AdBanner className="h-[90px] w-full" size="728x90" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-8">
              {/* Sidebar Ad */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <AdBanner className="h-[600px] w-[300px]" size="300x600" />
              </div>

              {/* Similar Investors */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Similar Investors</h2>
                <div className="space-y-4">
                  {/* TODO: Implement similar investors section */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 