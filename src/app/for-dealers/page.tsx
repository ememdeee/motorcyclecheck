'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, Zap, Shield, TrendingUp } from 'lucide-react'
import { LiveChatButton } from '../components/live-chat-button'

export default function ForDealersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-white neon-glow">
            Empower Your Dealership
          </h1>
          <Badge variant="secondary" className="mb-4 bg-blue-500 text-white px-4 py-1 text-lg">
            Partner with MotoInsights
          </Badge>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Step into the future of motorcycle retail. Enhance your dealership with our cutting-edge motorcycle history reports and holographic window sticker solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="overflow-hidden hover:shadow-neon transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-blue-300 neon-glow">Initiate Uplink</h2>
                {formSubmitted ? (
                  <div className="text-green-400 font-semibold text-lg animate-pulse">
                    Transmission received. Standby for response...
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input placeholder="Dealership Designation" required className="bg-gray-700/50 border-blue-500/50 text-blue-100 placeholder-blue-300/50 focus:border-blue-400 transition-all duration-300" />
                    <Input type="email" placeholder="Comm Channel (Email)" required className="bg-gray-700/50 border-blue-500/50 text-blue-100 placeholder-blue-300/50 focus:border-blue-400 transition-all duration-300" />
                    <Input type="tel" placeholder="Direct Line (Phone)" className="bg-gray-700/50 border-blue-500/50 text-blue-100 placeholder-blue-300/50 focus:border-blue-400 transition-all duration-300" />
                    <Textarea placeholder="Mission Parameters (How can we assist?)" required className="bg-gray-700/50 border-blue-500/50 text-blue-100 placeholder-blue-300/50 focus:border-blue-400 transition-all duration-300" />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 neon-border text-lg py-6">
                      <Zap className="mr-2 h-5 w-5" /> Transmit Intel
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="overflow-hidden hover:shadow-neon transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-blue-300 neon-glow">Secure Channels</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/40 transition-all duration-300">
                      <Phone className="h-6 w-6 text-blue-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-blue-300 transition-all duration-300">Encrypted Line: (866) 593-4553</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-purple-500/20 p-3 rounded-full group-hover:bg-purple-500/40 transition-all duration-300">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-purple-300 transition-all duration-300">Secure Mail: dealers@motoinsights.com</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-green-500/20 p-3 rounded-full group-hover:bg-green-500/40 transition-all duration-300">
                      <Clock className="h-6 w-6 text-green-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-green-300 transition-all duration-300">Operations: 24/7 Nonstop</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-neon transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-blue-300 neon-glow">Neural Link</h2>
                <p className="mb-6 text-gray-300">Initiate direct cortex uplink with our cyber support team.</p>
                <LiveChatButton />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Dealer Benefits Section */}
        <motion.div 
          className="mt-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-300 neon-glow">Augment Your Operations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Enhanced Trust Protocols", description: "Fortify customer confidence with transparent motorcycle data streams" },
              { icon: Zap, title: "Accelerated Transactions", description: "Turbocharge your sales process with instant information access" },
              { icon: TrendingUp, title: "Market Dominance", description: "Outmaneuver competitors with superior motorcycle intelligence" },
            ].map((benefit, index) => (
              <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:shadow-neon transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <benefit.icon className="h-16 w-16 mx-auto mb-6 text-blue-400 group-hover:text-blue-300 transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-4 text-blue-300 group-hover:text-blue-200 transition-all duration-300">{benefit.title}</h3>
                  <p className="text-gray-300 group-hover:text-gray-100 transition-all duration-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Integration Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-300 neon-glow">Seamless Neural Integration</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our cybernetic solutions interface flawlessly with your existing systems, 
            providing a frictionless experience for both your operatives and clients.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 neon-border text-lg py-6 px-8">
            <Zap className="mr-2 h-5 w-5" /> Initiate Integration Sequence
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

