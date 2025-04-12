'use client'

import { Wrench, Fuel, ShieldCheck, KeyRound, Zap } from 'lucide-react'
import { useSafeTranslation } from '@/i18n'
import Image from 'next/image'

export default function ServicesSection() {
  const { t, ready } = useSafeTranslation()
  if (!ready) return null

  const services = [
    { icon: <Zap size={24} />, title: t('service_starter') },
    { icon: <Wrench size={24} />, title: t('service_alternator') },
    { icon: <Fuel size={24} />, title: t('service_fuel') },
    { icon: <ShieldCheck size={24} />, title: t('service_insurance') },
    { icon: <KeyRound size={24} />, title: t('service_coder') },
  ]

  return (
    <section
      id="services"
      className="w-full py-20 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Services List */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[var(--color-brand-primary)] mb-8">
            {t('services_title')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition"
              >
                <div className="text-[var(--color-brand-accent)]">{service.icon}</div>
                <p className="font-medium text-gray-800">{service.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-300 bg-black/10">
          <Image
            src="/video-placeholder.png"
            alt="Video Placeholder"
            fill
            className="object-cover opacity-90"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 rounded-full p-4 hover:bg-white/90 transition cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-[var(--color-brand-primary)]"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 4.278a.5.5 0 0 1 .79-.407l4.5 3.222a.5.5 0 0 1 0 .814l-4.5 3.222A.5.5 0 0 1 6 10.722V4.278z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
