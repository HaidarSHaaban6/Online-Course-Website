import SectionTitle from "../ui/SectionTitle";
import AboutUsCard from "../ui/AboutUsCard";
import { AboutCard } from "../data/about";

interface AboutSectionProps {
  titleSec: string;
  descriptionSec: string;
  cards: AboutCard[];
}

const AboutUsSection = ({ titleSec, descriptionSec, cards }: AboutSectionProps) => {
  return (
    <div className="mt-[130px]">
      <SectionTitle title={titleSec} description={descriptionSec}  />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] ">
        {cards.map((card, index) => (
          <AboutUsCard
            key={index}
            icon={card.icon}
            cardtitle={card.cardtitle}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
