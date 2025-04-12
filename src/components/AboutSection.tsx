// src/components/AboutSection.tsx
'use client'

import { useSafeTranslation } from '@/i18n'
import { motion } from 'framer-motion'
import { Wrench, Clock, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function AboutSection() {
  const { t, i18n } = useSafeTranslation()
  const [isHebrew, setIsHebrew] = useState(false)

  useEffect(() => {
    setIsHebrew(i18n.language === 'he')
  }, [i18n.language])

  const alignment = isHebrew ? 'text-right' : 'text-left'
  const direction = isHebrew ? 'rtl' : 'ltr'

  return (
    <section id="about" dir={direction} className="bg-white py-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl font-heading font-bold text-[var(--color-brand-primary)] ${alignment}`}
        >
          {t('about_title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg text-gray-700 leading-relaxed ${alignment}`}
        >
          {t('about_paragraph_1')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-lg text-gray-700 leading-relaxed ${alignment}`}
        >
          {t('about_paragraph_2')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-lg text-gray-700 leading-relaxed ${alignment}`}
        >
          {t('about_paragraph_3')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`text-lg text-gray-700 leading-relaxed ${alignment}`}
        >
          {t('about_paragraph_4')}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-[var(--color-brand-light)] p-4 rounded-lg shadow-sm"
          >
            <Wrench className="text-[var(--color-brand-primary)]" />
            <span className="text-gray-800 font-medium">{t('about_icon_services')}</span>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-[var(--color-brand-light)] p-4 rounded-lg shadow-sm"
          >
            <Clock className="text-[var(--color-brand-primary)]" />
            <span className="text-gray-800 font-medium">{t('about_icon_hours')}</span>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-[var(--color-brand-light)] p-4 rounded-lg shadow-sm"
          >
            <MapPin className="text-[var(--color-brand-primary)]" />
            <span className="text-gray-800 font-medium">{t('about_icon_area')}</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}