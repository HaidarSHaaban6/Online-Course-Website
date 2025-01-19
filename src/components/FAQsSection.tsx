import AccordionItem from "../ui/AccordionItem";
import { FAQ } from "../data/homepageFillData";


const FAQsSection = ({title,subtitle,btn}:FAQ ) => {
  return (
   <div id="faq" className="
      custom-container  flex justify-center items-center font-vietnam mt-[50px] lg:mt-[100px] ">
    <div className="
     
         bg-white rounded-xl flex 
        custom-2xl:flex-row  custom-2xl:justify-between  custom-2xl:p-[100px] custom-2xl:gap-[120px] 
        lg:flex-row lg:justify-between   lg:p-20 lg:gap-20
        flex-col justify-center  p-[24px] gap-10
        ">
            
            <div className=" custom-container
             custom-2xl:gap-[50px]
             lg:gap-10
             gap-5
            ">
                <h2 className="font-semibold text-grey/15 
                custom-2xl:text-5xl custom-2xl:leading-[57.6px] 
                lg:text-[38px] lg:leading-[57.6px]
                text-[28px] leading-[33.6px]
                ">{title}</h2>

                <p className="font-normal text-grey/20 p-1
                custom-2xl:text-lg custom-2xl:leading-[27px] 
            
                ">{subtitle}</p>

                <button className="
                font-medium text-grey/15  border-solid border-1 border-white/95  mt-4
                 custom-2xl:py-[18px] custom-2xl:px-6 custom-2xl:gap-2 custom-2xl:rounded-lg custom-2xl:text-base custom-2xl:leading-[27px] 
                 lg:py-3.5 lg:px-5 lg:gap-2 lg:rounded-md lg:text-lg
                 py-3.5 px-5 gap-2 rounded-md text-lg
                ">{btn}</button>
            </div>
            
            <div className="custom-container
             custom-2xl:gap-[30px]
             lg:gap-[30px]
             gap-5
            " data-aos='fade-out'>
                <AccordionItem/>
            </div>

    </div>
    </div>)
}

export default FAQsSection
