import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOriginal } from 'react-i18next'
import he from './he.json'
import en from './en.json'
import ru from './ru.json'
import { useEffect, useState } from 'react'

const resources = {
  he: { translation: he },
  en: { translation: en },
  ru: { translation: ru }
}

let initialized = false

export function initI18n(locale: string) {
  if (initialized) return
  initialized = true

  i18next
    .use(initReactI18next)
    .init({
      lng: locale,
      fallbackLng: 'he',
      resources,
      interpolation: {
        escapeValue: false,
      },
    })
}

// ✅ Safe hook
export function useSafeTranslation() {
    const { t, i18n } = useTranslationOriginal()
    const [ready, setReady] = useState(false)
  
    useEffect(() => {
      if (!i18n.isInitialized) return
  
      const onLanguageChanged = () => setReady(true)
      i18n.on('languageChanged', onLanguageChanged)
  
      if (i18n.language) setReady(true)
  
      return () => {
        i18n.off('languageChanged', onLanguageChanged)
      }
    }, [i18n.language])
  
    return { t, i18n, ready }
  }
