const Marquee = () => {
  return (
    <div className="relative flex h-1/4 items-center overflow-hidden text-[6rem] font-extrabold leading-none text-pink-500 opacity-90 lg:text-[10rem] xl:text-[16rem]">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4">ANITA DRINK&nbsp;</span>
        <span className="mx-4">ANITA DRINK&nbsp;</span>
      </div>

      <div className="absolute animate-marquee2 whitespace-nowrap">
        <span className="mx-4">ANITA DRINK&nbsp;</span>
        <span className="mx-4">ANITA DRINK&nbsp;</span>
      </div>
    </div>
  );
};

export default Marquee;
