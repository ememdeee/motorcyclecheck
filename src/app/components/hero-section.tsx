'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { Exo_2 } from 'next/font/google'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const exo2 = Exo_2({ subsets: ['latin'] })

export function HeroSection() {
  const [searchType, setSearchType] = useState('vin')
  const [searchValue, setSearchValue] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [showDecoding, setShowDecoding] = useState(false)
  const [selectedState, setSelectedState] = useState('')

  const usStates = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchValue) {
      setShowDecoding(true)
    }
  }

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
              className={`text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 leading-tight neon-glow`}
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
              Are you buying or selling a motorcycle? Want to know its full story or show off its true value? We've got you covered! At MotoInsights, we provide comprehensive motorcycle reports and customizable window stickers to help you make informed decisions and showcase your bike like a pro.
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glassmorphism mb-8">
                <CardContent className="p-4">
                  <form onSubmit={handleSearch}>
                    <Tabs defaultValue={searchType} className="w-full" onValueChange={(value) => setSearchType(value as 'vin' | 'license')}>
                      <TabsList className="grid w-full grid-cols-2 mb-4 bg-white/10">
                        <TabsTrigger value="vin" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">VIN</TabsTrigger>
                        <TabsTrigger value="license" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">License Plate</TabsTrigger>
                      </TabsList>
                      <div className="space-y-2">
                        <div className="flex space-x-2">
                          <Input
                            type="text"
                            placeholder={searchType === 'vin' ? "Enter VIN" : "Enter License Plate"}
                            className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                          />
                          {searchType === 'license' && (
                            <Select value={selectedState} onValueChange={setSelectedState}>
                              <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
                                <SelectValue placeholder="Select State" />
                              </SelectTrigger>
                              <SelectContent>
                                {usStates.map((state) => (
                                  <SelectItem key={state.value} value={state.value}>
                                    {state.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                          />
                          <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                          />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105" >
                          <Search className="mr-2 h-4 w-4" /> Search Motorcycle History
                        </Button>
                      </div>
                    </Tabs>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.p 
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Trusted by over 1 million riders. 100% secure and confidential.
            </motion.p>
            {showDecoding && (
              <motion.div
                className="mt-8 glassmorphism rounded-lg p-6 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Processing Your Request</h3>
                {[
                  "Validating input...",
                  "Connecting to database...",
                  "Retrieving motorcycle information...",
                  "Analyzing history records...",
                  "Compiling report...",
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.5 }}
                  >
                    <div className="w-4 h-4 bg-gradient-to-r from-white to-gray-300 rounded-full mr-3"></div>
                    <p className="text-gray-300">{step}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
          <div className="hidden md:block">
            <motion.div 
              className="relative aspect-[4/3] glassmorphism rounded-lg overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/motorcycle-report.png"
                alt="Motorcycle History Report"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/50 to-purple-500/50"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

