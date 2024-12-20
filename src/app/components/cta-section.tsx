'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-6 text-white relative z-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Uncover Your Motorcycle's Hidden History?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 text-gray-300 relative z-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Don't leave your motorcycle purchase to chance. Get the facts you need to make an informed decision.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 relative z-10 neon-border">
            Get Your Report Now <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

