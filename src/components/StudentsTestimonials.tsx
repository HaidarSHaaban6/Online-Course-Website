import { useEffect, useRef, useState } from "react";
import { testimonials } from "../data/testimonials";
import TestimonialsCard from "../ui/TestimonialsCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const StudentsTestimonials = () => {
  const [currentindex, setcurrentindex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const getClassName = (index: number) => {
    let className: string = "";
    if (index != 0) className = "absolute top-0";
    if (index > currentindex) className += " translate-x-[-200%]";
    return className;
  };
  const resetTime = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(() => {
      getNextCard();
    }, 20000);
  };
  const getNextCard = () => {
    if (currentindex < testimonials.length - 1)
      setcurrentindex(currentindex + 1);
    resetTime();
  };
  const getPreviousCard = () => {
    if (currentindex > 0) setcurrentindex(currentindex - 1);
    resetTime();
  };

  useEffect(() => {
    resetTime();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="mb-10 lg:mb-14 custom-2xl:mb-20">
        <h1 className="text-[28px] lg:text-3xl custom-2xl:text-4xl font-meduim font-vietnam">
          Students Testimonials
        </h1>
        <p className="text-grey/35 font-vietnam text-sm lg:text-base custom-2xl:text-lg mt-1">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <div>
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <TestimonialsCard
              key={index}
              name={testimonial.name}
              review={testimonial.review}
              photo={testimonial.photo}
              className={getClassName(index)}
            />
          ))}
        </div>
        <div className="flex gap-2.5 justify-center lg:justify-end mt-6 gap-x-2.5">
          <div
            className="w-[54px] aspect-square bg-white flex items-center justify-center rounded-md duration-200 hover:cursor-pointer hover:bg-white/95"
            onClick={getPreviousCard}
          >
            <FaArrowLeft className="text-base" />
          </div>
          <div
            className="w-[54px] aspect-square bg-white flex items-center justify-center rounded-md duration-200 hover:cursor-pointer hover:bg-white/95"
            onClick={getNextCard}
          >
            <FaArrowRight className="text-base" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsTestimonials;
