import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'GoGlobalEd - Навчання за кордоном',
  description: 'Допомагаємо вступити у ВНЗ США, Канади, Європи. З документами, візою і адаптацією.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${inter.variable}`}>
      <body className="bg-off-white min-h-screen font-sans">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
} 