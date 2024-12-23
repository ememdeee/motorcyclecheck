'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Exo_2 } from 'next/font/google'
import SiteForm from './SiteForm'

const exo2 = Exo_2({ subsets: ['latin'] })

export function HeroSection() {

  return (
    <section className="relative overflow-hidden py-20">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.h1 
              className={`text-5xl md:text-7xl font-bold mb-6 neon-glow`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to MotoInsights
            </motion.h1>
            <motion.h2 
              className={`${exo2.className} text-3xl md:text-4xl font-bold mb-4 text-white`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Your Ultimate Motorcycle Report and Window Sticker Hub
            </motion.h2>
            <motion.p 
              className={`${exo2.className} text-xl mb-8 text-gray-300 leading-relaxed`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ride with Confidence, Knowledge, and Style!
            </motion.p>
            <motion.p 
              className={`${exo2.className} text-lg mb-8 text-gray-300 leading-relaxed`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Are you buying or selling a motorcycle? Want to know its full story or show off its true value? We got you covered! At MotoInsights, we provide comprehensive motorcycle reports and customizable window stickers to help you make informed decisions and showcase your bike like a pro.
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SiteForm formStyle='motorcyclecheck' />
            </motion.div>
            <motion.p 
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Trusted by over 1 million riders. 100% secure and confidential.
            </motion.p>
          </div>
          <div className="hidden md:block">
            <motion.div 
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/motorcycle-report.png"
                alt="Motorcycle History Report"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

