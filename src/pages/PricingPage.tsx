
import FAQsSection from "../ui/FAQsSection";
import { FAQ } from "../data/homepageFillData";
import PageTitle from "../ui/PageTitle";
import { pricingHead } from "../data/Pricing";
import ButtonContainer from "../ui/ButtonContainer";
import { useState } from "react";

const PricingPage = () => {
    const [plan,setplan]=useState(true)
      const MonthlyPlan = ()=>{
         setplan(true)
      }
      const YearlyPlan = ()=>{
        setplan(false)
      }
  
  return (

  <div>
    <div className="custom-container"><PageTitle title={pricingHead.title1} description={pricingHead.subtitle1}/></div>
    <div className="mt-[100px]">
        <div className="flex justify-center items-center">
            <div className="custom-container">

            
                <ButtonContainer primaryButtonText="Monthly" secondaryButtonText="Yearly" onPrimaryButtonClick={MonthlyPlan} onSecondaryButtonClick={YearlyPlan} />
        

            </div>
        </div>
    </div>
    <FAQsSection title={FAQ.title} subtitle={FAQ.subtitle} btn={FAQ.btn}/>
    </div>


)};

export default PricingPage;
