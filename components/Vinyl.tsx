import Image from 'next/image';

const Vinyl = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        className="animate-rotate h-40 w-40 rounded-full lg:h-60 lg:w-60"
        alt="Cartoon Vinyl Record"
        src={'/vinyl-eat-lipstick.webp'}
        width={700}
        height={700}
      />
    </div>
  );
};

export default Vinyl;
