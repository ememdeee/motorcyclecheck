'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Car, Clock, Shield, Users, AlertTriangle, Activity, Gavel, FileText, Calendar, Bell, Check } from 'lucide-react'
import { PricingPopup } from '../components/PricingPopup'

const pricingOptions = [
  {
    title: "1 Report",
    price: "$19.99",
    description: "Complete Report for 1 Vehicle",
    bgColor: "bg-gray-900",
    buttonText: "Get Your Report",
    code: "DVH1"
  },
  {
    title: "2 Reports",
    price: "$29.99",
    description: "Complete Report for 2 Vehicles",
    bgColor: "bg-gray-900",
    buttonText: "Get Your Reports",
    code: "DVH2"
  },
  {
    title: "Unlimited Reports",
    price: "$49.99/month",
    description: "Annual Subscription",
    bgColor: "bg-gray-900",
    buttonText: "Start Subscription",
    code: "DVHYRS"
  }
]

const features = [
  { icon: Car, text: "Complete Report" },
  { icon: Clock, text: "Report Never Expires" },
  { icon: Shield, text: "Title Brand Verification" },
  { icon: Users, text: "Ownership Records" },
  { icon: AlertTriangle, text: "Accident Information" },
  { icon: Activity, text: "Vehicle Usage" },
  { icon: Gavel, text: "Auction Records" },
  { icon: FileText, text: "Detailed History Verification" },
  { icon: Calendar, text: "Event Verification" },
  { icon: Bell, text: "Recalls" },
]

export default function PricingPage() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null)

  const handleOpenPopup = (code: string) => {
    setSelectedCode(code)
  }

  const handleClosePopup = () => {
    setSelectedCode(null)
  }
  
  return (
    <section className="py-16 bg-gradient-to-b from-background via-background/50 to-background text-gray-100 min-h-screen">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 bg-blue-500 text-white">
            Choose Your Plan
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-white neon-glow">
            Invest in Your Motorcycle&apos;s Story
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Unlock the power of knowledge with our value-packed plans. Dive deep into your vehicle&apos;s past and secure your automotive future!
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <Card key={index} className={`w-full overflow-hidden transition-all duration-300 hover:shadow-lg ${option.bgColor}`}>
                <CardHeader className="text-center p-6 bg-gradient-to-b from-background via-background/50 to-background">
                  <div className="text-2xl font-bold mb-2">{option.title}</div>
                  <div className="text-4xl font-bold ">
                    {option.price}
                  </div>
                  <p className="text-sm text-gray-50 mt-2">
                    {option.description}
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        {index === 2 ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <feature.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                        )}
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                    size="lg"
                    onClick={() => handleOpenPopup(option.code)}
                  >
                    {option.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm text-gray-400">
            All plans include our 30-day money-back guarantee. No questions asked.
          </p>
        </motion.div>
      </div>
      <PricingPopup
        isOpen={!!selectedCode}
        onClose={handleClosePopup}
        code={selectedCode || ''}
      />
    </section>
  )
}

