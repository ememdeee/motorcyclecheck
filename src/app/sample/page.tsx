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
        { title: "2023 Yamaha YZF-R1", date: "09/2023", vin: "JYARN32E6LA000001", imageUrl:"/report-sample.jpg", url: "/report/vin/2T1BURHE0FC320645" },
        { title: "2022 Kawasaki Ninja ZX-10R", date: "08/2023", vin: "JKBZXJC1NBA00001", imageUrl:"/report-sample.jpg", url: "/report/vin/2T1BURHE0FC320645" },
        { title: "2021 Honda CBR1000RR-R", date: "07/2023", vin: "JH2SC82A1MK000001", imageUrl:"/report-sample.jpg", url: "/report/vin/2T1BURHE0FC320645" },
        { title: "2020 Ducati Panigale V4", date: "06/2023", vin: "ZDMVAREV1LB000001", imageUrl:"/report-sample.jpg", url: "/report/vin/2T1BURHE0FC320645" }
      ]
    },
    {
      type: "Cruiser",
      samples: [
        { title: "2023 Harley-Davidson Street Glide", date: "09/2023", vin: "1HD1KTC1XPB000001", imageUrl:"/report-sample.jpg", url: "/report/vin/2T1BURHE0FC320645" },
        { title: "2022 Indian Chief", date: "08/2023", vin: "56KTCAAA1N3000001", imageUrl:"/report-sample.jpg", url: "/report/vin/2T1BURHE0FC320645" }
      ]
    },
    {
      type: "Adventure",
      samples: [
        { title: "2023 BMW R 1250 GS", date: "09/2023", vin: "WB10A0107PZ000001", imageUrl:"/report-sample.jpg", url: "/report/vin/2T1BURHE0FC320645" },
        { title: "2022 KTM 1290 Super Adventure", date: "08/2023", vin: "VBKV39403NM000001", imageUrl:"/report-sample.jpg", url: "/report/vin/2T1BURHE0FC320645" }
      ]
    }
  ],
  sticker: [
    {
      type: "Sport",
      samples: [
        { title: "2023 Ducati Streetfighter V4", date: "09/2023", vin: "ZDMVAKFV1PB000001", imageUrl:"/sticker-sample.png", url: "/sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC" },
        { title: "2022 Suzuki GSX-R1000R", date: "08/2023", vin: "JS1GT7MA1M2100001", imageUrl:"/sticker-sample.png", url: "/sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC" },
        { title: "2021 Aprilia RSV4", date: "07/2023", vin: "ZD4KGP009MS000001", imageUrl:"/sticker-sample.png", url: "/sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC" },
        { title: "2020 BMW S1000RR", date: "06/2023", vin: "WB10E0102LZ000001", imageUrl:"/sticker-sample.png", url: "/sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC" }
      ]
    },
    {
      type: "Cruiser",
      samples: [
        { title: "2023 Indian Challenger", date: "09/2023", vin: "56KTCAAA3N3000001", imageUrl:"/sticker-sample.png", url: "/sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC" },
        { title: "2022 Triumph Rocket 3", date: "08/2023", vin: "SMTD01FS5NT000001", imageUrl:"/sticker-sample.png", url: "/sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC" }
      ]
    },
    {
      type: "Adventure",
      samples: [
        { title: "2023 Yamaha Ténéré 700", date: "09/2023", vin: "JYADP1C11LA000001", imageUrl:"/sticker-sample.png", url: "/sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC" },
        { title: "2022 Ducati Multistrada V4", date: "08/2023", vin: "ZDMVAKFV1PB000001", imageUrl:"/sticker-sample.png", url: "/sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC" }
      ]
    }
  ]
}

const motorcycleBrands = [
  'Yamaha', 'Honda', 'Kawasaki', 'Suzuki', 'Harley-Davidson', 'BMW', 
  'Ducati', 'KTM', 'Triumph', 'Indian', 'Aprilia', 'Moto Guzzi'
]

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
                  {category.type} Motorcycle History Reports
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
                              <p>Report Date: {sample.date}</p>
                              <p className="truncate">VIN: {sample.vin}</p>
                            </div>
                            <Link href={sample.url}>
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
                  {category.type} Motorcycle Window Stickers
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
                          <div className="aspect-[3/2.3] relative bg-gray-100 rounded-lg overflow-hidden">
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
                              <p>Sticker Date: {sample.date}</p>
                              <p className="truncate">VIN: {sample.vin}</p>
                            </div>
                            <Link href={sample.url}>
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

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Looking for a Specific Motorcycle Brand?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {motorcycleBrands.map((brand) => (
              <Link
                key={brand}
                href="#"
                className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-blue-900/50 transition-colors duration-300 text-sm text-gray-300 hover:text-blue-400 whitespace-nowrap overflow-hidden text-ellipsis neon-border"
              >
                {brand}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-white rounded-xl p-8 glassmorphism">
          <h2 className="text-2xl font-bold mb-4 neon-glow">
            Ready to Get Your {activeTab === "report" ? "Motorcycle History Report" : "Motorcycle Window Sticker"}?
          </h2>
          <p className="mb-6 text-blue-200">
            Access comprehensive motorcycle information instantly
          </p>
          <Button size="lg" variant="secondary" className="hover:bg-blue-400 transition-all duration-300 neon-border">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  )
}