'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Zap, ShieldCheck, BarChart2 } from 'lucide-react'
import Image from 'next/image'
import { Plus, Paintbrush, Download } from 'lucide-react'
import SiteForm from '../components/SiteForm'

const stickerFeatures = [
  { icon: FileText, title: "Complete Specs", description: "Every detail at your fingertips" },
  { icon: Zap, title: "Performance Insights", description: "From horsepower to MPG" },
  { icon: ShieldCheck, title: "Trust Builder", description: "Transparency that sells" },
  { icon: BarChart2, title: "Value Justification", description: "Data to back your price" }
]

export default function WindowStickerPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/50 to-background text-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-white neon-glow text-shadow-lg">
            Showcase Your Motorcycle Like Never Before
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            The Window Sticker tool by MotoInsights is your ultimate solution to make your motorcycle stand out. Whether you&apos;re selling, showcasing, or just taking pride in your ride, our customizable window stickers add the perfect finishing touch.
          </p>
        </motion.div>

        {/* Search Form */}
        <div className='max-w-2xl mx-auto'>
          <SiteForm formStyle='motorcyclecheck' reportType='WS'/>
        </div>

        {/* Features Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 my-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-white neon-glow text-shadow-lg mb-8">
              Window Sticker Superpowers
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {stickerFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                >
                  <div className="flex items-start space-x-4">
                    <feature.icon className={`h-8 w-8 ${hoveredFeature === index ? 'text-blue-400' : 'text-gray-400'} transition-colors duration-300`} />
                    <div>
                      <h3 className={`font-semibold mb-2 ${hoveredFeature === index ? 'text-blue-400' : 'text-white'} transition-colors duration-300`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm ${hoveredFeature === index ? 'text-gray-200' : 'text-gray-400'} transition-colors duration-300`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative w-full" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="relative pt-[66.67%]"> {/* 3:2 aspect ratio */}
              <Image
                src="/motorcycle-sticker.png"
                alt="Digital Window Sticker Example"
                fill
                className="object-contain rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-2 text-white">Interactive Window Sticker</h3>
                <p className="text-sm text-white">Hover over sections to reveal detailed information</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What is a Window Sticker? Section */}
        <motion.div 
          className="container mx-auto px-4 mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white neon-glow text-shadow-lg">
            What is a Window Sticker?
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src="/kawasaki-sticker.png"
                alt="Window Sticker Example"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div 
              className="w-full md:w-1/2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-lg text-gray-300 mb-4">
                A window sticker is a visually striking and informative display that highlights your motorcycl&apos;s most essential details, creating an immediate impression.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                Think of it as a professional profile for your bike, easily readable and designed to impress. It showcases key information such as make, model, year, engine specifications, and unique features, all in an eye-catching format.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Use a Window Sticker? Section */}
        <motion.div 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white neon-glow text-shadow-lg">
            Why Use a Window Sticker?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Boost Buyer Confidence", description: "Include verified specs and reports that build trust instantly.", icon: ShieldCheck },
              { title: "Grab Attention", description: "Professionally designed layouts that stand out in any setting.", icon: Zap },
              { title: "Simplify Selling", description: "Display critical information buyers care about in one place.", icon: FileText },
              { title: "Elevate Presentation", description: "Turn your motorcycle into a showstopper with polished visuals.", icon: BarChart2 }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <item.icon className="h-12 w-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Create Your Window Sticker Section */}
        <motion.div 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white neon-glow text-shadow-lg">
            How to Create Your Window Sticker
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Enter Details", description: "Input your motorcycle's specs", icon: FileText },
              { step: 2, title: "Add Extras", description: "Highlight upgrades and modifications", icon: Plus },
              { step: 3, title: "Customize Look", description: "Choose from various templates", icon: Paintbrush },
              { step: 4, title: "Preview & Download", description: "Review and get your sticker", icon: Download },
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-blue-500 rounded-full p-3 mb-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Step {item.step}: {item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Benefits from Window Stickers? Section */}
        <motion.div 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white neon-glow text-shadow-lg">
            Who Benefits from Window Stickers?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Private Sellers", description: "Make your listing stand out and increase your bike's perceived value." },
              { title: "Dealerships", description: "Create uniform, professional displays for your inventory." },
              { title: "Enthusiasts", description: "Add a personal touch for bike shows, meets, and rallies." }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Key Features of MotoInsights Window Stickers Section */}
        <motion.div 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white neon-glow text-shadow-lg">
            Key Features of MotoInsights Window Stickers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Customizable Templates", description: "Tailored layouts that fit every need.", icon: Paintbrush },
              { title: "Verified Information", description: "Integrate data from our trusted motorcycle reports.", icon: ShieldCheck },
              { title: "High-Resolution Output", description: "Ensure your sticker looks sharp and professional.", icon: FileText },
              { title: "Quick and Easy Creation", description: "Create your sticker in just a few steps.", icon: Zap }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl p-8 shadow-lg border border-blue-500/20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">
            Ready to Unveil Your Motorcycle&apos;s Story?
          </h2>
          <p className="mb-6 text-gray-300">
            Get your digital window sticker now and take control of your motorcycle&apos;s narrative
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300">
            Generate Your Window Sticker
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

