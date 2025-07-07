import '../styles/globals.css';

import Preloader from '../components/layout/preloader';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { AiChatbot } from '@/components/chatbot';
import BGAudio from '@/components/layout/BGAudio';

export const metadata = {
  title: 'Clover Inc – Premium Industrial Packaging | Autoclave Liners, Sterilization Bags & Custom Solutions',
  description:
    'Discover Clover Inc s comprehensive range of premium industrial packaging solutions, including durable autoclave liners, heat-resistant sterilization bags, and customizable packaging for medical, laboratory, and industrial applications. Our products ensure safety, compliance, and efficiency for sterilization processes, chemical handling, and high-temperature environments. Trust Clover Inc for innovative, reliable, and sustainable packaging tailored to your needs.',
  keywords: [
    'Autoclave liners',
    'Sterilization bags',
    'Industrial packaging',
    'Heat resistant liners',
    'Medical autoclave bags',
    'Clover Inc',
    'High temperature liners',
    'Custom autoclave packaging',
    'Laboratory packaging',
    'Chemical safe packaging',
    'Sterilization pouches',
    'Medical waste bags',
    'Custom packaging solutions',
    'Sustainable packaging',
    'Industrial liners',
    'Autoclave safe bags',
    'Reusable liners',
    'Disposable autoclave bags',
    'Industrial waste management',
    'Medical packaging supplies',
    'Pharmaceutical packaging',
    'Healthcare packaging',
    'Sterile packaging',
    'High performance liners',
    'Eco-friendly packaging',
    'Custom printed liners',
    'Bulk packaging',
    'Heavy duty liners',
    'Autoclave process supplies',
    'Industrial safety packaging',
    'Premium packaging materials',
  ],
  authors: [
    { name: 'Clover Inc', url: 'https://cloverinc.org' },
    { name: 'Clover Inc Packaging Team', url: 'https://cloverinc.org/about' },
  ],
  creator: 'Clover Inc',
  publisher: 'Clover Inc',
  openGraph: {
    title: 'Clover Inc | Premium Industrial Packaging & Autoclave Liners',
    description:
      'Discover Clover Inc s comprehensive range of premium industrial packaging solutions, including durable autoclave liners, heat-resistant sterilization bags, and customizable packaging for medical, laboratory, and industrial applications. Our products ensure safety, compliance, and efficiency for sterilization processes, chemical handling, and high-temperature environments. Trust Clover Inc for innovative, reliable, and sustainable packaging tailored to your needs.',
    url: 'https://cloverinc.org/products',
    siteName: 'Clover Inc',
    locale: 'en_US',
    images: [
      {
        url: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
        width: 1200,
        height: 630,
        alt: 'Autoclave Liners – Clover Inc',
        type: 'image/jpeg',
        secureUrl: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
      },
      {
        url: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sterilization Bags – Clover Inc',
        type: 'image/jpeg',
        secureUrl: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
      },
    ],
    type: 'website',
    audio: {
      url: 'https://cloverinc.org/audio/company-introduction.mp3',
      secureUrl: 'https://cloverinc.org/audio/company-introduction.mp3',
      type: 'audio/mpeg',
    },
    videos: [
      {
        url: 'https://cloverinc.org/video/product-showcase.mp4',
        secureUrl: 'https://cloverinc.org/video/product-showcase.mp4',
        type: 'video/mp4',
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clover Inc | Premium Industrial Packaging & Autoclave Liners',
    description:
      'Discover heat-resistant autoclave liners, sterilization bags, and custom packaging from Clover Inc – perfect for industrial, laboratory, and medical sterilization. Safe, reliable, and customizable.',
    creator: '@cloverinc',
    images: [
      {
        url: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
        alt: 'Autoclave Liners – Clover Inc Premium Solutions',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
        alt: 'Sterilization Bags – Clover Inc Premium Solutions',
        width: 1200,
        height: 630,
      },
    ],
    site: '@cloverinc',
    app: {
      name: 'Clover Inc',
      url: {
        iphone: 'https://cloverinc.org',
        ipad: 'https://cloverinc.org',
      },
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://cloverinc.org/products',
    languages: {
      'en-US': 'https://cloverinc.org/products',
      'es-ES': 'https://cloverinc.org/es/productos',
      'fr-FR': 'https://cloverinc.org/fr/produits',
      'de-DE': 'https://cloverinc.org/de/produkte',
    },
    types: {
      'application/rss+xml': 'https://cloverinc.org/rss/products.xml',
    },
  },
  metadataBase: new URL('https://cloverinc.org'),
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon-180x180.png' },
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#39b54b' },
    ],
  },
  applicationName: 'Clover Inc',
  category: 'Industrial Packaging, Medical Packaging, Laboratory Supplies',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  themeColor: '#39b54b',
  colorScheme: 'light dark',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    bing: 'msvalidate.01:verification-code',
    me: ['info@cloverinc.org', '@cloverinc'],
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  appleWebApp: {
    capable: true,
    title: 'Clover Inc',
    statusBarStyle: 'black-translucent',
  },
  other: {
    // Enhanced OpenGraph tags for WhatsApp preview
    'og:title': 'Clover Inc | Premium Industrial Packaging & Autoclave Liners',
    'og:description': 'Discover Clover Incs comprehensive range of premium industrial packaging solutions for medical, laboratory, and industrial applications. Safe, reliable, and customizable products for all your packaging needs.',
    'og:image': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'og:image:alt': 'Autoclave Liners – Clover Inc',
    'og:image:secure_url': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
    'og:url': 'https://cloverinc.org/products',
    'og:type': 'website',
    'og:site_name': 'Clover Inc',
    'og:locale': 'en_US',
    'og:video': 'https://cloverinc.org/video/product-showcase.mp4',
    'og:video:secure_url': 'https://cloverinc.org/video/product-showcase.mp4',
    'og:video:type': 'video/mp4',
    'og:video:width': '1280',
    'og:video:height': '720',
    
    // Twitter enhanced tags
    'twitter:card': 'summary_large_image',
    'twitter:title': 'Clover Inc | Premium Industrial Packaging & Autoclave Liners',
    'twitter:description': 'Discover heat-resistant autoclave liners, sterilization bags, and custom packaging from Clover Inc – perfect for industrial, laboratory, and medical sterilization.',
    'twitter:image': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
    'twitter:image:alt': 'Autoclave Liners – Clover Inc',
    'twitter:image:width': '1200',
    'twitter:image:height': '630',
    'twitter:image:type': 'image/jpeg',
    'twitter:site': '@cloverinc',
    'twitter:creator': '@cloverinc',
    'twitter:label1': 'Industry',
    'twitter:data1': 'Industrial Packaging',
    'twitter:label2': 'Products',
    'twitter:data2': 'Autoclave Liners, Sterilization Bags',
    
    // WhatsApp specific
    'whatsapp-title': 'Clover Inc - Premium Industrial Packaging Solutions',
    'whatsapp-description': 'Discover our premium industrial packaging solutions for medical, laboratory and industrial applications',
    
    // General meta
    'application-name': 'Clover Inc',
    'theme-color': '#39b54b',
    'referrer': 'origin-when-cross-origin',
    'viewport': 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
    'robots': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    'googlebot': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    'itemprop': 'image',
    'image': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
    'author': 'Clover Inc Packaging Team',
    'publisher': 'Clover Inc',
    'category': 'Industrial Packaging, Medical Packaging, Laboratory Supplies',
    'keywords': 'Autoclave liners, Sterilization bags, Industrial packaging, Heat resistant liners, Medical autoclave bags, Clover Inc',
    
    // Contact information
    'contact': 'info@cloverinc.org',
    'address': '123 Industrial Park, City, Country',
    'phone': '+1-800-555-0199',
    'email': 'info@cloverinc.org',
    'site_name': 'Clover Inc',
    'copyright': '© 2024 Clover Inc. All rights reserved.',
    
    // GEO location tags
    'geo.region': 'US-NY',
    'geo.placename': 'New York City',
    'geo.position': '40.7128;-74.0060',
    'ICBM': '40.7128, -74.0060',
    'DC.title': 'Clover Inc | Premium Industrial Packaging',
    
    // Apple specific
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Clover Inc',
    
    // Microsoft specific
    'msapplication-TileColor': '#39b54b',
    'msapplication-TileImage': '/mstile-144x144.png',
    'msapplication-config': '/browserconfig.xml',
    
    // Facebook specific
    'fb:app_id': '123456789012345',
    'fb:pages': '987654321098765',
    
    // Additional languages
    'content-language': 'en, es, fr, de',
    
    // Structured data hints
    'schema:type': 'Organization',
    'schema:name': 'Clover Inc',
    'schema:url': 'https://cloverinc.org',
    'schema:logo': 'https://cloverinc.org/logo.png',
    'schema:description': 'Premium Industrial Packaging Solutions',
    'schema:sameAs': 'https://twitter.com/cloverinc, https://facebook.com/cloverinc',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#39b54b" />
        <link rel="icon" href="/icon.png" />
      </head>
      <body>
        <Preloader />
        <Header />
        <AiChatbot />
        <BGAudio />
        <div className="min-h-screen flex flex-col mt-[60px]" >{children}</div>
        <Footer />
      </body>
    </html>
  );
}
