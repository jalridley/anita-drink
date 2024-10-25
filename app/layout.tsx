import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

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
        <div className="flex min-h-[100dvh] flex-col bg-white text-black">
          <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between space-x-4 bg-white bg-opacity-90 px-4 shadow-md lg:px-6">
            <Link className="flex items-center justify-center" href="/">
              LOGO
            </Link>
            <nav
              aria-label="Main Navigation"
              className="ml-auto hidden gap-4 sm:gap-6 md:flex"
            >
              <Link href={''}>About</Link>
              <Link href={''}>Gigs</Link>
              <Link href={''}>Merch</Link>
              <Link href={''}>Socials</Link>
              <Link href={''}>Contact</Link>
            </nav>
            <nav aria-label="Main Navigation" className="block md:hidden">
              Hamburger nav small screens with same links
            </nav>
          </header>
          {children}
          <footer className="-top-14 flex h-8 w-full shrink-0 flex-col items-center gap-2 px-4 py-6 text-sm sm:flex-row md:px-6">
            <p className="text-gray-500">
              © 2024 Anita Drink all rights reserved.
            </p>
            <nav className="flex gap-4 sm:ml-auto sm:gap-6">
              <Link href={''}>Instagram Logo</Link>
              <Link href={''}>Facebook Logo</Link>
              <Link href={''}>Bandcamp Logo</Link>
              <Link href={''}>Mixcloud Logo</Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
