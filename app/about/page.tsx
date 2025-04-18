import Card from '@/components/Card';

const AboutPage = () => {
  const cards = [
    {
      title: 'Anita Drink',
      subtitle: 'WARNING!',
      text: (
        <>
          <p>Uncontrollable Urge to Jack Your Body!</p>
          <p>
            Anita Drink, aka Juan Chamié, is a DJ, producer, fashion designer,
            and frontwoman whose career has spanned decades and continents.
            Anita&#39;s lifelong love of sound is fueled by disco&#39;s
            infectious rhythms, punk&#39;s rebellious spirit, and the deep
            grooves of house and Latin beats. Known for her genre-bending sets,
            Anita brings a signature tongue-in-cheek finesse to the decks that
            only she can pull off.
          </p>
        </>
      ),
      alt: 'Anita putting makeup powder on face',
      imageSrc: '/anita-makeup.webp',
      priority: true,
    },
    {
      subtitle: 'VINYL',
      text: (
        <>
          <p>
            Anita&#39;s love of DJing with vinyl is matched only by her ability
            to manage energy and tell a story on the dance floor. Her journey
            began when Juan Chamié—her alter ego—started throwing parties in
            Denver and San Francisco that fused music and fashion into an
            intoxicating mix. Alongside friends, Juan helped lay the foundation
            for a club scene that still thrives today.
          </p>
        </>
      ),
      alt: 'Shelves of vinyl records',
      imageSrc: '/record-collection.webp',
    },
    {
      subtitle: 'ROOTS',
      text: (
        <>
          <p>
            Juan spent his early years in Miami, surrounded by the rhythms of
            Latin music and the hum of his grandmother&#39;s sewing machine.
            These early influences shaped his deep appreciation for both music
            and fashion, two worlds he would later fuse in his creative journey.
          </p>
          <p>
            By the time he moved to Denver in the early eighties, Juan had
            already developed a love for electronic dance music, inspired by
            Frankie Knuckles, David Morales, Masters at Work, and Andrew
            Weatherall.
          </p>
        </>
      ),
      alt: 'Juan Chamié holding records',
      imageSrc: '/juan-holding-records.webp',
    },
    {
      subtitle: 'QUEER',
      text: (
        <>
          <p>
            Learning from queer underground legends like Johnny Contreras and
            Tracey Jones, Juan aka John Chamié honed his skills by grabbing
            every opportunity to jump behind the decks, soon DJing and promoting
            parties at Tracks, Rock Island, and 23 Parish.
          </p>
          <p>
            He co-founded Rhythm Society, a legendary house music party at
            Paradise Garage Denver, which became a sanctuary for dancers and
            house-heads. He also co-founded the Energy Posse, which helped
            create the Denver rave scene of the early nineties.
          </p>
          <p>
            As a radio DJ and record pool member, he played a key role in
            breaking new acts and bringing fresh sounds to the airwaves. Under
            the moniker Agent Babylon, he co-founded Terraform Records in the
            early 90s, pushing out an eclectic mix of ambient, trip-hop, house,
            drum & bass, and electro.
          </p>
        </>
      ),
      alt: 'Juan Chamié smiling',
      imageSrc: '/juan.webp',
    },
    {
      subtitle: 'ALCHEMIST',
      text: (
        <>
          <p>
            In San Francisco, Juan, along with his best friends Rachel and Dee,
            launched Built for Speed, a legendary weekly at Delirium in the
            Mission District, further cementing his reputation as a tastemaker
            and dance floor alchemist. He also sang in several projects
            including Drop Culture and Bethnal Green and Shiver.
          </p>
        </>
      ),
      alt: 'Juan Chamié djing in a club',
      imageSrc: '/juan-pointing.webp',
    },
    {
      subtitle: 'BERLIN',
      text: (
        <>
          <p>
            In 2005, Juan moved to Berlin, where he continued to evolve as an
            artist and creator. By day, he is a fashion designer and owner of{' '}
            <a
              href="https://www.exitberlin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              EXIT Berlin
            </a>
            , a boutique that embodies his deep-rooted love of music and punk
            soul aesthetics. It&#39;s also where you can often find him
            practicing on the turntables, preparing for Anita&#39;s late-night
            sets.
          </p>
          <p>
            Beyond DJing, Anita is the electrifying frontwoman of Eat Lipstick,
            the infamous Berlin-based punk-glam-drag band she co-founded in
            2008. Their explosive performances earned them a fierce reputation.
            Their second LP, <em>New Wig No Rules!</em>, produced by Peaches,
            further cemented their place in Berlin&#39;s music herstory. With a
            new album slated for release this year, Eat Lipstick continues to
            defy norms and captivate audiences worldwide, proving that they are
            truly unstoppable.
          </p>
        </>
      ),
      alt: 'Anita in pink pulling at hair',
      imageSrc: '/anita-pink.webp',
    },
  ];

  return (
    <section className="space-y-12 px-2 md:px-4 lg:space-y-24 lg:px-6">
      {cards.map((card) => (
        <Card
          key={card.alt}
          title={card.title}
          subtitle={card.subtitle}
          text={card.text}
          alt={card.alt}
          imageSrc={card.imageSrc}
        />
      ))}
    </section>
  );
};

export default AboutPage;
