'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Headphones, Clock, Star, Users } from 'lucide-react'

const supportFeatures = [
  {
    icon: Headphones,
    title: "24/7 Availability",
    description: "Our experts are always on standby to assist you, day or night."
  },
  {
    icon: Clock,
    title: "Swift Responses",
    description: "Get answers to your queries in minutes, not hours."
  },
  {
    icon: Star,
    title: "Unmatched Expertise",
    description: "Our team boasts years of experience in vehicle history analysis."
  },
  {
    icon: Users,
    title: "Personalized Support",
    description: "Enjoy tailored assistance for your specific needs."
  }
]


export function ExpertSupportSection() {
  //const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Expert Support at Your Fingertips
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Backed by a Team of Vehicle History Wizards
          </h2>
          <p className="text-lg text-muted-foreground">
            Our dedicated experts are committed to unraveling the mysteries of any vehicle's past. 
            With round-the-clock support, we ensure you're never left in the dark.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportFeatures.map((feature, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="text-center">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
          >
            Get Expert Help Now
          </Button>
        </div>
      </div>
    </section>
  )
}

