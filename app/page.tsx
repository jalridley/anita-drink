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
  return (
    <main className="grid w-full grid-cols-1 gap-2 px-4 md:gap-4 lg:grid-cols-3 lg:gap-12 lg:px-6">
      <Hero />
      <div className="col-span-3 grid grid-cols-subgrid py-12 md:gap-4 lg:col-start-2 lg:p-0">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <Image
                className="w-full object-contain"
                alt="Anita posing on stage with teddy bears"
                src={'/anita-teddies.jpg'}
                width={756}
                height={756}
              />
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-live-mix-at-lunch-box-candy-berlin%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full object-contain"
                alt="black and white stencil of Anita Drink's face"
                src={'/anita-stencil-square.jpg'}
                width={756}
                height={756}
              />
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-built-for-speed-mix%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full object-contain"
                alt="Anita posing with hands on hips"
                src={'/anita-hip-pose.jpg'}
                width={756}
                height={756}
              />
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-eye-am-the-dj-mixtape%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full object-contain"
                alt="Anita posing pink party streamers"
                src={'/anita-pink.jpg'}
                width={756}
                height={756}
              />
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-walking-after-midnight-mix%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full object-contain"
                alt="Anita posing in a ripped red dress"
                src={'/anita-red-dress.jpg'}
                width={756}
                height={756}
              />
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-16th-valencia-mix%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full object-contain"
                alt="Anita pulling messy blonde hair"
                src={'/anita-hair-pull.jpg'}
                width={756}
                height={756}
              />
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-berlin-mambo-part-1%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full object-contain"
                alt="Anita posing glamourously in a sparkling dress"
                src={'/anita-glamour.jpg'}
                width={756}
                height={756}
              />
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-berlin-mambo-part-2%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full object-contain"
                alt="Anita putting makeup powder on face"
                src={'/anita-makeup.jpg'}
                width={756}
                height={756}
              />
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-soul-train%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full object-contain"
                alt="Anita posing with a wooden ladder"
                src={'/anita-ladder.jpg'}
                width={756}
                height={756}
              />
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-boys-who-are-girls-mix%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <Image
                className="w-full object-contain"
                alt="Anita posing with a white paint splattered background"
                src={'/anita-splatter.jpg'}
                width={756}
                height={756}
              />
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-house-of-exit-tea-dance-feat-lotsa-drink%2F"
              ></iframe>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
