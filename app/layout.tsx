import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

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
          <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between space-x-4 bg-pink-600 px-4 py-2 text-3xl font-extrabold text-white shadow-xl lg:px-6">
            <Link className="flex h-full items-center justify-center" href="/">
              <Image
                className="mr-2 h-full w-auto rounded-full border border-black"
                alt="Anita face stencil avatar"
                src={'/anita-stencil-thumb.jpg'}
                width={272}
                height={272}
              />
              <span>Anita Drink</span>
            </Link>
            <nav
              aria-label="Main Navigation"
              className="ml-auto hidden gap-4 sm:gap-6 md:flex"
            >
              <Link href={'/about'}>About</Link>
              <Link href={''}>Gigs</Link>
              <Link href={''}>Merch</Link>
              <Link href={''}>Socials</Link>
              <Link href={''}>Contact</Link>
            </nav>
            <nav aria-label="Main Navigation" className="block md:hidden">
              Hamburger nav small screens with same links
            </nav>
          </header>
          <div className="pt-14">{children}</div>
          <footer className="-top-14 mt-14 flex h-8 w-full shrink-0 flex-col items-center gap-2 bg-black px-4 py-6 text-lg font-extrabold text-white sm:flex-row lg:px-6">
            <p>© 2024 Anita Drink all rights reserved.</p>
            <nav className="flex gap-4 sm:ml-auto sm:gap-6">
              <Link
                href={'https://www.instagram.com/anitadrinklipstick/'}
                target="_blank"
              >
                Instagram Logo
              </Link>
              <Link
                href={'https://www.facebook.com/djanitadrink/'}
                target="_blank"
              >
                Facebook Logo
              </Link>
              <Link href={'https://eatlipstick.bandcamp.com/'} target="_blank">
                Bandcamp Logo
              </Link>
              <Link
                href={'https://www.mixcloud.com/anitadrink/'}
                target="_blank"
              >
                Mixcloud Logo
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
