import Image from 'next/image';

const Hero = () => {
  return (
    <section className="col-span-3 grid grid-cols-subgrid bg-black pt-4 lg:h-[calc(100vh-56px)] lg:items-center lg:pt-0">
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
