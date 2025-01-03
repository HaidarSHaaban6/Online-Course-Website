import AccordionItem from "../ui/AccordionItem";


interface FAQ{
    title:string;
    subtitle:string;
    btn:string;
}

const FAQsSection = ({title,subtitle,btn}:FAQ) => {
  return (
   <div className="
        flex justify-center items-center font-vietnam ">
    <div className="
         bg-white rounded-xl flex 
        custom-2xl:flex-row  custom-2xl:justify-between custom-2xl:w-10/12 custom-2xl:h-[1202px] custom-2xl:p-[100px] custom-2xl:gap-[120px] 
        custom-xl:flex-row custom-xl:justify-between custom-xl:w-10.5/12 custom-xl:h-[1020px] custom-xl:p-20 custom-xl:gap-20
        custom-mobile:flex-col custom-mobile:justify-center custom-mobile:w-11/12 custom-mobile:h-[1112px] custom-mobile:p-[24px] custom-mobile:gap-10
        ">
            
            <div className=" custom-container
             custom-2xl:gap-[50px]
             custom-xl:gap-10
             custom-mobile:gap-5
            ">
                <h2 className="font-semibold text-grey/15 
                custom-2xl:text-5xl custom-2xl:leading-[57.6px] 
                custom-xl:text-[38px] custom-xl:leading-[57.6px]
                custom-mobile:text-[28px] custom-mobile:leading-[33.6px]
                ">{title}</h2>

                <p className="font-normal text-grey/20 p-1
                custom-2xl:text-lg custom-2xl:leading-[27px] 
            
                ">{subtitle}</p>

                <button className="
                font-medium text-grey/15  border-solid border-1 border-white/95  mt-4
                 custom-2xl:py-[18px] custom-2xl:px-6 custom-2xl:gap-2 custom-2xl:rounded-lg custom-2xl:text-base custom-2xl:leading-[27px] 
                 custom-xl:py-3.5 custom-xl:px-5 custom-xl:gap-2 custom-xl:rounded-md custom-xl:text-lg
                 custom-mobile:py-3.5 custom-mobile:px-5 custom-mobile:gap-2 custom-mobile:rounded-md custom-mobile:text-lg
                ">{btn}</button>
            </div>
            
            <div className="custom-container
             custom-2xl:gap-[30px]
             custom-xl:gap-[30px]
             custom-mobile:gap-5
            ">
                <AccordionItem/>
            </div>

    </div>
    </div>)
}

export default FAQsSection
