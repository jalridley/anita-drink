import Image from 'next/image';

const Hero = () => {
  return (
    <section className="grid h-[calc(100vh-56px)] w-full grid-cols-3 gap-2 bg-black py-4 md:gap-4 lg:items-center lg:gap-12">
      <Image
        className="w-full bg-cyan-400"
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
        className="w-full bg-lime-400"
        alt="black and white stencil of Anita Drink's face"
        src={'/Anita_Drink_Stencil_transp.png'}
        width={1249}
        height={1707}
      />
    </section>
  );
};

export default Hero;
