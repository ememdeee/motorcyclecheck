'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const sampleData = {
  report: [
    {
      type: "Sport",
      samples: [
        { title: "2023 Harley-Davidson Softail Low Rider", vin: "1HD1YWZ1XPB032365", imageUrl:"/SR_1.png", url: "/report/vin/1HD1YWZ1XPB032365" },
        { title: "2006 Honda CBR 600F4i", vin: "JH2PC35106M700635", imageUrl:"/SR_2.png", url: "/report/vin/JH2PC35106M700635" },
        { title: "2009 Kawasaki ER-6n", vin: "JH2SC82A1MK000001", imageUrl:"/SR_3.png", url: "/report/vin/JKAEREC149DA30828" },
        { title: "2024 Can-Am Ryker Sport 900 ACE", vin: "ZDMVAREV1LB000001", imageUrl:"/SR_4.png", url: "/report/vin/3JB2JEG40RJ000543" }
      ]
    }
  ],
  sticker: [
    {
      type: "Sport",
      samples: [
        { title: "2023 Harlet-Davidson FXLRS", vin: "1HD1YWZ1XPB032365", imageUrl:"/SS_1.png", url: "/sticker/vin/1HD1YWZ1XPB032365-DF70DF70-2E2E-5940-4AE3-FD90538ECD71" },
        { title: "2019 Royal Enfield Himalayan", vin: "ME3FSM248KK436493", imageUrl:"/SS_2.png", url: "/sticker/vin/ME3FSM248KK436493-A1D5A1D5-A8A8-9029-608B-19D25F515675" },
        { title: "2006 Honda CBR600", vin: "JH2PC35106M700635", imageUrl:"/SS_3.png", url: "/sticker/vin/JH2PC35106M700635-F81FF81F-0707-BF36-ACA7-C5ED23750B1F" },
        { title: "2024 CAN-AM Ryker", vin: "3JB2JEG40RJ000534", imageUrl:"/SS_4.png", url: "/sticker/vin/3JB2JEG40RJ000534-9D279D27-0606-AF1B-D6F8-904D474A1F74" }
      ]
    }
  ]
}

export default function SamplePage() {
  const [activeTab, setActiveTab] = useState("report")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100 neon-glow">
          Unveil Your Motorcycle&apos;s Hidden Secrets
          </h1>
          <p className="text-lg text-gray-300">
            Dive into our treasure trove of motorcycle histories and window stickers. Witness the power of knowledge before you make your next ride!
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
            <TabsTrigger value="report">Sample Report</TabsTrigger>
            <TabsTrigger value="sticker">Sample Sticker</TabsTrigger>
          </TabsList>
          <TabsContent value="report" className="space-y-12">
            {sampleData.report.map((category) => (
              <div key={category.type} className="w-full">
                <h2 className="text-2xl font-semibold text-gray-200 mb-6">
                  Motorcycle History Reports
                </h2>
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, staggerChildren: 0.1 }}
                >
                  {category.samples.map((sample) => (
                    <motion.div
                      key={sample.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card key={sample.title} className="group hover:shadow-lg transition-all duration-300 glassmorphism">
                        <CardContent className="p-4 space-y-4">
                          <div className="aspect-[3/2] relative bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                              src={sample.imageUrl}
                              alt={`${sample.title} Report Preview`}
                              fill
                              className="object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-semibold group-hover:text-blue-600 transition-colors duration-300">
                              {sample.title}
                            </h3>
                            <div className="text-sm text-gray-500">
                              <p className="truncate">VIN: {sample.vin}</p>
                            </div>
                            <Link href={sample.url} target='_blank' className='mt-4 block'>
                              <Button 
                                variant="ghost" 
                                className="w-full hover:bg-blue-900/50 transition-colors duration-300 neon-border"
                              >
                                View Sample
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="sticker" className="space-y-12">
            {sampleData.sticker.map((category) => (
              <div key={category.type} className="w-full">
                <h2 className="text-2xl font-semibold text-gray-200 mb-6">
                  Motorcycle Window Stickers
                </h2>
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, staggerChildren: 0.1 }}
                >
                  {category.samples.map((sample) => (
                    <motion.div
                      key={sample.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card key={sample.title} className="group hover:shadow-lg transition-all duration-300 glassmorphism">
                        <CardContent className="p-4 space-y-4">
                          <div className="aspect-[3/1.75] relative bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                              src={sample.imageUrl}
                              alt={`${sample.title} Window Sticker Preview`}
                              fill
                              className="object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-semibold group-hover:text-blue-600 transition-colors duration-300">
                              {sample.title}
                            </h3>
                            <div className="text-sm text-gray-500">
                              <p className="truncate">VIN: {sample.vin}</p>
                            </div>
                            <Link href={sample.url} target='_blank' className='mt-4 block'>
                              <Button 
                                variant="ghost" 
                                className="w-full hover:bg-blue-900/50 transition-colors duration-300 neon-border"
                              >
                                View Sample
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-white rounded-xl p-8 glassmorphism">
          <h2 className="text-2xl font-bold mb-4 neon-glow">
            Ready to Get Your {activeTab === "report" ? "Motorcycle History Report" : "Motorcycle Window Sticker"}?
          </h2>
          <p className="mb-6 text-blue-200">
            Access comprehensive motorcycle information instantly
          </p>
          <Link href={'/'}>
          <Button size="lg" variant="secondary" className="hover:bg-blue-400 transition-all duration-300 neon-border">
            Get Started Now
          </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}