'use client'

import { useSafeTranslation } from '@/i18n'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'אורן כהן',
    review: 'השירות היה מהיר ומקצועי. המכונאי הגיע תוך חצי שעה ותיקן את התקלה בלי בעיה!',
    rating: 5,
  },
  {
    name: 'Dana Levi',
    review: 'Amazing service! Arrived quickly and fixed my engine issue on the spot.',
    rating: 5,
  },
  {
    name: 'Игорь С.',
    review: 'Спасибо за оперативную помощь на трассе. Всё прошло на высшем уровне!',
    rating: 4,
  },
  {
    name: 'Tal G.',
    review: 'לא האמנתי שאמצא מכונאי כל כך מאוחר בלילה. ממליץ בחום!',
    rating: 5,
  },
  {
    name: 'Mark W.',
    review: 'I called from the side of the highway, and 25 minutes later my car was running again. Incredible!',
    rating: 5,
  },
  {
    name: 'Анна К.',
    review: 'Механик был очень вежлив и знал свое дело. Приехал быстро!',
    rating: 4,
  },
]

export default function ReviewsSection() {
  const { t } = useSafeTranslation()

  return (
    <section id="reviews" className="py-20 px-6 sm:px-12 bg-[var(--color-brand-light)]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--color-brand-primary)] mb-12">
          {t('reviews_title')}
        </h2>

        <div className="overflow-x-auto p-6 w-full">
          <div className="flex gap-6 w-full px-2 sm:px-0">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="min-w-[280px] sm:min-w-[300px] max-w-sm bg-white rounded-xl shadow-lg p-6 text-left rtl:text-right"
              >
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-800 text-sm mb-3">{r.review}</p>
                <span className="text-gray-500 text-xs font-semibold">– {r.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
