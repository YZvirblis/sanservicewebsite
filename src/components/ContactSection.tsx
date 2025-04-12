'use client'

import { useSafeTranslation } from '@/i18n'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Facebook, Instagram } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ContactSection() {
  const { t, i18n } = useSafeTranslation()
  const [isHebrew, setIsHebrew] = useState(false)

  useEffect(() => {
    setIsHebrew(i18n.language === 'he')
  }, [i18n.language])

  const alignment = isHebrew ? 'text-right' : 'text-left'
  const direction = isHebrew ? 'rtl' : 'ltr'

  return (
    <section id="contact" dir={direction} className="bg-[var(--color-brand-light)] py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Info Side */}
        <motion.div
          initial={{ opacity: 0, x: isHebrew ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h2 className={`text-3xl sm:text-4xl font-heading font-bold text-[var(--color-brand-primary)] ${alignment}`}>
            {t('contact_title')}
          </h2>

          <p className={`text-lg text-gray-700 leading-relaxed ${alignment}`}>
            {t('contact_subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <a
              href="tel:0502358297"
              className="bg-[var(--color-brand-primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition flex items-center gap-2 justify-center"
            >
              <Phone size={20} />
              {t('call_now')}
            </a>

            <a
              href="https://wa.me/972502358297"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-brand-primary)] hover:text-white transition flex items-center gap-2 justify-center"
            >
              <MessageCircle size={20} />
              {t('whatsapp')}
            </a>
          </div>

          <div className={`flex items-center gap-2 mt-6 text-gray-700 ${alignment}`}>
            <MapPin size={20} />
            <span>{t('contact_location')}</span>
          </div>
        </motion.div>

        {/* Social Media Card */}
        <motion.div
  initial={{ opacity: 0, x: isHebrew ? -50 : 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="relative rounded-xl overflow-hidden shadow-xl"
>
  {/* Background image inside card */}
  <div className="absolute inset-0 bg-[url('/social-bg.png')] bg-cover bg-center  opacity-60 z-0 border-4 border-primary rounded-xl shadow-lg" />

  {/* Card content */}
  <div className="relative z-10 backdrop-blur-xs bg-white/10 border border-white/20 p-8 text-center text-primary ">
    <h3 className="text-xl sm:text-2xl font-heading font-bold mb-4">
      {t('follow_us')}
    </h3>
    <p className="text-primary/80 mb-6">{t('follow_us_sub')}</p>

    <div className="flex justify-center gap-6">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <Instagram size={32} className="text-primary" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <Facebook size={32} className="text-primary" />
      </a>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  )
}
