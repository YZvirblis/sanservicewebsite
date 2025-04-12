'use client'

import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'
import HeroSection from '@/components/HeroSection'
import ReviewsSection from '@/components/ReviewsSection'
import ServicesSection from '@/components/ServicesSection'

export default function HomePage() {
 

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
