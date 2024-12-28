'use client'

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { PricingCards } from '../components/pricing-card'

export default function PricingPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-background/50 to-background text-gray-100 min-h-screen">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 bg-blue-500 text-white">
            Choose Your Plan
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-white neon-glow">
            Invest in Your Motorcycle&apos;s Story
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Unlock the power of knowledge with our value-packed plans. Dive deep into your vehicle&apos;s past and secure your automotive future!
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PricingCards cardStyle='motorcyclecheck'/>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
        </motion.div>
      </div>
    </section>
  )
}

