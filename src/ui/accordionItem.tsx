import { accordionData } from "../data/accordion.ts"
import { FaPlus, FaArrowRight } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


const AccordionItem = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActiveItem(activeItem === i ? null : i);
  };
 
  return (
    <div >
      {accordionData.map((e, i) => (
        <div key={i} className={` rounded-xl border-1 border-white/95 mb-[30px]
          custom-2xl:gap-[50px] 
          lg:gap-10  
          gap-5 
          ${activeItem === i ?   ' custom-2xl:p-[50px] lg:p-10  p-6 ':'' }
             
        `}>
          <div className={`flex justify-between items-center  border-white/95 
              ${activeItem === i ?'border-b-1 pb-6 ':'custom-2xl:py-[30px] lg:py-[30px] py-5 custom-2xl:px-[50px] lg:px-10 px-6'}  
          `}>
            <div className="text-grey/15  font-medium 
                 custom-2xl:text-xl custom2xl:leading-[30px]
                 lg:text-lg 
                 text-base 
                 ">{e.question}</div>
            <button
              className="bg-orange/95 transition-transform duration-300 ease-in-out rounded-md gap-[10px] p-3"
              onClick={() => toggle(i)}
            >
              {activeItem === i ? (
                <AiOutlineClose className="transform rotate-180" />
              ) : (
                <FaPlus />
              )}
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out  
               ${activeItem === i ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            
              <p className="text-grey/30 font-normal 
                 custom-2xl:text-lg  custom-2xl:py-[30px]
                 lg:text-base  lg:py-[30px]
                 text-sm  py-5
                    ">{e.answer}</p>
              <div className="bg-gray-100 rounded-lg flex justify-between items-center font-medium text-grey/20
                  custom-2xl:px-[30px] custom-2xl:py-5 
                  lg:px-6 lg:py-4 lg:text-lg 
                  px-5 py-3  text-sm
                 ">
                {e.moreInfo}
                <div className="bg-white rounded-[100px] gap-[10px] p-[14px]"> <FaArrowRight className="text-grey/30 " /></div>
              </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionItem;

