import '../styles/globals.css';
import type { Metadata } from 'next';

import Preloader from '../components/layout/preloader';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { AiChatbot } from '@/components/chatbot';

export const metadata: Metadata = {
  title: 'Cloves INC ',
  description: 'Meta Description for Cloves INC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Preloader />
      <Header />
      <AiChatbot />
      {/* Main content area */}
      <div className="min-h-screen flex flex-col">
        {children}
      </div>
      <Footer />
      </body>
    </html>
  );
}