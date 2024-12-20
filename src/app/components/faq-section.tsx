'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What information is included in a vehicle history report?",
    answer: "Our vehicle history reports include accident history, ownership records, service records, title information, and more. We gather data from various reliable sources to provide a comprehensive overview of the vehicle's past."
  },
  {
    question: "How accurate is the information in your reports?",
    answer: "We strive for the highest level of accuracy by sourcing information from official records and reputable databases. However, we recommend using our reports as one tool in your decision-making process, alongside a professional inspection and test drive."
  },
  {
    question: "How long does it take to get a report?",
    answer: "Our reports are generated instantly. As soon as you enter the VIN or license plate and complete the purchase, you'll have immediate access to the full report."
  },
  {
    question: "Can I use your service for vehicles outside the United States?",
    answer: "Currently, our service primarily covers vehicles in the United States. We're working on expanding our coverage to other countries in the future."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#f5f7fa] hover:bg-[#e5e7ea] rounded-lg transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-[#e5e7ea] rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

