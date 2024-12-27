'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What's included in your motorcycle history reports?",
    answer: "Our comprehensive reports cover accident history, ownership records, service logs, title information, and much more. We compile data from various trusted sources to give you a complete picture of the motorcycle's past."
  },
  {
    question: "How reliable is the information in your reports?",
    answer: "We strive for the highest level of accuracy by sourcing information from official records and reputable databases. However, we recommend using our reports as one tool in your decision-making process, alongside a professional inspection and test ride."
  },
  {
    question: "How quickly can I access a report?",
    answer: "Our reports are generated instantly. As soon as you enter the VIN and complete the purchase, you'll have immediate access to the full report. No waiting required!"
  },
  {
    question: "Can I use your service for motorcycles outside the United States?",
    answer: "Currently, our service primarily covers motorcycles in the United States. We're actively working on expanding our coverage to other countries, so stay tuned for updates!"
  }
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-secondary/30 hover:bg-secondary/50 rounded-lg transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-100">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-300" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-300" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-secondary/20 rounded-b-lg">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

