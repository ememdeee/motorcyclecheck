'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp, BarChart3, Car, BikeIcon as Motorcycle } from 'lucide-react'

export function MarketValueSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-100">
              Why Choose MotoInsights?
            </h2>
            <p className="text-xl text-gray-300">
              We're not just about motorcycles; we're about the riders, the thrill of the ride, and making every decision the right one. When you choose us, you get:
            </p>
            
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: TrendingUp, title: "Accurate Information", description: "Reliable data from trusted sources" },
              { icon: BarChart3, title: "User-Friendly Tools", description: "Easy-to-use interface to access your reports and create your stickers" },
              { icon: Motorcycle, title: "Fast Turnaround", description: "Get your reports and stickers in no time" },
              { icon: DollarSign, title: "Passion for Bikes", description: "We share your love for two wheels" },
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800 border border-gray-700 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <item.icon className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

