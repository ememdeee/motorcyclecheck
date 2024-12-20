'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const trustLogos = [
  { name: 'Forbes', src: '/the-america-watch.webp' },
  { name: 'TechCrunch', src: '/business-times-journal.webp' },
  { name: 'Wall Street Journal', src: '/canada-business-today.webp' },
  { name: 'CNBC', src: '/north-america.webp' },
]

export function TrustIndicators() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-semibold text-gray-700">
            Trusted and featured by industry leaders
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {trustLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={120}
                height={40}
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}