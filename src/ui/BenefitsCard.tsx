import { MdArrowOutward } from "react-icons/md";
import useAOS from "../hooks/useAOS";

// Interface Section :
interface BenefitsCardProps {
  number: string;
  title: string;
  description: string;
}

// BenefitsCard Component :
const BenefitsCard: React.FC<BenefitsCardProps> = ({
  number,
  title,
  description,
}) => {
  useAOS();
  return (
    <div className="bg-white rounded-[10px] p-[30px] custom-xl:p-10 custom-2xl:rounded-xl custom-2xl:p-[50px] font-vietnam"
    data-aos="fade-up">
      <p className="font-bold text-[50px] w-fit text-grey/15 mb-[30px] custom-xl:text-6xl custom-xl:mb-10 custom-2xl:text-[80px] custom-2xl:mb-[50px] ml-auto">
        {number}
      </p>
      <p className="text-xl font-semibold mb-[10px] custom-2xl:text-2xl custom-2xl:mb-[14px] text-grey/20">
        {title}
      </p>
      <p className="text-sm text-grey/30 mb-[30px] custom-xl:text-base custom-xl:mb-10 custom-2xl:text-lg custom-2xl:mb-[50px]">
        {description}
      </p>
      <p className="flex items-center justify-center hover:cursor-pointer h-[54px] w-[54px] rounded-md bg-white/99 border border-white/95 ml-auto custom-2xl:w-[74px] custom-2xl:h-[74px] custom-2xl:rounded-lg">
        <MdArrowOutward className="text-orange/50 text-[26px] custom-2xl:text-[34px]" />
      </p>
    </div>
  );
};

export default BenefitsCard;
