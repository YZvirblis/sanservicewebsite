// src/components/Footer.tsx
'use client'

import Link from 'next/link'
import { useSafeTranslation } from '@/i18n'
import { Phone, Mail, Clock, Facebook, Instagram, MapPin } from 'lucide-react'

export default function Footer() {
  const { t, i18n } = useSafeTranslation()
  const isRTL = i18n.language === 'he'

  return (
    <footer className="bg-[var(--color-brand-primary)] text-white py-12 px-6 sm:px-12">
      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ${
          isRTL ? 'text-right' : 'text-left'
        }`}
      >
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">San Service</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            {t('footer_description')}
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="font-semibold text-lg">{t('footer_contact')}</h4>
          <div className="flex items-center gap-2">
            <Phone size={16} /> <a href="tel:0502358297" className="hover:underline">050-235-8297</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} /> <a href="mailto:info@sanservice.co.il" className="hover:underline">info@sanservice.co.il</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} /> <span>{t('footer_hours')}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} /> <span>{t('footer_location')}</span>
          </div>
        </div>

        {/* Quick Links & Social */}
        <div className="space-y-3">
          <h4 className="font-semibold text-lg">{t('footer_links')}</h4>
          <nav className="flex flex-col gap-1 text-sm">
            <Link href="#hero" scroll>{t('nav_home')}</Link>
            <Link href="#services" scroll>{t('nav_services')}</Link>
            <Link href="#about" scroll>{t('nav_about')}</Link>
            <Link href="#contact" scroll>{t('nav_contact')}</Link>
          </nav>

          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="hover:text-[var(--color-brand-accent)] transition" />
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="hover:text-[var(--color-brand-accent)] transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-sm text-white/60">
        © {new Date().getFullYear()} San Service. {t('footer_rights')}
      </div>
    </footer>
  )
}
