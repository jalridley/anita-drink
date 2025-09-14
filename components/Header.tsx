import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

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

  const socials = [
    {
      href: 'https://www.mixcloud.com/anitadrink/',
      label: 'Mixcloud',
      icon: FaMixcloud,
    },
    {
      href: 'https://www.instagram.com/anitadrinklipstick/',
      label: 'Instagram',
      icon: FaInstagram,
    },
    {
      href: 'https://www.facebook.com/djanitadrink/',
      label: 'Facebook',
      icon: FaFacebook,
    },
    {
      href: 'https://eatlipstick.bandcamp.com/',
      label: 'Bandcamp',
      icon: FaBandcamp,
    },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between bg-pink-600 px-2 py-2 text-lg font-extrabold text-white shadow-xl md:px-4 md:text-xl lg:space-x-4 lg:px-6 lg:text-3xl">
      <Link
        className="flex h-full items-center justify-center"
        href="/"
        aria-label="Home"
      >
        <Image
          className="mr-2 h-full w-auto rounded-full border border-black hover:border-2 hover:border-cyan-400"
          alt="Anita face stencil avatar"
          src={'/anita-stencil-thumb.webp'}
          width={272}
          height={272}
        />
        <span className="shrink-0 hover:text-cyan-400">Anita Drink</span>
      </Link>
      <div className="flex shrink-0 items-center gap-4 lg:gap-6">
        {socials.map(({ href, label, icon: Icon }) => (
          <Link key={label} href={href} target="_blank" aria-label={label}>
            <Icon
              className={twMerge(
                'flex h-full w-full shrink-0 hover:text-cyan-400',
                label === 'Mixcloud' ? 'w-8 md:w-10' : '',
              )}
            />
          </Link>
        ))}
        {/* <Link
          href={'https://www.mixcloud.com/anitadrink/'}
          target="_blank"
          aria-label="Mixcloud"
        >
          <FaMixcloud className="flex h-full w-8 shrink-0 hover:text-cyan-400 md:w-10" />
        </Link>
        <Link
          href={'https://www.instagram.com/anitadrinklipstick/'}
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram className="flex h-full w-full shrink-0 hover:text-cyan-400" />
        </Link>
        <Link
          href={'https://www.facebook.com/djanitadrink/'}
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebook className="flex h-full w-full shrink-0 hover:text-cyan-400" />
        </Link>
        <Link
          href={'https://eatlipstick.bandcamp.com/'}
          target="_blank"
          aria-label="Bandcamp"
        >
          <FaBandcamp className="flex h-full w-full shrink-0 hover:text-cyan-400" />
        </Link> */}

        <nav
          aria-label="Main Navigation"
          className="ml-auto hidden gap-4 md:flex md:items-center lg:gap-6"
        >
          {navItems.map((item) =>
            item.label === 'bookings' ? (
              <Button
                key={item.label}
                asChild
                className="rounded-lg bg-cyan-400 font-extrabold text-gray-800 hover:text-white md:text-xl lg:text-3xl"
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
              <Link
                key={item.label}
                href={item.url}
                target={item.target}
                className="hover:text-cyan-400"
              >
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
