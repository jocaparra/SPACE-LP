import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'BASX — Thermal Infrastructure for Extreme Computing',
  description: 'The thermal layer of the computing stack — on Earth, in orbit, on the Moon.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0E1013] text-[#F3F1EC] font-sans antialiased selection:bg-[#D6C3A3] selection:text-[#0E1013]">
        {children}
      </body>
    </html>
  );
}
