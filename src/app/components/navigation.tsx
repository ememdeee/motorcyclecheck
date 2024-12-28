'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/sample', label: 'Sample' },
  { href: '/window-sticker-lookup', label: 'Window Sticker' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export const siteTitle = `${process.env.NEXT_PUBLIC_WEBSITE_NAME} Motorcycle History Reports & Specs`;

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/80 backdrop-blur-md">
      <div className="container flex h-16 items-center mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 neon-glow">
              {process.env.NEXT_PUBLIC_WEBSITE_NAME}
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  pathname === item.href
                    ? "text-blue-400 neon-glow"
                    : "text-gray-300"
                )}
              >
                {item.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"
                  initial={{ width: "0%" }}
                  animate={{ width: pathname === item.href ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </Link>
            ))}
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6 text-gray-300" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-900/95 backdrop-blur-md text-gray-100 border-r border-gray-700">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center">
            <Button asChild variant="ghost" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800">
              <Link href="/login">
                Login
              </Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white neon-border">
              <Link href="/signup">
                Sign Up
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col space-y-3 p-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-blue-400",
            pathname === item.href
              ? "text-blue-400 neon-glow"
              : "text-gray-300"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

