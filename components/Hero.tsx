import Image from 'next/image';
import Marquee from './Marquee';

const Hero = () => {
  return (
    <section className="relative col-span-1 grid w-full grid-cols-subgrid bg-black pt-4 md:col-span-3 lg:h-[calc(100vh-56px)] lg:items-center lg:pt-0">
      <h1 className="absolute inset-0 flex items-start justify-center md:items-center">
        <Marquee />
      </h1>
      <Image
        className="hidden w-full bg-cyan-400 md:block"
        alt="black and white stencil of Anita Drink's face"
        src={'/Anita_Drink_Stencil_transp.webp'}
        width={1249}
        height={1707}
      />
      <Image
        className="md:from-none md:to-none w-full bg-gradient-to-r from-white from-50% to-lime-400 to-50% md:z-10 md:bg-white md:bg-none"
        alt="black and white stencil of Anita Drink's face"
        src={'/Anita_Drink_Stencil_transp.webp'}
        width={1249}
        height={1707}
      />
      <Image
        className="hidden w-full bg-lime-400 md:block"
        alt="black and white stencil of Anita Drink's face"
        src={'/Anita_Drink_Stencil_transp.webp'}
        width={1249}
        height={1707}
      />
    </section>
  );
};

export default Hero;
