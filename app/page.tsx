import Hero from '@/components/Hero';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <main className="px-4 pt-14 lg:px-6">
      <Hero />
      <div className="flex justify-center text-3xl font-extrabold text-white">
        DJ Mixes
      </div>
      <div className="flex justify-center">
        <Carousel className="flex w-2/3 justify-center bg-pink-600 p-4">
          <CarouselContent>
            <CarouselItem>
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-live-mix-at-lunch-box-candy-berlin%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-built-for-speed-mix%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-eye-am-the-dj-mixtape%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-walking-after-midnight-mix%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-16th-valencia-mix%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-berlin-mambo-part-1%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-berlin-mambo-part-2%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-soul-train%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
              <iframe
                width="100%"
                height="120"
                src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-boys-who-are-girls-mix%2F"
              ></iframe>
            </CarouselItem>
            <CarouselItem>
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
      <div></div>
    </main>
  );
}
