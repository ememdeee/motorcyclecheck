import type { Metadata } from 'next'
// import { Montserrat, Exo_2 } from 'next/font/google'
// import { SupportButton } from '@/components/support-button'
import './globals.css'
import { Navigation } from './components/navigation'
import { Footer } from './components/footer'
import { SupportButton } from './components/support-button'

// const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
// const exo2 = Exo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MotoInsights - Motorcycle History Reports & Specs',
  description: 'Get comprehensive motorcycle history reports and detailed specifications. Buy and sell motorcycles with confidence using verified history.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth dark`}>
      <body className={`bg-background text-foreground bg-cyber min-h-screen`}>
        <Navigation />
        <main>{children}</main>
        <SupportButton />
        <Footer />
      </body>
    </html>
  )
}

