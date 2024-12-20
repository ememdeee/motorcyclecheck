'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Users, DollarSign, Clock, Zap } from 'lucide-react'
import { Input } from "@/components/ui/input"

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
              Window Stickers Turn Heads at Every Stop
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Want to make your motorcycle irresistible to buyers or just stand out at bike meets? Our customizable window stickers are the perfect touch!
            </p>
            <div className="mb-8">
              <form className="flex flex-col space-y-4">
                <Input
                  type="text"
                  placeholder="Enter your motorcycle's VIN"
                  className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <div className="flex space-x-4 mt-4 w-full">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input
                    type="tel"
                    placeholder="Enter your phone"
                    className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
              </form>
            </div>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            >
              Grab Your Power Report
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

