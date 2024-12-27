'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, ThumbsUp } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const guarantees = [
  {
    icon: Shield,
    title: "100% Satisfaction Promise",
    description: "Not happy? Let us know—we are here to help and will work with you to make it right, including processing refunds if needed."
  },
  {
    icon: Lock,
    title: "Fort Knox-Level Security",
    description: "Your data is locked down tighter than a bank vault. Shop with total peace of mind."
  },
  {
    icon: ThumbsUp,
    title: "Accuracy You Can Trust",
    description: "Our reports are so precise, you could set your watch to them. Reliable info, always."
  }
]

export function SatisfactionGuaranteedSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
            <Badge variant="outline" className="mb-4 text-gray-700 border-blue-600">
              Our Ironclad Guarantees
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Satisfaction So Guaranteed, It&apos;s Almost Unfair
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;re not just confident in our service - we&apos;re downright cocky. 
              That&apos;s why we offer guarantees that&apos;ll make other companies green with envy.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mt-8 border border-blue-100">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">What Our Customers Say</h3>
              <p className="text-gray-600 italic mb-4">At first, I thought their bold claims were just marketing fluff, but they delivered beyond expectations. Outstanding service—I&apos;m a customer for life!</p>
              <p className="text-gray-700 font-semibold">- Sarah T., Happy Customer</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="mb-6 bg-white hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <guarantee.icon className="h-8 w-8 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{guarantee.title}</h3>
                      <p className="text-gray-600">{guarantee.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

