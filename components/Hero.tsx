import Image from 'next/image';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 bg-black pt-4 md:grid-cols-3 md:gap-4 lg:h-[calc(100vh-56px)] lg:items-center lg:gap-12 lg:pt-0">
      <Image
        className="hidden w-full bg-cyan-400 md:block"
        alt="black and white stencil of Anita Drink's face"
        src={'/Anita_Drink_Stencil_transp.png'}
        width={1249}
        height={1707}
      />
      <Image
        className="w-full"
        alt="black and white stencil of Anita Drink's face"
        src={'/Anita_Drink_Stencil.jpg'}
        width={1249}
        height={1707}
      />
      <Image
        className="hidden w-full bg-lime-400 md:block"
        alt="black and white stencil of Anita Drink's face"
        src={'/Anita_Drink_Stencil_transp.png'}
        width={1249}
        height={1707}
      />
    </section>
  );
};

export default Hero;
