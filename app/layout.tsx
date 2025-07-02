import '../styles/globals.css';

import Preloader from '../components/layout/preloader';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { AiChatbot } from '@/components/chatbot';
import BGAudio from '@/components/layout/BGAudio';

export const metadata = {
  title: 'Clover Inc – Premium Industrial Packaging | Autoclave Liners, Sterilization Bags & Custom Solutions',
  description:
    'Discover Clover Inc’s comprehensive range of premium industrial packaging solutions, including durable autoclave liners, heat-resistant sterilization bags, and customizable packaging for medical, laboratory, and industrial applications. Our products ensure safety, compliance, and efficiency for sterilization processes, chemical handling, and high-temperature environments. Trust Clover Inc for innovative, reliable, and sustainable packaging tailored to your needs.',
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
      'Discover Clover Inc’s comprehensive range of premium industrial packaging solutions, including durable autoclave liners, heat-resistant sterilization bags, and customizable packaging for medical, laboratory, and industrial applications. Our products ensure safety, compliance, and efficiency for sterilization processes, chemical handling, and high-temperature environments. Trust Clover Inc for innovative, reliable, and sustainable packaging tailored to your needs.',
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
      },
      {
        url: 'https://i.postimg.cc/7hQw8QwF/meta2.jpg',
        width: 1200,
        height: 630,
        alt: 'Sterilization Bags – Clover Inc',
        type: 'image/jpeg',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clover Inc | Premium Industrial Packaging & Autoclave Liners',
    description:
      'Discover heat-resistant autoclave liners, sterilization bags, and custom packaging from Clover Inc – perfect for industrial, laboratory, and medical sterilization. Safe, reliable, and customizable.',
    creator: '@cloverinc',
    images: [
      'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
      'https://i.postimg.cc/7hQw8QwF/meta2.jpg',
    ],
    site: '@cloverinc',
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
    },
  },
  metadataBase: new URL('https://cloverinc.org'),
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
    other: [
      { rel: 'apple-touch-icon', url: '/icon.png' },
      { rel: 'mask-icon', url: '/icon.png', color: '#39b54b' },
    ],
  },
  applicationName: 'Clover Inc',
  category: 'Industrial Packaging, Medical Packaging, Laboratory Supplies',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  themeColor: '#39b54b',
  colorScheme: 'light',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  manifest: '/manifest.json',
  other: {
    'og:title': 'Clover Inc | Premium Industrial Packaging & Autoclave Liners',
    'og:description':
      'Discover Clover Inc’s comprehensive range of premium industrial packaging solutions, including durable autoclave liners, heat-resistant sterilization bags, and customizable packaging for medical, laboratory, and industrial applications. Our products ensure safety, compliance, and efficiency for sterilization processes, chemical handling, and high-temperature environments. Trust Clover Inc for innovative, reliable, and sustainable packaging tailored to your needs.',
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
    'twitter:card': 'summary_large_image',
    'twitter:title': 'Clover Inc | Premium Industrial Packaging & Autoclave Liners',
    'twitter:description':
      'Discover heat-resistant autoclave liners, sterilization bags, and custom packaging from Clover Inc – perfect for industrial, laboratory, and medical sterilization. Safe, reliable, and customizable.',
    'twitter:image': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
    'twitter:image:alt': 'Autoclave Liners – Clover Inc',
    'twitter:image:width': '1200',
    'twitter:image:height': '630',
    'twitter:image:type': 'image/jpeg',
    'twitter:site': '@cloverinc',
    'twitter:creator': '@cloverinc',
    'application-name': 'Clover Inc',
    'theme-color': '#39b54b',
    'referrer': 'origin-when-cross-origin',
    'viewport': 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
    'robots': 'index, follow',
    'googlebot': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    'itemprop': 'image',
    'image': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
    'author': 'Clover Inc Packaging Team',
    'publisher': 'Clover Inc',
    'category': 'Industrial Packaging, Medical Packaging, Laboratory Supplies',
    'keywords':
      'Autoclave liners, Sterilization bags, Industrial packaging, Heat resistant liners, Medical autoclave bags, Clover Inc, High temperature liners, Custom autoclave packaging, Laboratory packaging, Chemical safe packaging, Sterilization pouches, Medical waste bags, Custom packaging solutions, Sustainable packaging, Industrial liners, Autoclave safe bags, Reusable liners, Disposable autoclave bags, Industrial waste management, Medical packaging supplies, Pharmaceutical packaging, Healthcare packaging, Sterile packaging, High performance liners, Eco-friendly packaging, Custom printed liners, Bulk packaging, Heavy duty liners, Autoclave process supplies, Industrial safety packaging, Premium packaging materials',
    'contact': 'info@cloverinc.org',
    'address': '123 Industrial Park, City, Country',
    'phone': '+1-800-555-0199',
    'site_name': 'Clover Inc',
    'copyright': '© 2024 Clover Inc. All rights reserved.',
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
