import Image from 'next/image';

const Vinyl = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gray-900 p-8 lg:h-60 lg:w-60">
        <Image
          className="absolute h-16 w-16 rounded-full lg:h-20 lg:w-20"
          alt="Cartoon Vinyl Record"
          src={'/eat-lipstick-logo.jpg'}
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default Vinyl;
