import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio malucena.dev',
  description: 'Development with Next.js and TypeScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-peach-600 ${manrope.className}`}>
        <NextTopLoader color="#5700FF" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
