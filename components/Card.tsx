import Image from 'next/image';
import { GiThunderSkull } from 'react-icons/gi';

type CardProps = {
  title?: string;
  subtitle?: string;
  text: string;
  alt: string;
  imageSrc: string;
};

const Card = ({ title, subtitle, text, alt, imageSrc }: CardProps) => {
  return (
    <article className="grid w-full overflow-hidden lg:h-[calc(100vh-56px)] lg:grid-cols-2">
      <div className="order-2 flex flex-col justify-center p-2 lg:order-1 lg:p-8">
        <h2 className="flex text-[3.5rem] font-semibold text-cyan-400 md:text-[6rem] lg:text-[8rem] 2xl:text-[15rem]">
          {title}
        </h2>
        <h3 className="flex items-center space-x-2 py-2 text-3xl font-semibold text-pink-600 md:space-x-4 md:py-4 md:text-5xl xl:text-7xl">
          <GiThunderSkull />
          <span>{subtitle}</span>
          <GiThunderSkull />
        </h3>
        <p className="w-full whitespace-pre-wrap text-xl leading-relaxed text-amber-50 md:text-2xl lg:w-3/4 lg:text-3xl">
          {text}
        </p>
      </div>
      <Image
        alt={alt}
        src={imageSrc}
        width={1249}
        height={1707}
        className="order-1 aspect-square h-full w-full object-cover lg:order-2"
      />
    </article>
  );
};

export default Card;
