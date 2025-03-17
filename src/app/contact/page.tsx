import type { Metadata } from 'next'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/outline'

export const metadata: Metadata = {
  title: 'Contact Us | London Investors Directory',
  description: 'Get in touch with the London Investors Directory team for inquiries about listings, advertising, or general questions.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Have a question about our directory? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                <dl className="mt-8 space-y-6">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd className="flex">
                      <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      <span className="ml-3 text-gray-500">contact@londoninvestorsdirectory.com</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                      <span className="ml-3 text-gray-500">+44 (0) 20 1234 5678</span>
                    </dd>
                  </div>
                </dl>
                <div className="mt-8 prose prose-blue">
                  <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                  <p className="text-gray-500">
                    Our team typically responds within 24-48 business hours. For urgent matters
                    related to your premium subscription, please include your account details
                    in your message.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-sm rounded-lg p-8">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <div className="mt-1">
                    <select
                      id="subject"
                      name="subject"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                      <option>General Inquiry</option>
                      <option>Investor Listing</option>
                      <option>Advertising</option>
                      <option>Premium Subscription</option>
                      <option>Technical Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="privacy-policy"
                    name="privacy-policy"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-500">
                    I agree to the{' '}
                    <a href="/privacy" className="text-blue-600 hover:text-blue-500">
                      privacy policy
                    </a>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 