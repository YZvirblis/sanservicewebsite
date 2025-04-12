'use client'

import { useSafeTranslation } from '@/i18n'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { questionKey: 'faq_q1', answerKey: 'faq_a1' },
  { questionKey: 'faq_q2', answerKey: 'faq_a2' },
  { questionKey: 'faq_q3', answerKey: 'faq_a3' },
]

export default function FAQSection() {
  const { t, i18n } = useSafeTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isHebrew, setIsHebrew] = useState(false)

  useEffect(() => {
    setIsHebrew(i18n.language === 'he')
  }, [i18n.language])

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  const alignment = isHebrew ? 'text-right' : 'text-left'
  const direction = isHebrew ? 'rtl' : 'ltr'

  return (
    <section id="faq" dir={direction} className="py-20 px-6 sm:px-12 bg-[var(--color-brand-light)]">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-heading font-bold text-[var(--color-brand-primary)] mb-10 ${alignment}`}>
          {t('faq_title')}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                className={`w-full flex justify-between items-center p-4 font-semibold text-[var(--color-brand-primary)] ${alignment}`}
                onClick={() => toggle(index)}
              >
                {t(faq.questionKey)}
                <ChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  size={18}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`px-4 pb-4 text-gray-700 text-sm leading-relaxed ${alignment}`}
                  >
                    {t(faq.answerKey)}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
