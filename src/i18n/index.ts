'use client'

import { useEffect } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTrans } from 'react-i18next'

import he from './he.json'
import en from './en.json'
import ru from './ru.json'

const resources = {
  he: { translation: he },
  en: { translation: en },
  ru: { translation: ru }
}

let initialized = false

export function useTranslation(locale = 'he') {
  useEffect(() => {
    if (!initialized) {
      i18next
        .use(initReactI18next)
        .init({
          resources,
          lng: locale,
          fallbackLng: 'he',
          interpolation: { escapeValue: false }
        })
      initialized = true
    } else {
      i18next.changeLanguage(locale)
    }
  }, [locale])

  return useTrans()
}
