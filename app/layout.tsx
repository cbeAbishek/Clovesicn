import '../styles/globals.css';

import Preloader from '../components/layout/preloader';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { AiChatbot } from '@/components/chatbot';
import BGAudio from '@/components/layout/BGAudio';

export const metadata = {
  title: 'Clover Inc – Premium Industrial Packaging',
  description:
    'Discover Clover Inc’s Autoclave Liners – durable, heat-resistant, and chemical-safe packaging solutions for sterilization and industrial applications.',
  keywords: [
    'Autoclave liners',
    'Sterilization bags',
    'Industrial packaging',
    'Heat resistant liners',
    'Medical autoclave bags',
    'Clover Inc',
    'High temperature liners',
    'Custom autoclave packaging',
  ],
  authors: [{ name: 'Clover Inc', url: 'https://cloverinc.org' }],
  creator: 'Clover Inc',
  publisher: 'Clover Inc',
  openGraph: {
    title: 'Clover Inc | Premium Industrial Packaging',
    description:
      'Explore top-grade autoclave liners from Clover Inc. Ideal for sterilization, industrial, and medical use. Heat resistant and customizable.',
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
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clover Inc | Premium Industrial Packaging',
    description:
      'Discover heat-resistant autoclave liners from Clover Inc – perfect for industrial and medical sterilization.',
    creator: '@cloverinc',
    images: ['https://i.postimg.cc/gJb5q8P1/meta1.jpg'],
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
  },
  metadataBase: new URL('https://cloverinc.org'),
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  applicationName: 'Clover Inc',
  category: 'Industrial Packaging',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  themeColor: '#39b54b',
  colorScheme: 'light',
  viewport: 'width=device-width, initial-scale=1',
  manifest: '/manifest.json',
  other: {
    'og:title': 'Clover Inc | Premium Industrial Packaging',
    'og:description':
      'Explore top-grade autoclave liners from Clover Inc. Ideal for sterilization, industrial, and medical use. Heat resistant and customizable.',
    'og:image': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'og:url': 'https://cloverinc.org/products',
    'og:type': 'website',
    'og:site_name': 'Clover Inc',
    'og:locale': 'en_US',
    'twitter:card': 'summary_large_image',
    'twitter:title': 'Clover Inc | Premium Industrial Packaging',
    'twitter:description':
      'Discover heat-resistant autoclave liners from Clover Inc – perfect for industrial and medical sterilization.',
    'twitter:image': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
    'twitter:site': '@cloverinc',
    'twitter:creator': '@cloverinc',
    'twitter:image:alt': 'Autoclave Liners – Clover Inc',
    'twitter:image:width': '1200',
    'twitter:image:height': '630',
    'twitter:image:type': 'image/jpeg',
    'application-name': 'Clover Inc',
    'theme-color': '#39b54b',
    'referrer': 'origin-when-cross-origin',
    'viewport': 'width=device-width, initial-scale=1',
    'robots': 'index, follow',
    'googlebot': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    'itemprop': 'image',
    'image': 'https://i.postimg.cc/gJb5q8P1/meta1.jpg',
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
