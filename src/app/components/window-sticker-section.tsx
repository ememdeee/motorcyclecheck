'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Zap, ShieldCheck, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const stickerFeatures = [
  { 
    icon: FileText, 
    title: "Complete Specs", 
    description: "Every detail at your fingertips",
    image: "/Second_Section_Image_1.png"
  },
  { 
    icon: Zap, 
    title: "Performance Insights", 
    description: "From horsepower to MPG",
    image: "/Second_Section_Image_2.png"
  },
  { 
    icon: ShieldCheck, 
    title: "Trust Builder", 
    description: "Transparency that sells",
    image: "/Second_Section_Image_3.png"
  },
  { 
    icon: BarChart2, 
    title: "Value Justification", 
    description: "Data to back your price",
    image: "/Second_Section_Image_4.png"
  }
]

export function WindowStickerSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100 neon-glow text-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Window Stickers Turn Heads at Every Stop
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12 text-gray-400 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Want to make your motorcycle irresistible to buyers or just stand out at bike meets? Our customizable window stickers are the perfect touch!
        </motion.p>
        <motion.h3
          className="text-3xl font-bold text-center mb-8 text-blue-300"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Why Window Stickers?
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Showcase Key Features", description: "Highlight your motorcycle's specs, upgrades, and standout features." },
            { title: "Add Credibility", description: "Show verified information from our reports." },
            { title: "Eye-Catching Design", description: "Professionally crafted stickers that grab attention." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-300">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-xl text-center text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          Whether you're selling your bike or showing it off, our window stickers will help it shine.
        </motion.p>
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300">
              Think of a window sticker as your car's all-access pass to its coolest features. It's not just a label, it's a treasure map to everything that makes your ride unique. From horsepower to cup holders, we've got it all covered!
            </p>
            <div className="relative h-[400px] bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-md">
              <Image
                src={stickerFeatures[activeFeature].image}
                alt={`Interactive Window Sticker - ${stickerFeatures[activeFeature].title}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80 flex items-center p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">Sticker Spotlight</h3>
                  <p className="text-lg mb-4 text-gray-300">{stickerFeatures[activeFeature].description}</p>
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="bg-gray-700 text-gray-300 hover:bg-gray-600"
                      onClick={() => setActiveFeature((prev) => (prev - 1 + stickerFeatures.length) % stickerFeatures.length)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="bg-gray-700 text-gray-300 hover:bg-gray-600"
                      onClick={() => setActiveFeature((prev) => (prev + 1) % stickerFeatures.length)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-200">Window Sticker Superpowers</h3>
            <div className="grid gap-6">
              {stickerFeatures.map((feature, index) => (
                <Card key={index} className={`transition-all duration-300 bg-gray-800 border border-gray-700 ${index === activeFeature ? 'scale-105 shadow-lg' : ''}`}>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-200">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300">
                Get Your Window Sticker
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
