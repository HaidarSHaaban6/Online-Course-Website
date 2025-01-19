import SectionTitle from "../ui/SectionTitle";
import CustomButton from "../ui/CustomButton";
import { useState } from "react";
import { testimonials } from "../data/testimonials";
import TestimonialsCard from "../ui/TestimonialsCard";

const TetimonialsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const testimonialsCards = showMore ? testimonials: testimonials.slice(0, 4) ;
  return (
    <div id="testimoinals" className="custom-container mt-[50px] lg:mt-[100px]">
      <SectionTitle
        title={"Our Testimonials"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
      >
        <CustomButton
          btnText={showMore ? "View Less" : "View All"}
          functionality={handleShowMore}
        />
      </SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {testimonialsCards.map((element, index) => (
          <TestimonialsCard
            key={index}
            name={element.name}
            review={element.review}
            photo={element.photo}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default TetimonialsSection;
