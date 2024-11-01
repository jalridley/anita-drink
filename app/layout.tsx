import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import { FaBandcamp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaMixcloud } from 'react-icons/fa6';
import Header from '@/components/Header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Anita Drink',
  description: 'Anita Drink drag queen DJ artist page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-[100dvh] flex-col justify-between bg-black">
          <Header />
          <div className="pt-14">{children}</div>
          <footer className="-top-14 mt-14 flex h-8 w-full shrink-0 items-center justify-between gap-2 bg-black px-4 py-6 text-xs font-extrabold text-white sm:flex-row md:text-sm lg:px-6">
            <p className="hidden shrink-0 md:block">
              ©2024 Anita Drink. All rights reserved.
            </p>
            <nav className="flex h-8 w-full justify-center gap-6 sm:gap-8 md:justify-end">
              <Link
                href={'https://www.mixcloud.com/anitadrink/'}
                target="_blank"
              >
                <FaMixcloud className="h-full w-10" />
              </Link>
              <Link
                href={'https://www.instagram.com/anitadrinklipstick/'}
                target="_blank"
              >
                <FaInstagram className="h-full w-full" />
              </Link>
              <Link
                href={'https://www.facebook.com/djanitadrink/'}
                target="_blank"
              >
                <FaFacebook className="h-full w-full" />
              </Link>
              <Link href={'https://eatlipstick.bandcamp.com/'} target="_blank">
                <FaBandcamp className="h-full w-full" />
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
