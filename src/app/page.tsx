import SearchFilters from '@/components/search/SearchFilters'
import InvestorGrid from '@/components/investors/InvestorGrid'
import { SearchProvider } from '@/components/search/SearchContext'

export default function Home() {
  return (
    <SearchProvider>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              London Investors Directory
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Connect with top London-based investors across Angel, VC, PE, and Property sectors.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <SearchFilters />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Refine Results</h2>
                  <SearchFilters vertical />
                </div>
                {/* Ad Space */}
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="w-[300px] h-[600px] mx-auto bg-gray-200 flex items-center justify-center">
                    Ad Space (300x600)
                  </div>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="lg:col-span-3">
              <InvestorGrid />
            </div>
          </div>
        </section>
      </div>
    </SearchProvider>
  )
} 