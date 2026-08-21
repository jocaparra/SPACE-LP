import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { I18nProvider } from '../lib/i18n';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SPES — Space Systems Engineering Solutions',
  description: 'A camada térmica da computação orbital. Pesquisa e desenvolvimento em rejeição térmica espacial.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={spaceGrotesk.variable}>
      <body className="bg-[#262829] text-[#F0F0EB] font-sans antialiased selection:bg-[#FF3B20] selection:text-[#F0F0EB]">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
