import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CalendarIcon, ShareIcon } from '@heroicons/react/outline'
import AdBanner from '@/components/ads/AdBanner'
import type { Metadata } from 'next'

// This would be replaced with actual data fetching
async function getPost(id: string) {
  // Mock post data
  return {
    id: 1,
    title: 'London FinTech Investment Trends 2024',
    description: 'An analysis of the latest investment trends in London\'s fintech sector, including key deals, emerging subsectors, and investor sentiment.',
    content: `
      <p>The London fintech scene continues to thrive in 2024, with several key trends emerging in the first quarter. Investment in embedded finance solutions has seen particular growth, with several notable deals in the B2B space.</p>

      <h2>Key Investment Trends</h2>
      <p>Several major trends have emerged in the London fintech investment landscape:</p>
      <ul>
        <li>Increased focus on B2B solutions</li>
        <li>Growing interest in embedded finance</li>
        <li>Rise of RegTech investments</li>
        <li>Continued expansion of digital banking solutions</li>
      </ul>

      <h2>Notable Deals</h2>
      <p>The first quarter of 2024 has seen several significant investment rounds, including:</p>
      <ul>
        <li>Company A raised £50M Series B</li>
        <li>Company B secured £30M in growth funding</li>
        <li>Company C closed a £15M Series A round</li>
      </ul>
    `,
    date: '2024-03-15',
    readingTime: '8 min read',
    category: 'Investment Trends',
    author: {
      name: 'Sarah Johnson',
      role: 'Investment Analyst',
      image: '/images/authors/sarah.jpg',
      bio: 'Sarah has over 10 years of experience analyzing fintech investment trends in London.',
    },
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await getPost(params.id)
  
  if (!post) {
    return {
      title: 'Post Not Found | London Investors Directory',
    }
  }

  return {
    title: `${post.title} | London Investors Directory`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  }
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <AdBanner className="h-[100px] w-full" size="1200x100" />
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-8">
                  <Link
                    href="/insights"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    ← Back to Insights
                  </Link>
                </div>

                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>

                  <div 
                    className="prose prose-blue max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>

                {/* Author Bio */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-gray-200" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {post.author.name}
                      </h3>
                      <p className="text-sm text-gray-500">{post.author.role}</p>
                      <p className="mt-1 text-sm text-gray-500">{post.author.bio}</p>
                    </div>
                  </div>
                </div>
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
              {/* Share Buttons */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share</h3>
                <div className="flex space-x-4">
                  <button 
                    className="text-gray-400 hover:text-blue-500"
                    aria-label="Share this article"
                  >
                    <ShareIcon className="h-5 w-5" />
                  </button>
                  {/* Add more share buttons */}
                </div>
              </div>

              {/* Sidebar Ad */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <AdBanner className="h-[600px] w-[300px]" size="300x600" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
} 