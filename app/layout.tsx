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
        url: 'https://raw.githubusercontent.com/cbeAbishek/Clovesicn/refs/heads/main/public/meta1.jpg?token=GHSAT0AAAAAADEYCPKLR5OS6PTLSZ3NR2XS2DC5QTA',
        width: 1200,
        height: 630,
        alt: 'Autoclave Liners – Clover Inc',
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
    images: ['https://raw.githubusercontent.com/cbeAbishek/Clovesicn/refs/heads/main/public/meta1.jpg?token=GHSAT0AAAAAADEYCPKLR5OS6PTLSZ3NR2XS2DC5QTA'],
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
