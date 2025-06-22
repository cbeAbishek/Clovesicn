import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'EcoTech Solutions - Sustainable Products for Healthcare, Industrial & Commercial',
  description: 'Leading provider of high-quality, sustainable products for healthcare, industrial, and commercial sectors worldwide. Specializing in autoclave liners, textile solutions, and eco-friendly packaging.',
  keywords: 'sustainable products, healthcare solutions, industrial packaging, autoclave liners, textile solutions, eco-friendly, commercial textiles',
  authors: [{ name: 'EcoTech Solutions' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <meta name="theme-color" content="#60b257" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}