'use client'

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-white neon-glow">
            Terms & Conditions
          </h1>
          <Badge variant="secondary" className="mb-4 bg-blue-500 text-white">
            Website terms of use
          </Badge>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">Speak to a customer service representative:</h3>
                  <p className="text-gray-300 mb-1">Call Toll Free - US: (866) 593-4553</p>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Open 7 days a week</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">Contact Address</h3>
                  <p className="text-gray-300">
                    2196 3rd Ave #4001<br />
                    New York, NY<br />
                    United States
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Terms Content */}
        <motion.div 
          className="prose prose-invert prose-lg max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">1. AGREEMENT</h2>
            <p className="text-gray-300 mb-8">
              Welcome to {process.env.NEXT_PUBLIC_WEBSITE_NAME}! The representations of our services and products available through this website do not constitute a binding offer. By clicking &apos;SEARCH&apos; or &apos;SHOW ME MY REPORT&apos; or &apos;YES, CONTINUE TO MY REPORT,&apos; You agree to be bound to these Terms of Use (the &apos;Agreement&apos;), constituting a legally binding agreement by and between {process.env.NEXT_PUBLIC_WEBSITE_NAME}, (hereinafter, &apos;{process.env.NEXT_PUBLIC_WEBSITE_NAME}&apos; or &apos;We&apos; or &apos;Our&apos;) and you (in either case, &apos;You&apos; or &apos;Your&apos;) concerning Your use of {process.env.NEXT_PUBLIC_WEBSITE_NAME} website (the &apos;Website&apos;) and the services available through the Website (the &apos;Services&apos;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">2. PRIVACY POLICY</h2>
            <p className="text-gray-300 mb-8">
              {process.env.NEXT_PUBLIC_WEBSITE_NAME} collects identifying and billing information including name, address, credit card information and e-mail address when consumers register for our services. Any personally identifiable information you provide to us including your email and phone number may be used to notify you of new products, product changes or offer discounts up to 50%.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">3. CHANGES TO AGREEMENT AND PRIVACY POLICY</h2>
            <p className="text-gray-300 mb-8">
              Internet technology and the applicable laws, rules, and regulations change frequently. Accordingly, {process.env.NEXT_PUBLIC_WEBSITE_NAME} reserves the right to change this agreement and its privacy policy at any time upon notice to you, to be given by the posting of a new version or a change notice on the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">4. ELIGIBILITY</h2>
            <p className="text-gray-300 mb-8">
              By using the website or services, you represent and warrant that you are at least 18 years old and are otherwise legally qualified to enter into and form contracts under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">5. ROLE</h2>
            <p className="text-gray-300 mb-8">
              Without limitation, you agree that {process.env.NEXT_PUBLIC_WEBSITE_NAME} is merely a technology solution that serves as a third-party platform and you use the Website and Services at Your own risk, without limitation and pursuant to Section: ASSUMPTION OF RISK; RELEASE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">6. LICENSE</h2>
            <p className="text-gray-300 mb-8">
              Unless otherwise stated, {process.env.NEXT_PUBLIC_WEBSITE_NAME} owns the intellectual property rights for all material on https://www.{process.env.NEXT_PUBLIC_WEBSITE_NAME}.com/. All intellectual property rights are reserved. You may view and/or print pages from https://www.{process.env.NEXT_PUBLIC_WEBSITE_NAME}.com/ for your own personal use subject to restrictions set in these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">7. NO RELIANCE ON THIRD PARTY CONTENT</h2>
            <p className="text-gray-300 mb-8">
              The information on the Website is provided for information purposes only. The Website and Services are provided only as a technology solution and {process.env.NEXT_PUBLIC_WEBSITE_NAME} shall not be liable for any delay or failure to make available the Report.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">8. ASSUMPTION OF RISK; RELEASE</h2>
            <p className="text-gray-300 mb-8">
              You knowingly and freely assume all risk when using the website and services. You, on behalf of yourself, your personal representatives, and your heirs, hereby voluntarily agree to release, waive, discharge, hold harmless, defend, and indemnify {process.env.NEXT_PUBLIC_WEBSITE_NAME} and its stockholders, officers, directors, employees, agents, affiliates, consultants, representatives, sublicenses, successors, and assigns from any and all claims, actions, or losses for bodily injury, property damage, wrongful death, emotional distress, loss of privacy, or other damages or harm, whether to you or to third parties, that may result from your use of the website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">9. USER INFORMATION; PASSWORD PROTECTION</h2>
            <p className="text-gray-300 mb-8">
              To access and/or use the Website and use the Services, You may be asked to provide certain registration details or other information. You represent and warrant that all user information you provide in connection with your use of the Website and Services will be current, complete, and accurate, and that you will update that information as necessary to maintain its completeness and accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">10. RESERVED RIGHTS FOR FEES</h2>
            <p className="text-gray-300 mb-8">
              You acknowledge and agree that {process.env.NEXT_PUBLIC_WEBSITE_NAME} reserves the right to charge for access to the Website and use of the Services, in accordance with the Fees that are clearly disclosed throughout the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">11. THIRD-PARTY WEBSITES</h2>
            <p className="text-gray-300 mb-8">
              The Website is linked with the websites of third parties (&apos;Third-Party Websites&apos;), some of whom may have established relationships with {process.env.NEXT_PUBLIC_WEBSITE_NAME} and some of whom may not. {process.env.NEXT_PUBLIC_WEBSITE_NAME} does not have control over the content and performance of Third-Party Websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">12. PROHIBITED USES</h2>
            <p className="text-gray-300 mb-8">
              {process.env.NEXT_PUBLIC_WEBSITE_NAME} imposes certain restrictions on your use of the Website and the Services. You represent and warrant that you will not engage in any prohibited activities, including but not limited to: stalking, harassing, impersonating others, or collecting information about users without their consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">13. INTELLECTUAL PROPERTY</h2>
            <p className="text-gray-300 mb-8">
              You represent and warrant that, when using the Website and Services, You will obey the law and respect the intellectual property rights of others. Your use of the Website and Services is at all times governed by and subject to laws regarding copyright ownership and use of intellectual property generally.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">14. DISCLAIMERS; LIMITATION OF LIABILITY</h2>
            <p className="text-gray-300 mb-8">
              This site is provided by {process.env.NEXT_PUBLIC_WEBSITE_NAME} on an &apos;as is&apos; and &apos;as available&apos; basis. {process.env.NEXT_PUBLIC_WEBSITE_NAME} does not specifically warrant or guarantee the accuracy of its search reports. {process.env.NEXT_PUBLIC_WEBSITE_NAME} makes no representations or warranties regarding any liens or security interests filed after the date and time indicated on the report.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">15. YOUR REPRESENTATIONS AND WARRANTIES</h2>
            <p className="text-gray-300 mb-8">
              You represent and warrant that your use of the Website and Services will be in accordance with this Agreement and any other {process.env.NEXT_PUBLIC_WEBSITE_NAME} policies, and with any applicable laws or regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">16. INDEMNITY BY YOU</h2>
            <p className="text-gray-300 mb-8">
              Without limiting any indemnification provision of this Agreement, You (the &apos;Indemnitor&apos;) agree to defend, indemnify and hold harmless {process.env.NEXT_PUBLIC_WEBSITE_NAME} and the Parties (collectively, the &apos;Indemnities&apos;) from and against any and all claims, actions, demands, causes of action, and other proceedings (collectively, &apos;Claims&apos;), including but not limited to legal costs and fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">17. GOVERNING LAW; JURISDICTION AND VENUE</h2>
            <p className="text-gray-300 mb-8">
              Any cause of action by you arising out of or relating to the website, services, or this agreement must be instituted within one (1) year after the cause of action arose or be forever waived and barred. All actions shall be subject to the limitations set forth above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">18. TERMINATION</h2>
            <p className="text-gray-300 mb-8">
              Without limiting any other provision of this agreement, {process.env.NEXT_PUBLIC_WEBSITE_NAME} reserves the right to, in sole discretion and without notice or liability, deny use of the website and/or services to any person for any reason or for no reason at all, including without limitation for any breach or suspected breach of any representation, warranty, or covenant contained in this agreement, or of any applicable law or regulation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">19. NOTICES</h2>
            <p className="text-gray-300 mb-8">
              All notices required or permitted to be given under this Agreement must be in writing. {process.env.NEXT_PUBLIC_WEBSITE_NAME} shall give any notice by email sent to the most recent email address, if any, provided by the intended recipient to {process.env.NEXT_PUBLIC_WEBSITE_NAME}. You agree that any notice received from {process.env.NEXT_PUBLIC_WEBSITE_NAME} electronically satisfies any legal requirement that such notice be in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">20. PARTIAL INVALIDITY</h2>
            <p className="text-gray-300 mb-8">
              Should any part of this Agreement be declared invalid, void, or unenforceable by a Court of Competent Jurisdiction, such decision shall not affect the validity of any remaining portion hereof, which shall remain in full force and effect, and the parties hereby acknowledge and agree that they would have executed the remaining portion hereof without including the part so declared by a Court of Competent Jurisdiction, to be invalid, void, or unenforceable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">21. GENERAL</h2>
            <p className="text-gray-300 mb-8">
              This Agreement constitutes the entire agreement between {process.env.NEXT_PUBLIC_WEBSITE_NAME} and You concerning your use of the Website and Services. This Agreement may only be modified by a written amendment signed by an authorized executive of {process.env.NEXT_PUBLIC_WEBSITE_NAME} or by the unilateral amendment of this Agreement by {process.env.NEXT_PUBLIC_WEBSITE_NAME} and by the posting by {process.env.NEXT_PUBLIC_WEBSITE_NAME} of such amended version. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof.
            </p>
          </section>
        </motion.div>
        <p className="text-sm text-gray-400 text-center mt-12">
          © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_WEBSITE_NAME}. All rights reserved.
        </p>
      </div>
    </div>
  )
}

