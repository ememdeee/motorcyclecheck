'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Clock, Zap } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { HoverToForm } from './HoverToForm copy'

export function BoostSaleSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="grid grid-cols-2 gap-6 mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { icon: TrendingUp, title: "Accurate Pricing", description: "Ensure you're buying or selling at the right value." },
              { icon: Clock, title: "Save Time", description: "No need for tedious research." },
              { icon: Zap, title: "Instant Results", description: "Get your valuation in seconds." },
              { icon: Shield, title: "Trusted Data", description: "Valuations based on extensive market analysis." },
            ].map((feature, index) => (
              <Card key={index} className="group bg-gray-800 border border-gray-700 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-100 mb-6">
            Window Stickers That Demand Attention
            </h2>
            <p className="text-xl text-gray-300 mb-8">
            Want to elevate your motorcycle's appeal to buyers or make a statement at your next ride event? Our premium window stickers are designed to impress!
            </p>

            <HoverToForm>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            >
              Grab Your Power Report
            </Button>
            </HoverToForm>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

