'use client'

import { use } from 'react'
import { initI18n } from '@/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)

  // Only initialize — don't switch languages
  initI18n(locale)

  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
