import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import DropdownMenuCustom from '@/components/DropdownMenuCustom';
import { FaBandcamp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaMixcloud } from 'react-icons/fa6';

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
  const navItems = [
    { label: 'about', url: '/about' },
    {
      label: 'merch',
      url: 'https://eatlipstick.bandcamp.com/merch',
      target: '_blank',
    },
    { label: 'contact', url: '/contact' },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-[100dvh] flex-col justify-between bg-black">
          <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between bg-pink-600 px-4 py-2 text-lg font-extrabold text-white shadow-xl md:text-2xl lg:space-x-4 lg:px-6 lg:text-3xl">
            <Link className="flex h-full items-center justify-center" href="/">
              <Image
                className="mr-2 h-full w-auto rounded-full border border-black"
                alt="Anita face stencil avatar"
                src={'/anita-stencil-thumb.jpg'}
                width={272}
                height={272}
              />
              <span className="shrink-0">Anita Drink</span>
            </Link>
            <nav
              aria-label="Main Navigation"
              className="ml-auto hidden gap-4 md:flex lg:gap-6"
            >
              {navItems.map((item) => (
                <Link key={item.label} href={item.url} target={item.target}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav
              aria-label="Main Navigation"
              className="flex items-center md:hidden"
            >
              <DropdownMenuCustom menuItems={navItems} />
            </nav>
          </header>
          <div className="pt-14">{children}</div>
          <footer className="-top-14 mt-14 flex h-8 w-full shrink-0 items-center justify-between gap-2 bg-black px-4 py-6 text-xs font-extrabold text-white sm:flex-row md:text-sm lg:px-6">
            <p className="hidden shrink-0 md:block">
              ©2024 Anita Drink. All rights reserved.
            </p>
            <nav className="flex h-8 w-full justify-center gap-6 sm:gap-8 md:justify-end">
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
              <Link
                href={'https://www.mixcloud.com/anitadrink/'}
                target="_blank"
              >
                <FaMixcloud className="h-full w-full" />
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
