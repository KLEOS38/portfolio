import Link from 'next/link'
import { CalendarIcon } from '@heroicons/react/outline'
import AdBanner from '@/components/ads/AdBanner'

// This would be replaced with actual data fetching
const posts = [
  {
    id: 1,
    title: 'London FinTech Investment Trends 2024',
    description: 'An analysis of the latest investment trends in London\'s fintech sector, including key deals, emerging subsectors, and investor sentiment.',
    date: '2024-03-15',
    readingTime: '8 min read',
    category: 'Investment Trends',
    author: {
      name: 'Sarah Johnson',
      role: 'Investment Analyst',
      image: '/images/authors/sarah.jpg',
    },
  },
  {
    id: 2,
    title: 'The Rise of PropTech Investment in London',
    description: 'How property technology is reshaping London\'s real estate market and attracting significant venture capital investment.',
    date: '2024-03-10',
    readingTime: '6 min read',
    category: 'Sector Analysis',
    author: {
      name: 'Michael Chen',
      role: 'PropTech Specialist',
      image: '/images/authors/michael.jpg',
    },
  },
  // Add more blog posts...
]

export const metadata = {
  title: 'Investment Insights | London Investors Directory',
  description: 'Latest insights, trends, and analysis of the London investment landscape.',
}

export default function InsightsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Header Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <AdBanner className="h-[100px] w-full" size="1200x100" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            London Investment Insights
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            In-depth analysis, market trends, and expert perspectives on London's investment landscape.
          </p>
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/insights/${post.id}`}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl"
            >
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">{post.category}</p>
                  <div className="mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* In-content Ad */}
        <div className="my-12">
          <AdBanner className="h-[90px] w-full" size="728x90" />
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-lg shadow-lg mt-12 p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Stay Updated with London Investment Trends
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Get weekly insights and analysis delivered to your inbox
            </p>
          </div>
          <form className="mt-8 sm:flex justify-center">
            <input
              type="email"
              required
              className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-sm text-gray-500 text-center">
            We care about your data. Read our{' '}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
} 