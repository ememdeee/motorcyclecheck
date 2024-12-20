import { Shield, Clock, Car, FileText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Shield,
    title: "Comprehensive Reports",
    description: "Access detailed information from multiple reliable sources."
  },
  {
    icon: Clock,
    title: "Instant Results",
    description: "Get your vehicle history report in seconds, not hours."
  },
  {
    icon: Car,
    title: "Extensive Database",
    description: "Coverage for millions of vehicles across the United States."
  },
  {
    icon: FileText,
    title: "Easy to Understand",
    description: "Clear, concise reports that anyone can interpret."
  }
]

export function FeatureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Vehicle History Reports?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-[#3b82f6] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

