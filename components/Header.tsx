import Link from 'next/link';
import Image from 'next/image';

import {
  FaMixcloud,
  FaInstagram,
  FaFacebook,
  FaBandcamp,
} from 'react-icons/fa6';
import DropdownMenuCustom from './DropdownMenuCustom';
import { Button } from './ui/button';

const Header = () => {
  const navItems = [
    { label: 'about', url: '/about' },
    {
      label: 'merch',
      url: 'https://eatlipstick.bandcamp.com/merch',
      target: '_blank',
    },
    { label: 'bookings', url: '/bookings' },
  ];
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between bg-pink-600 px-2 py-2 text-lg font-extrabold text-white shadow-xl md:px-4 md:text-xl lg:space-x-4 lg:px-6 lg:text-3xl">
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
      <div className="flex shrink-0 items-center gap-4 lg:gap-6">
        <Link href={'https://www.mixcloud.com/anitadrink/'} target="_blank">
          <FaMixcloud className="flex h-full w-8 shrink-0 md:w-10" />
        </Link>
        <Link
          href={'https://www.instagram.com/anitadrinklipstick/'}
          target="_blank"
        >
          <FaInstagram className="flex h-full w-full shrink-0" />
        </Link>
        <Link href={'https://www.facebook.com/djanitadrink/'} target="_blank">
          <FaFacebook className="flex h-full w-full shrink-0" />
        </Link>
        <Link href={'https://eatlipstick.bandcamp.com/'} target="_blank">
          <FaBandcamp className="flex h-full w-full shrink-0" />
        </Link>

        <nav
          aria-label="Main Navigation"
          className="ml-auto hidden gap-4 md:flex md:items-center lg:gap-6"
        >
          {navItems.map((item) =>
            item.label === 'bookings' ? (
              <Button
                key={item.label}
                asChild
                className="rounded-lg bg-cyan-400 font-extrabold md:text-xl lg:text-3xl"
                size="lg"
                variant="default"
              >
                <Link
                  href={item.url}
                  target={item.target}
                  className="flex items-center justify-center"
                >
                  {item.label}
                </Link>
              </Button>
            ) : (
              <Link key={item.label} href={item.url} target={item.target}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <nav
          aria-label="Main Navigation"
          className="flex items-center md:hidden"
        >
          <DropdownMenuCustom menuItems={navItems} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
