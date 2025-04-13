// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'San Service – הניידת שמחזירה אותך לדרך',
  description: 'מכונאי נייד 24/7 באיזור הדרום. שירות מהיר, מקצועי ואמין עד הבית או הדרך.',
  keywords: ['מכונאי נייד', 'שירות רכב', 'רכב נתקע', 'סאן סרוויס', 'שירות בדרכים', 'San Service'],
  metadataBase: new URL('https://sanservice.co.il'), // Replace with your real domain
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'San Service – הניידת שמחזירה אותך לדרך',
    description: 'מכונאי נייד 24/7 באיזור הדרום.',
    url: 'https://sanservice.co.il',
    siteName: 'San Service',
    type: 'website',
    locale: 'he_IL',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'San Service – הניידת שמחזירה אותך לדרך',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Service – הניידת שמחזירה אותך לדרך',
    description: 'מכונאי נייד 24/7 באיזור הדרום.',
    images: ['/og-image.jpg'],
  },
  // ✅ Add the Apple web app title
  other: {
    'apple-mobile-web-app-title': 'San Service',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alef:wght@400;700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* ✅ Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "San Service",
              "image": "https://sanservice.co.il/og-image.png",
              "url": "https://sanservice.co.il",
              "telephone": "+972-50-235-8297",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bat Yam",
                "addressCountry": "IL"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Ashdod and Central Districts"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "$$",
              "description": "מכונאי נייד באיזור המרכז – שירות מהיר, מקצועי ואמין עד הבית או הדרך.",
              "sameAs": [
                "https://www.facebook.com/sanservice.il",
                "https://www.instagram.com/sanservice.il"
              ]
            })
          }}
        />

        {/* ✅ FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "באילו אזורים אתם מספקים שירות?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "אנחנו מגיעים עד אליך באשדוד וובמרכז. השירות ניתן בהתאם לזמינות."
                  }
                },
                {
                  "@type": "Question",
                  "name": "האם אתם זמינים בכל שעות היממה?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "אנחנו זמינים 24 שעות, 6 ימים בשבוע (למעט שבת)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "אילו סוגי תיקונים אתם מבצעים?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "אנחנו מטפלים בבעיות חשמל, התנעה, מצבר, תיקוני דרך ותקלות מכניות נפוצות."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <body>{children}</body>
    </html>
  )
}
