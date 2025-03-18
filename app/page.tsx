import Hero from '@/components/Hero';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Vinyl from '@/components/Vinyl';

export default function Home() {
  const carouselItems = [
    {
      alt: 'Anita posing on stage with teddy bears',
      imageSrc: '/anita-teddies.webp',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-live-mix-at-lunch-box-candy-berlin%2F',
      date: '10.10.24 Lunch Box Candy',
      description:
        "All vinyl D.J. set captured live at Berlin's infamous Lunch Box Candy party. Featuring rare and new tracks by Steve Monite, Tony Touch, Domo Domo and Talking Heads.Anita packing the floor! With her high drama party music mix!",
    },
    {
      alt: "black and white stencil of Anita Drink's face",
      imageSrc: '/anita-stencil-square.webp',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-built-for-speed-mix%2F',
      date: '05.05.20',
      description:
        "This mix is quintessential Anita Drink at her best ! Recorded for San Francisco's legendary Built for Speed party at Delirium in the Mission at 16 & Valencia. This Thursday weekly ran for 11 years! featuring tracks inspired and played by her co-founders DJ sisters Platform Whore & Fashion Hooker. Get ready to strap in for a wild ride! Featuring tracks by The Monkees, Loretta Lynn, Adult, N.W.A. and Gary Numan all groove within Anita's magic sonic sofrito!",
    },
    {
      alt: 'Anita posing with hands on hips',
      imageSrc: '/anita-hip-pose.webp',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-eye-am-the-dj-mixtape%2F',
      date: '12.01.99',
      description:
        "Anita Drink's Eye Am The DJ Mixtape.Anita unchained! And coming hot! All vinyl sound track of punk, rock and trash! Recorded live! At a house-party birthday in San Francisco on two turntables with attitude! A drive thru of adventure! Starring the likes of Motörhead, The Doors, U.F.O and the Smiths",
    },
    {
      alt: 'Anita posing pink party streamers',
      imageSrc: '/anita-pink.webp',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-walking-after-midnight-mix%2F',
      date: 'Summer 1997',
      description:
        'From start to finish Anita Drink takes us on an all-vinyl neon trip down to New Wave town! This party night mix is full of unexpected surprises and classics by Fad Gadget, Jesus & the Mary Chain, Visage and Grace Jones. Lose control! And turn up the volume!',
    },
    {
      alt: 'Anita posing in a ripped red dress',
      imageSrc: '/anita-red-dress.webp',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-16th-valencia-mix%2F',
      date: '25.05.02',
      description:
        'A slinky late-night in the Mission District at Built For Speed On the turn tables Anita Drink drops her vinyl treasure on a hungry dance-floor of devotees waiting to twist away the blues with gems from Anna Domino, Nicodemus, Jayne County Legowelt and Loleatta Holloway.',
    },
    {
      alt: 'Anita pulling messy blonde hair',
      imageSrc: '/anita-hair-pull.webp',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-berlin-mambo-part-1%2F',
      date: '27.01.16',
      description:
        "Recording Live at one of Anita's D.J. Residency at Berlin's infamous Das Hotel This mix is a special two-part adventure diving deep into underground disco, house and garage classics! Get ready to move with Chemise, Fela Kuti, the Residents and Adonis just to get the party started.",
    },
    {
      alt: 'Anita posing glamourously in a sparkling dress',
      imageSrc: '/anita-glamour.webp',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-berlin-mambo-part-2%2F',
      date: '14.02.17',
      description:
        "Anita Drink's Berlin Mambo Part 2. A special two-part adventure diving deep into underground disco, house and garage classics! Get ready to move with Chemise, Fela Kuti, the Residents and Adonis just to get the party started.",
    },
    {
      alt: 'Anita putting makeup powder on face',
      imageSrc: '/anita-makeup.webp',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-soul-train%2F',
      date: '13.06.12',
      description:
        "All aboard!! Anita Drink driving us down the tracks into a passion play of live vinyl packed with soulful jams recorded live at White Trash Fast Food, a legendary Berlin haunt that was home to some of the city's amazing talent and DJ's. Expect the unexpected in this mix featuring the sounds of Bowie, Elvis, Ladytron, Bim Sherman and the Dead Boys.",
    },
    {
      alt: 'Anita posing with a wooden ladder',
      imageSrc: '/anita-ladder.webp',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-boys-who-are-girls-mix%2F',
      date: '2018',
      description:
        'Recorded at Rodeo club, Berlin. Turn up the volume! Lights! Action! Anita! Hot grooves fill the air with soul, disco, rare groove and modern classics that keep the fever going on the dance floor! Featuring tracks by Scissor Sisters, Blondie, Massive Attack and Joyce Sims.',
    },
    {
      alt: 'Anita posing with a white paint splattered background',
      imageSrc: '/anita-splatter.webp',
      playerSrc:
        'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fanitadrink%2Fanita-drink-presents-house-of-exit-tea-dance-feat-lotsa-drink%2F',
      date: 'Summer 2021',
      description:
        '"Hey there! Hi there! Heaux there!" Welcome to an all vinyl mix at the peak of Pandemic times..with a Berlin attitudeIsolation could not stop Anita Drink & her co-HortsLotsa Drink, Mad Kate and a cast of characters like Evil Disco captured in this gorgeous sonic portrait of that time when we all had to stay home and watch streams and dream of a time we could dance together again.This mix captures the voices ,comedy, energy and all the Snap! Crackle! & Pop! of that hilarious day of fun at House of Exit. Includes music by Hyenaz, Electro Drones, Lil\'Louis, Whitney Houston, and Stevie Knicks.',
    },
  ];

  return (
    <main className="grid w-full grid-cols-1 overflow-hidden px-2 md:grid-cols-3 md:px-4 lg:px-6 xl:gap-12">
      <Hero />
      <div className="col-span-1 grid max-w-full grid-cols-subgrid object-contain px-16 pt-8 md:col-span-2 md:col-start-2 md:px-0 lg:p-0 xl:pt-12">
        <Vinyl />
      </div>
      <section className="col-span-1 grid max-w-full grid-cols-subgrid object-contain px-16 py-8 md:col-span-2 md:col-start-2 md:px-0 lg:p-0 xl:py-12">
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
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="lg:text-md flex cursor-pointer items-center justify-between bg-white p-4 text-xs font-bold text-gray-600 hover:bg-gray-100 md:text-sm">
                      {item.date}
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 md:h-8 md:w-8">
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <div className="text-sm font-bold">{item.date}</div>
                      <div className="text-sm">{item.description}</div>
                    </div>
                  </PopoverContent>
                </Popover>

                <iframe
                  width="100%"
                  height="120"
                  src={item.playerSrc}
                  data-cookieless="true"
                ></iframe>
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
