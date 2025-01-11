// import { useState } from "react";
// import { Pricing } from "../data/Pricing";
// import { IoMdCheckmark } from "react-icons/io";
// import { IoClose } from "react-icons/io5";

import { IoMdCheckmark } from "react-icons/io";
import { Features } from "../data/Pricing";
import { IoClose } from "react-icons/io5";

// interface FeatureCheckboxProps {
//   label: string;
//   available1: boolean;
// }

interface PricingCardProp {
  title: string;
  plane_fee: string;
  usedPlan: string;
  available: string;
  features: Features[];
}

const PricingCard: React.FC<PricingCardProp> = ({
  title,
  plan_fee,
  usedPlan,
  available,
  features,
}) => {
  // const [checked, setChecked] = useState<boolean>(available1);
  return (
    <div
      className=" bg-white/99 border-1 rounded-xl font-vietnam
    px-5 custom-xl:px-6 custom-2xl:px-[30px] 
    pb-5 custom-xl:pb-6 custom-2xl:pb-[30px] 
    pt-[30px] custom-xl:pt-10 custom-2xl:pt-[50px]"
    >
      <div className="bg-orange/97 border-1 border-orange/90 px-[22px] text-center font-medium text-grey/15 custom-2xl:py-3 custom-2xl:rounded-md custom-2xl:text-[22px] custom-2xl:leading-[37px] lg:py-[10px] lg:text-lg lg:leading-[30px] py-2 rounded text-base leading-7">
        {title}
      </div>
      <div className="text-center px-8 py-6 text-grey/30 font-medium custom-2xl:text-xl custom-2xl:leading-[14px] lg:text-base lg:leading-[11.68px] text-sm leading-[10px]">
        <span className="font-semibold text-grey/15 custom-2xl:text-[80px] custom-2xl:leading-[58.4px] lg:text-6xl lg:leading-[43.8px] text-[50px] leading-[36.5px]">
          {plan_fee}
        </span>
        {usedPlan}
      </div>
      <div className="border-1 border-white/95 rounded-2xl custom-2xl:p-10 custom-2xl:gap-[30px] lg:p-[30px] lg:gap-6  p-5 gap-5">
        <div className="text-center text-grey/15 font-medium custom-2xl:text-xl custom-2xl:leading-[30px] text-lg">
          {available}
        </div>
        {/* <ul className="mt-4">
          <li
            onClick={() => setChecked(!checked)}
            className=" cursor-pointer border-1 border-white/95 custom-2xl:p-[14px] custom-2xl:gap-3 custom-2xl:rounded-lg  p-3 rounded-md gap-2"
          >
            <div
              className={`p-[6px]  text-grey/15 rounded-md border-1 border-white/95 ${
                checked ? " bg-orange/95" : " bg-transparent"
              }`}
            >
              {checked ? <IoMdCheckmark /> : <IoClose />}
            </div>
            <span className="">{label}</span>
          </li>
        </ul> */}
        <ul>
          {features.map((item: Features) => (
            <li className="border-1 border-white/95 custom-2xl:p-[14px] custom-2xl:gap-3 custom-2xl:rounded-lg  p-3 rounded-md gap-2">
              <div
                className={`p-[6px]  text-grey/15 rounded-md border-1 border-white/95 ${
                  item.availability ? " bg-orange/95" : " bg-transparent"
                }`}
              >
                {item.availability ? <IoMdCheckmark /> : <IoClose />}
              </div>
              <span className="">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full rounded-lg custom-2xl:text-lg bg-orange/50 font-semibold text-white px-6 custom-2xl:py-[20px] py-[18px] text-sm ">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
