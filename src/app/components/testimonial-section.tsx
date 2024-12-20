import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "John D.",
    role: "Car Buyer",
    content: "This service saved me from buying a car with hidden problems. The report was detailed and easy to understand. Highly recommended!",
    rating: 5
  },
  {
    name: "Sarah M.",
    role: "Car Seller",
    content: "As a seller, providing a clean vehicle history report helped me sell my car faster and for a better price. Great investment!",
    rating: 5
  },
  {
    name: "Mike R.",
    role: "Car Enthusiast",
    content: "I use this service for all my vehicle purchases. It's reliable, fast, and gives me peace of mind every time.",
    rating: 4
  }
]

export function TestimonialSection() {
  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

