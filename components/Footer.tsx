import Link from 'next/link';
import {
  FaMixcloud,
  FaInstagram,
  FaFacebook,
  FaBandcamp,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="-top-14 flex h-8 w-full shrink-0 items-center justify-between gap-2 bg-black px-4 py-6 text-xs font-extrabold text-white sm:flex-row md:text-sm lg:px-6">
      <p className="hidden shrink-0 md:block">
        ©{new Date().getFullYear()} Anita Drink. All rights reserved.
      </p>
      <nav className="flex h-8 w-full justify-center gap-6 sm:gap-8 md:justify-end">
        <Link href={'https://www.mixcloud.com/anitadrink/'} target="_blank">
          <FaMixcloud className="h-full w-10" />
        </Link>
        <Link
          href={'https://www.instagram.com/anitadrinklipstick/'}
          target="_blank"
        >
          <FaInstagram className="h-full w-full" />
        </Link>
        <Link href={'https://www.facebook.com/djanitadrink/'} target="_blank">
          <FaFacebook className="h-full w-full" />
        </Link>
        <Link href={'https://eatlipstick.bandcamp.com/'} target="_blank">
          <FaBandcamp className="h-full w-full" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
