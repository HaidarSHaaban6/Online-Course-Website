import { AboutCard } from "../data/about";
import useAOS from "../hooks/useAOS";

const AboutUsCard = ({ icon: Icon, cardtitle, subtitle }: AboutCard) => {
  useAOS();
  return (
    <div className="bg-white custom-2xl:p-[50px] custom-2xl:rounded-xl lg:p-10 p-[30px] rounded-[10px] font-vietnam"
    data-aos="fade-up">
      <div className="flex justify-start items-center my-[14px]">
            <div className="bg-orange/97 border-1 border-orange/90 text-2xl text-orange/50 custom-2xl:p-4 custom-2xl:rounded-lg p-[14px]  rounded-md ">
              <Icon />
            </div>
      </div>

      <div className="my-[10px] text-grey/15 font-medium custom-2xl:text-2xl custom-2xl:leading-9 lg:text-xl lg:leading-[30px] text-lg">{cardtitle}</div>
      <div className="my-[10px] text-grey/35 font-normal custom-2xl:text-lg lg:text-base text-sm">{subtitle}</div>
    </div>
  );
};

export default AboutUsCard;
