import Hero from '@/components/Hero';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  const carouselItems = [
    {
      alt: 'Anita posing on stage with teddy bears',
      imageSrc: '/anita-teddies.jpg',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-live-mix-at-lunch-box-candy-berlin%2F',
    },
    {
      alt: "black and white stencil of Anita Drink's face",
      imageSrc: '/anita-stencil-square.jpg',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-built-for-speed-mix%2F',
    },
    {
      alt: 'Anita posing with hands on hips',
      imageSrc: '/anita-hip-pose.jpg',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-eye-am-the-dj-mixtape%2F',
    },
    {
      alt: 'Anita posing pink party streamers',
      imageSrc: '/anita-pink.jpg',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-walking-after-midnight-mix%2F',
    },
    {
      alt: 'Anita posing in a ripped red dress',
      imageSrc: '/anita-red-dress.jpg',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-16th-valencia-mix%2F',
    },
    {
      alt: 'Anita pulling messy blonde hair',
      imageSrc: '/anita-hair-pull.jpg',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-berlin-mambo-part-1%2F',
    },
    {
      alt: 'Anita posing glamourously in a sparkling dress',
      imageSrc: '/anita-glamour.jpg',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-berlin-mambo-part-2%2F',
    },
    {
      alt: 'Anita putting makeup powder on face',
      imageSrc: '/anita-makeup.jpg',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-soul-train%2F',
    },
    {
      alt: 'Anita posing with a wooden ladder',
      imageSrc: '/anita-ladder.jpg',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-boys-who-are-girls-mix%2F',
    },
    {
      alt: 'Anita posing with a white paint splattered background',
      imageSrc: '/anita-splatter.jpg',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-house-of-exit-tea-dance-feat-lotsa-drink%2F',
    },
  ];

  return (
    <main className="grid w-full grid-cols-1 gap-12 overflow-hidden px-2 md:grid-cols-3 md:px-4 lg:px-6">
      <Hero />
      <section className="col-span-1 grid max-w-full grid-cols-subgrid object-contain px-16 py-12 md:col-span-2 md:col-start-2 md:px-0 lg:p-0">
        <Carousel>
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.alt}>
                <Image
                  className="w-full"
                  alt={item.alt}
                  src={item.imageSrc}
                  width={756}
                  height={756}
                />
                <iframe width="100%" height="120" src={item.playerSrc}></iframe>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
