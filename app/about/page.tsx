import Card from '@/components/Card';

const AboutPage = () => {
  const cards = [
    {
      title: 'Anita Drink',
      subtitle: 'WARNING!',
      text: "Anita Drink is the most Juan Of a Kind DJ of all time!\n\nAnita Drink began their career as a singer and club DJ in the early 80s and has been a full-time DJ ever since. Their love of music that began at birth has a back bone fusion of Punk's rebellious spirit and Disco's infectious rhythms. \n\nStarting out in clubs and radio they have developed a following around the world known for genre bending sets mixed with a tongue in cheek finesse only Anita could pull off!",
      alt: 'Anita putting makeup powder on face',
      imageSrc: '/anita-makeup.webp',
    },
    {
      subtitle: 'VINYL QUEEN',
      text: 'Their love of deejaying with vinyl is matched only by their reputation in managing energy and telling a story on the dance floor.\n\nThe story started as Juan chooses the DJ name John Chamié to start throwing parties and events melting fashion and his love of music into a passionate mix along with his friends they laid the foundation of a club scene that is still in existence today. As a radio and record pool member, he brought new music to the airwaves and exposed and opened doors for programming new styles of music and breaking new acts in a traditional radio market.\n\nDuring this era, he began nurturing talent while working as producer and creating electronic music, with his co-founders of Terraform records. Formed in the early 90s while working as a producer and label artist Agent Babylon The label grew to have an impressive discography of ambient, trip hop, house, drum & bass and electro artists.',
      alt: 'Anita in pink pulling at hair',
      imageSrc: '/anita-pink.webp',
    },
    {
      subtitle: 'BERLIN',
      text: 'Their passionate career has grown with them from Denver to San Francisco and now based in Berlin. As a fashion designer and owner of the Boutique EXIT Berlin where they work developing their brand based on their love of music and punk soul roots.\n\nAnita Drink is also the singer of the infamous band Eat Lipstick formed in 2008 their explosive shows gained a reputation leading up to their second LP New Wig No Rules! Produced by Peaches it solidified their place in Berlin music herstory.',
      alt: 'Anita in a red dress',
      imageSrc: '/anita-red-dress.webp',
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
