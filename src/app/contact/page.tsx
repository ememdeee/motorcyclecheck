'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Clock, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    // For this example, we'll just simulate a successful submission
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000) // Hide message after 3 seconds
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 bg-white text-blue-600">
              We&apos;re Here to Help
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-white neon-glow">
              Let&apos;s Connect!
            </h1>
            <p className="text-xl text-blue-100">
              Your automotive queries are our passion. Reach out and let&apos;s embark on this journey together!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-700"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <p className="text-lg text-gray-300">
                Simply fill out the form below or give us a call directly. Let us know what questions you have and how we can help. We&apos;re looking forward to hearing from you soon.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-300">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-300">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[150px] bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 neon-border"
              >
                Launch Your Inquiry
              </Button>
            </form>
            {formSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 text-green-400 text-center font-medium"
              >
                Form submitted successfully!
              </motion.p>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { icon: Clock, title: 'Support hours', content: '24/7 Live Chat Support' },
              { icon: Mail, title: 'Email us', content: process.env.NEXT_PUBLIC_WEBSITE_EMAIL },
              { icon: Phone, title: 'Phone', content: process.env.NEXT_PUBLIC_WEBSITE_PHONE },
            ].map((item, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 flex items-start space-x-4 hover:shadow-md transition-all duration-300 border border-gray-700">
                <item.icon className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}