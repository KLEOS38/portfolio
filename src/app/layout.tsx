import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Providers } from '@/components/Providers'
import CookieConsent from '@/components/legal/CookieConsent'
import { AuthProvider } from '@/contexts/AuthContext'
import { firebaseScript } from '@/lib/firebase-script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'London Investors Directory',
  description: 'Connect with top London-based investors across Angel, VC, PE, and Property sectors.',
  keywords: 'London angel investors, VCs in London, UK property investors, London investment, startup funding',
  authors: [{ name: 'London Investors Directory' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://londoninvestors.directory',
    title: 'London Investors Directory',
    description: 'Connect with top London-based investors across Angel, VC, PE, and Property sectors.',
    siteName: 'London Investors Directory',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: firebaseScript }} />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            <Header />
            <main className="min-h-screen bg-gray-50">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
} 