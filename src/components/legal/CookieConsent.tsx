import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent')
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  const handleDecline = () => {
    // Implement logic for declining cookies
    // This might involve disabling certain tracking features
    localStorage.setItem('cookieConsent', 'false')
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-blue-600 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">We use cookies on this site.</span>
                <span className="hidden md:inline">
                  We use cookies to enhance your browsing experience and analyze our traffic.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <div className="flex space-x-4">
                <button
                  onClick={handleAccept}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-400"
                >
                  Decline
                </button>
              </div>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <Link
                href="/privacy"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white hover:text-blue-100"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 