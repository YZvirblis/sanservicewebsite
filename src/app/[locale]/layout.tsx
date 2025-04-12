'use client'

import { use } from 'react'
import { useTranslation } from '@/i18n'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default function LocaleLayout({ children, params }: Props) {
  const { locale } = use(params)
  useTranslation(locale)

  return <>{children}</>
}
