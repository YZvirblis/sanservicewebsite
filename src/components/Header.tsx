'use client'

import Link from 'next/link'
import { useSafeTranslation } from '@/i18n'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import Flag from 'react-world-flags'

export default function Header({ locale }: { locale: string }) {
  const { t, i18n } = useSafeTranslation()
  const pathname = usePathname()
  const router = useRouter()

  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    if (i18n.language !== locale && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(locale)
    }
  }, [locale, i18n])

  const handleLanguageChange = (lang: string) => {
    const newPath = pathname.replace(/^\/(he|en|ru)/, `/${lang}`)
    router.push(newPath)
    setTimeout(() => setLangOpen(false), 0)
  }

  const languages = [
    { code: 'he', label: t('lang_he'), flagCode: 'IL' },
    { code: 'en', label: t('lang_en'), flagCode: 'US' },
    { code: 'ru', label: t('lang_ru'), flagCode: 'RU' },
  ]

  const currentLang = languages.find(l => l.code === locale)
  const isRTL = locale === 'he'

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div
        className={`max-w-6xl mx-auto px-4 py-3 flex items-center justify-between ${
          isRTL ? 'rtl:flex-row-reverse' : ''
        }`}
      >
        {/* Brand */}
        <div className="font-heading text-xl font-bold text-[var(--color-brand-primary)]">San Service</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-[var(--color-brand-primary)] font-semibold text-sm sm:text-base">
          <Link href="#hero">{t('nav_home')}</Link>
          <Link href="#services">{t('nav_services')}</Link>
          <Link href="#about">{t('nav_about')}</Link>
          <Link href="#contact">{t('nav_contact')}</Link>
        </nav>

        {/* Language Dropdown */}
        <div className="relative text-sm hidden md:block">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 hover:text-[var(--color-brand-accent)] transition"
          >
            {currentLang && (
              <Flag code={currentLang.flagCode} style={{ width: 20, height: 14, borderRadius: 2 }} />
            )}
            <span>{currentLang?.label}</span>
            <ChevronDown size={16} />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition text-right"
                >
                  <Flag code={lang.flagCode} style={{ width: 20, height: 14, borderRadius: 2 }} />
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[var(--color-brand-primary)]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-gray-200 px-6 py-4 space-y-4 text-[var(--color-brand-primary)] font-medium">
          <nav className="flex flex-col gap-4 text-base">
            <Link href="#hero" onClick={() => setMenuOpen(false)}>
              {t('nav_home')}
            </Link>
            <Link href="#services" onClick={() => setMenuOpen(false)}>
              {t('nav_services')}
            </Link>
            <Link href="#about" onClick={() => setMenuOpen(false)}>
              {t('nav_about')}
            </Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              {t('nav_contact')}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="flex gap-4 items-center mt-4">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="flex items-center gap-1 text-sm"
              >
                <Flag code={lang.flagCode} style={{ width: 20, height: 14, borderRadius: 2 }} />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
