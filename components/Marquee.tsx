const Marquee = () => {
  return (
    <div className="relative flex h-1/4 items-center overflow-hidden text-[6rem] font-extrabold leading-none text-pink-500 opacity-90 md:text-[6rem] lg:text-[10rem] xl:text-[16rem]">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4">ANITA DRINK&nbsp;</span>
        <span className="mx-4">ANITA DRINK&nbsp;</span>
      </div>

      <div className="animate-marquee2 absolute whitespace-nowrap">
        <span className="mx-4">ANITA DRINK&nbsp;</span>
        <span className="mx-4">ANITA DRINK&nbsp;</span>
      </div>
    </div>
  );
};

export default Marquee;
