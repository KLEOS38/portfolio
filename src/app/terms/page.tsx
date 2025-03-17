import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | London Investors Directory',
  description: 'Read our terms of service to understand the rules and guidelines for using the London Investors Directory platform.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-sm rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-500">
                Last updated: March 15, 2024
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the London Investors Directory website ("Service"), you agree 
                to be bound by these Terms of Service ("Terms"). If you disagree with any part of 
                the terms, you may not access the Service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                London Investors Directory is a platform that provides information about investors 
                and investment opportunities in London. Our service includes both free and premium 
                features, with different levels of access and functionality.
              </p>

              <h2>3. User Accounts</h2>
              <h3>3.1 Registration</h3>
              <p>
                To access certain features of the Service, you must register for an account. You agree 
                to provide accurate, current, and complete information during registration and to update 
                such information to keep it accurate, current, and complete.
              </p>

              <h3>3.2 Account Security</h3>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and 
                for any activities or actions under your password. You agree not to disclose your password 
                to any third party.
              </p>

              <h2>4. Subscription Terms</h2>
              <h3>4.1 Premium Features</h3>
              <p>
                Premium features are available through paid subscription plans. Access to these features 
                is subject to payment of applicable fees and additional terms specific to the subscription plan.
              </p>

              <h3>4.2 Payment Terms</h3>
              <p>
                Subscription fees are billed in advance on a recurring basis. You authorize us to charge 
                your chosen payment method for the subscription fees. Fees are non-refundable except as 
                required by law.
              </p>

              <h2>5. User Content</h2>
              <p>
                Users may submit content to the Service. You retain ownership of your content, but grant 
                us a license to use, modify, and display it in connection with the Service.
              </p>

              <h2>6. Prohibited Uses</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Scrape or collect data from the Service without permission</li>
                <li>Impersonate any person or entity</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by London 
                Investors Directory and are protected by international copyright, trademark, patent, 
                trade secret, and other intellectual property laws.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                In no event shall London Investors Directory, its directors, employees, partners, agents, 
                suppliers, or affiliates be liable for any indirect, incidental, special, consequential, 
                or punitive damages arising out of or in connection with your use of the Service.
              </p>

              <h2>9. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is 
                material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United 
                Kingdom, without regard to its conflict of law provisions.
              </p>

              <h2>11. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul>
                <li>Email: legal@londoninvestorsdirectory.com</li>
                <li>Phone: +44 (0) 20 1234 5678</li>
                <li>Address: 123 Business Street, London, UK</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 