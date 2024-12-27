import { CTASection } from "./components/cta-section";
import { ExpertSupportSection } from "./components/expert-support-section";
import { FAQAccordion } from "./components/faq-accordion";
import { FeatureShowcase } from "./components/feature-showcase";
import { HeroSection } from "./components/hero-section";
import { MarketValueSection } from "./components/market-value-section";
import { SatisfactionGuaranteedSection } from "./components/satisfaction-guaranteed-section";
import { TestimonialCarousel } from "./components/testimonial-carousel";
import { TrustIndicators } from "./components/trust-indicators";
import { WindowStickerSection } from "./components/window-sticker-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Existing content */}
      <div className="relative z-10">
        <HeroSection />
        <TrustIndicators />
        <FeatureShowcase />
        <MarketValueSection />
        {/* <BoostSaleSection /> */}
        <WindowStickerSection />
        <TestimonialCarousel />
        <ExpertSupportSection />
        <SatisfactionGuaranteedSection />
        <FAQAccordion />
        <CTASection />
      </div>
    </div>
  )
}

