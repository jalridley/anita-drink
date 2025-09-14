import Link from 'next/link';
import {
  FaMixcloud,
  FaInstagram,
  FaFacebook,
  FaBandcamp,
} from 'react-icons/fa6';

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

const Footer = () => {
  return (
    <footer className="-top-14 flex h-8 w-full shrink-0 items-center justify-between gap-2 bg-black px-4 py-6 text-xs font-extrabold text-white sm:flex-row md:text-sm lg:px-6">
      <p className="hidden shrink-0 md:block">
        ©{new Date().getFullYear()} Anita Drink. All rights reserved.
      </p>
      <nav className="flex h-8 w-full justify-center gap-6 sm:gap-8 md:justify-end">
        {socials.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            aria-label={label}
            className="flex h-full w-8 items-center justify-center hover:text-cyan-400 md:w-10"
          >
            {label === 'Mixcloud' ? (
              <Icon className="h-full w-10" />
            ) : (
              <Icon className="h-full w-full" />
            )}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
