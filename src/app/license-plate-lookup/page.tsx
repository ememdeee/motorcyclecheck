'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, CheckCircle, AlertTriangle, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'
import SiteForm from '../components/SiteForm'

const popularStates = [
  'California', 'Texas', 'Florida', 'New York', 'Illinois',
  'Pennsylvania', 'Ohio', 'Georgia', 'Michigan', 'Arizona'
]

const benefits = [
  {
    icon: Shield,
    title: "Ownership Verification",
    description: "Instantly verify the current and previous owners of any motorcycle"
  },
  {
    icon: AlertTriangle,
    title: "Safety First",
    description: "Uncover accident history, damage reports, and safety recalls"
  },
  {
    icon: Clock,
    title: "Real-Time Data",
    description: "Access up-to-the-minute information from nationwide databases"
  },
  {
    icon: CheckCircle,
    title: "Legal Compliance",
    description: "All searches comply with DPPA regulations and privacy laws"
  }
]

const faqs = [
  {
    question: "Is license plate lookup legal?",
    answer: "Yes! Our service is 100% legal and compliant with all federal and state regulations. We ensure your search is conducted within legal boundaries while protecting privacy."
  },
  {
    question: "What information will I receive?",
    answer: "Our comprehensive reports include motorcycle specifications, ownership history, accident records, safety recalls, and more - all the essential details you need to make informed decisions."
  },
  {
    question: "How accurate is the information?",
    answer: "We pull data from official state DMV records, insurance databases, and other reliable sources, ensuring high accuracy and up-to-date information."
  },
  {
    question: "How long does it take to get results?",
    answer: "Results are typically instant! Our advanced system processes your request immediately, delivering comprehensive reports within seconds."
  }
]

export default function LicensePlateLookup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background text-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4 bg-blue-500 text-white">
            Trusted by over 1M+ riders
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-white neon-glow">
            Instant Motorcycle License Plate Lookup
          </h1>
          <p className="text-lg text-gray-300">
            Unlock any motorcycle&apos;s complete history in seconds with just a license plate. Make informed decisions with comprehensive, accurate data.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <SiteForm formStyle='motorcyclecheck' />
        </div>

        {/* What is Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white neon-glow">
              What is a License Plate Lookup?
            </h2>
            <p className="text-lg text-gray-300">
              Think of it as your motorcycle&apos;s digital detective! Our license plate lookup service instantly reveals crucial information about any motorcycle, helping you make informed decisions and avoid potential risks.
            </p>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <Icon className="w-6 h-6 text-blue-400 mt-1" />
                      <div>
                        <h3 className="font-semibold group-hover:text-blue-400 transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-400">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/license-plate-lookup.png"
              alt="License Plate Lookup Process"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        {/* Popular States */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-white neon-glow">
            Popular State Searches
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {popularStates.map((state, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full hover:bg-blue-600/20 transition-all duration-300 border-gray-700 text-gray-300"
              >
                {state}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-white neon-glow">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-blue-400">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-lg font-semibold mb-2 text-gray-200">
            Trusted by Over 1 Million Riders
          </p>
          <p className="text-gray-400">
            Join thousands of satisfied customers who use our service daily
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-white neon-glow">
            Ready to Search a License Plate?
          </h2>
          <p className="mb-6 text-blue-200">
            Get instant access to comprehensive motorcycle history reports
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 neon-border">
            Start Your Search <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}