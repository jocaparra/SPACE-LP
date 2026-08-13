import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { I18nProvider } from '../lib/i18n';
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
  title: 'AETHER — Rejeição Térmica Orbital',
  description: 'Programa de pesquisa em rejeição térmica orbital por cortina de gotículas (Liquid Droplet Radiator).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0E1013] text-[#F3F1EC] font-sans antialiased selection:bg-[#D6C3A3] selection:text-[#0E1013]">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
