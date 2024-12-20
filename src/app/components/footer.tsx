import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const navigation = [
  {
    title: "Motorcycle Reports",
    links: [
      { name: "Sample report", href: "/sample" },
      { name: "VIN Lookup", href: "/#chat" },
      { name: "License Plate Search", href: "/license-plate-lookup" }
    ]
  },
  {
    title: "Window Stickers",
    links: [
      { name: "Create Sticker", href: "/window-sticker" },
      { name: "Sample Sticker", href: "/sample" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Pricing", href: "/pricing" },
      { name: "For Dealers", href: "/for-dealers" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ]
  }
]

export function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="container px-4 py-12 md:py-16 lg:py-20 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-lg font-semibold text-blue-300 neon-glow">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} MotoInsights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

