import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | London Investors Directory',
  description: 'Learn about how the London Investors Directory collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-sm rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-500">
                Last updated: March 15, 2024
              </p>

              <h2>1. Introduction</h2>
              <p>
                London Investors Directory ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website and use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>We may collect personal information that you provide to us, including but not limited to:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Company details</li>
                <li>Professional background</li>
                <li>Payment information</li>
              </ul>

              <h3>2.2 Usage Information</h3>
              <p>We automatically collect certain information about your device when you use our website, including:</p>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time and date of visits</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you administrative information</li>
                <li>Respond to your inquiries</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to maintain the security of your 
                personal information. However, no method of transmission over the Internet or electronic storage 
                is 100% secure.
              </p>

              <h2>5. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store 
                certain information. You can instruct your browser to refuse all cookies or to indicate when 
                a cookie is being sent.
              </p>

              <h2>6. Third-Party Services</h2>
              <p>
                We may use third-party service providers to help us operate our website, conduct our business, 
                or service you. These providers have access to your personal information only to perform specific 
                tasks on our behalf.
              </p>

              <h2>7. Your Rights</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Withdraw consent</li>
              </ul>

              <h2>8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul>
                <li>Email: privacy@londoninvestorsdirectory.com</li>
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