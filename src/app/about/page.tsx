'use client'

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, TrendingUp, Car } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 neon-glow">
            The MotorcycleInsights Revolution
          </h1>
          <Badge variant="secondary" className="mb-4 bg-blue-500 text-white">
            Driving Trust in the Automotive World
          </Badge>
          <p className="text-lg text-gray-300 mb-8">
            Embark on a journey through our mission to revolutionize motorcycle history reporting. We&apos;re not just a service; we&apos;re your automotive time machine!
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="mb-12 bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Our Mission</h2>
              <p className="text-lg text-gray-300">
                At MotorcycleInsights, we&apos;re committed to bringing transparency and trust to the automotive market. Our goal is to empower consumers and businesses with accurate, comprehensive motorcycle history information, enabling informed decisions and safer transactions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Company History */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-12 items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-300">Our Journey</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2010, MotorcycleInsights started with a simple idea: to make motorcycle history accessible to everyone. What began as a small startup has grown into a trusted industry leader, serving millions of customers worldwide.
            </p>
            <p className="text-gray-300 mb-4">
              Over the years, we&apos;ve expanded our services to include not just vehicle history reports, but also window stickers, market value assessments, and dealer solutions. Our commitment to innovation and customer satisfaction has driven our growth and success.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/about-us.png"
              alt="MotorcycleInsights Journey"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div 
          className="mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Comprehensive Data", description: "Access to 70+ databases for thorough motorcycle history" },
              { icon: Users, title: "Customer-Centric", description: "24/7 support and user-friendly interface" },
              { icon: TrendingUp, title: "Market Insights", description: "Real-time market value assessments" },
              { icon: Car, title: "Diverse Solutions", description: "Services for individual buyers, sellers, and dealerships" },
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="font-bold mb-2 text-blue-300">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-300">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Experience the MotorcycleInsights difference today. Whether you&apos;re buying, selling, or managing a fleet, we&apos;ve got you covered.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 neon-border">
            <Link href="/sample-report">Experience the Magic</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

