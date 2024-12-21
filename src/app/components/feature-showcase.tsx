'use client'

import { motion } from 'framer-motion'
import { History, AlertTriangle, PenToolIcon as Tool, FileCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: History,
    title: "Ownership History",
    description: "Track how many hands the bike has been through."
  },
  {
    icon: AlertTriangle,
    title: "Accident Records",
    description: "Check for past accidents or damages."
  },
  {
    icon: Tool,
    title: "Service Records",
    description: "See how well the bike has been maintained."
  },
  {
    icon: FileCheck,
    title: "Title Check",
    description: "Confirm a clean title, avoiding costly surprises."
  }
]

export function FeatureShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100 neon-glow">
            Motorcycle Reports: Know Before You Ride
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            Our detailed motorcycle reports give you all the critical information you need about any bike.
          </p>
        </motion.div>

        <div className="mb-12">
          <motion.h3 
            className="text-3xl font-bold text-center mb-8 text-blue-300"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Get a Report?
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                    <h4 className="text-xl font-semibold mb-2 text-blue-300">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 mb-6">
            Don&apos;t just take a chance — ride with confidence knowing the bike&apos;s full history.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 neon-border">
            Get Your Report Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

