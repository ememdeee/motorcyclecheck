'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Wrench, Compass, Shield } from 'lucide-react'

const testimonials = [
  {
    name: "Alex R.",
    content: "MotoInsights gave me the confidence to buy my dream bike!",
  },
  {
    name: "Jamie T.",
    content: "The window sticker helped me sell my motorcycle faster than I expected.",
  },
  {
    name: "Chris L.",
    content: "A must-have tool for every bike enthusiast.",
  }
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/50 text-foreground">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100 neon-glow text-shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ride Smarter, Not Harder
        </motion.h2>
        <motion.h3 
          className="text-2xl text-center mb-8 text-blue-200"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Gateway to Motorcycle Mastery
        </motion.h3>
        <motion.p 
          className="text-center mb-12 text-gray-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Dive into our treasure trove of motorcycle wisdom:
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Shield, title: "Gear Up", description: "Expert reviews on the latest gear and tech to keep you safe and stylish on the road." },
            { icon: Wrench, title: "Wrench Wisdom", description: "DIY maintenance tips and tricks to keep your ride purring like a kitten." },
            { icon: Compass, title: "Road Sage", description: "Insider knowledge on the best routes, rallies, and motorcycle-friendly pit stops." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h4 className="text-xl font-semibold mb-2 text-blue-300">{item.title}</h4>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

