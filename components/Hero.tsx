import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex h-[calc(100vh-56px)] w-full items-center justify-between bg-black px-4 lg:px-6">
      <Image
        className="h-[1000px] w-auto bg-cyan-400"
        alt="black and white stencil of Anita Drink's face"
        src={'/Anita_Drink_Stencil_transp.png'}
        width={1249}
        height={1707}
      />
      <Image
        className="h-[1000px] w-auto"
        alt="black and white stencil of Anita Drink's face"
        src={'/Anita_Drink_Stencil.jpg'}
        width={1249}
        height={1707}
      />
      <Image
        className="h-[1000px] w-auto bg-lime-400"
        alt="black and white stencil of Anita Drink's face"
        src={'/Anita_Drink_Stencil_transp.png'}
        width={1249}
        height={1707}
      />
    </section>
  );
};

export default Hero;
