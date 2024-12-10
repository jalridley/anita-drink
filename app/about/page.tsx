import Card from '@/components/Card';

const AboutPage = () => {
  const cards = [
    {
      title: 'Anita Drink',
      subtitle: 'WARNING!',
      text: 'This DJ Plays music like exploding make-up! Full of color!\nCrossing all genres and genders!\nA passionate selector of over 37 years!',
      alt: 'Anita putting makeup powder on face',
      imageSrc: '/anita-makeup.jpg',
    },
    {
      subtitle: 'VINYL QUEEN',
      text: 'Building a loyal dance floor following around the world, Anita Drink is a performer whose love of all vinyl sets is well known.\nWhen she is not on stage as vocalist in her band Eat Lipstick, she is knee deep in the grooves that keep her busy playing her favorite clubs and parties.\nShe is the brain child of Berlin fashion designer Juan Chamié nee´ John Chamié. DJ career in the early 80´s bringing house and imported dance music to the night clubs of Denver, Colorado.Building a legacy that grew into its own historic dance culture helping to nurture the West Coast sound.',
      alt: 'Anita posing pink party streamers',
      imageSrc: '/anita-pink.jpg',
    },
    {
      subtitle: 'BERLIN',
      text: 'As a founding member of Terraform records he helped nurture and grow the music from this thriving scene that lives to this day.\nReleasing his own productions as Drop Culture, The Vandal.',
      alt: 'Anita posing pink party streamers',
      imageSrc: '/anita-red-dress.jpg',
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
