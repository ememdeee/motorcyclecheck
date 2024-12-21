'use client'

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white neon-glow">
              Privacy Policy
            </h1>
            <Badge variant="secondary" className="mb-8 bg-blue-500 text-white">
              EFFECTIVE DATE: 08-JAN-2024
            </Badge>
          </div>

          {/* Policy Content */}
          <motion.div 
            className="prose prose-invert prose-lg max-w-none"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-300 mb-8">
              Thank you for visiting the website located at https://motoinsights.com (&apos;the Site&apos;). The Site is an Internet property of our company and its affiliated companies (&apos;We&apos;, &apos;we&apos; or &apos;us&apos;). This online privacy policy provides details about how We handle information that we collect about you. By visiting this Site, you are accepting the practices described in this privacy policy (&apos;Privacy Policy&apos;). This Privacy Policy covers our treatment of Personal Information (as defined below) that we gather when you are accessing or using our Site. This Privacy Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage. Personal Information that you submit to other websites will be subject to the privacy policies of those sites. We encourage you to carefully read the privacy policy of any website you visit.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Your IP Address</h2>
            <p className="text-gray-300 mb-8">
              Each time that you visit the Site, our web server automatically recognizes your IP address and the web page from which you came. Your IP address is used to help identify you and to gather broad demographic information about you. We also use IP addresses to help diagnose problems with our servers, to administer our Site, and to better serve you in using the features of the Site.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Cookies and Action Tags</h2>
            <p className="text-gray-300 mb-8">
              Cookies are files that web servers place on your computer to help identify you and to remember certain information about you. Action tags (also known as web beacons, web bugs or clear gifs) are a small, graphic image on a web page, web-based document or in an e-mail message that is designed to allow the site owner or a third party to monitor who is visiting a site. The following information describes the cookies and action tags that we use and how they work:
              <br /><br />
              We use session cookies to allow you to use the Site more easily and to help us improve the user experience. Session cookies are small text files that web servers typically send to users&apos; computers when they visit websites. These files contain information about your visit to the Site and may include a user ID that is encrypted. Session cookies terminate once you close your browser.
              <br /><br />
              By accepting this Privacy Policy, you specifically agree to our use of cookies and action tags as described herein. You may also set your browser to reject cookies. However, this may affect your ability to use certain features of the Site.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Personal Information That We Collect</h2>
            <p className="text-gray-300 mb-8">
              We collect Personal Information that you submit to us voluntarily. The definition of &apos;Personal Information&apos; is information that identifies you or can be used to identify or contact you. Such information may include your name, address, email address, telephone number, and billing and credit card information. We collect Personal Information when you request information from us, sign up for email updates, participate in our public forums, register for a membership, participate in members-only areas, request customer or technical support, purchase products or services, or otherwise interact with the Site.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">How We Use Your Personal Information</h2>
            <p className="text-gray-300 mb-8">
              We use your Personal Information to provide you with a customized website experience and to provide you with services you request. We also use your Personal Information to manage and improve the Site, track usage, and for security purposes. Additionally, we may use your Personal Information to communicate with you about your account, respond to your inquiries, send you newsletters, promotional emails, and surveys, and for other marketing purposes.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Disclosure of Personal Information</h2>
            <p className="text-gray-300 mb-8">
              We may share your Personal Information with our affiliates, partners, and service providers who help us operate the Site and deliver services to you. We may also disclose your Personal Information if required by law or to protect our rights or the rights of others. We do not sell or rent your Personal Information to third parties for their marketing purposes without your explicit consent.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Security</h2>
            <p className="text-gray-300 mb-8">
              We use industry-standard encryption technologies when transferring and receiving consumer data exchanged with our site. We have appropriate security measures in place in our physical facilities to protect against the loss, misuse or alteration of information that we have collected from you at our site. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Links to Other Sites</h2>
            <p className="text-gray-300 mb-8">
              The Site may contain links to other websites. We are not responsible for the privacy practices or the content of such websites. We encourage you to read the privacy policies of these linked sites as their privacy practices may differ from ours.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Children&apos;s Privacy</h2>
            <p className="text-gray-300 mb-8">
              The Site is not intended for use by children under the age of 13. We do not knowingly collect Personal Information from children under 13. If we become aware that we have inadvertently received Personal Information from a child under the age of 13, we will delete such information from our records.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Your Choices</h2>
            <p className="text-gray-300 mb-8">
              You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or contacting us. You can also contact us if you wish to review, correct, update or delete your Personal Information that we have collected.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-8">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &apos;EFFECTIVE DATE&apos; at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Contact Us</h2>
            <p className="text-gray-300 mb-8">
              If you have any questions about this Privacy Policy, please contact us at:
              <br /><br />
              MotoInsights<br />
              2196 3rd Ave #4001<br />
              New York, NY<br />
              United States<br />
              Email: privacy@motoinsights.com<br />
              Phone: (866) 593-4553
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

