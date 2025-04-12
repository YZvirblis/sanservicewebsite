'use client'

import { useSafeTranslation } from '@/i18n'
import { Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const { t, ready } = useSafeTranslation()

  if (!ready) return null

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-12 bg-cover bg-center border-b-4 border-yellow-400 shadow-xl"
      style={{ backgroundImage: `url('/hero-bg.png')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 z-0" />

      {/* Animated glass card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-2xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-2 drop-shadow-md">
          San Service
        </h1>

        <p className="text-base sm:text-lg text-[var(--color-brand-accent)] font-semibold mb-8 drop-shadow-sm">
          {t('slogan')}
        </p>

        <p className="text-lg sm:text-xl text-white/90 mb-8 drop-shadow-sm">
          {t('hero_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0502358297"
            className="bg-white text-[var(--color-brand-primary)] px-6 py-3 rounded-md font-semibold hover:bg-white/90 transition w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            {t('call_now')}
          </a>

          <a
            href="https://wa.me/972502358297"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            {t('whatsapp')}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
