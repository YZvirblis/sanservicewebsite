'use client'

import { use } from 'react'
import { useTranslation } from '@/i18n'

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params)
  const { t } = useTranslation(locale)

  return (
    <main className="min-h-screen p-8 text-center font-body">
      <h1 className="text-4xl font-heading mb-6 text-[var(--color-brand-primary)]">
        {t('slogan')}
      </h1>
      <button className="btn-primary">{t('call_now')}</button>
    </main>
  )
}
