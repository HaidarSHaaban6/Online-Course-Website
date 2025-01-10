import ButtonContainer from "../ui/ButtonContainer"
import PricingCard from "../ui/PricingCard"
import SectionTitle from "../ui/SectionTitle"
import { pricingHead} from "../data/Pricing"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store";


const PricingSection = () => {
  const [plan,setplan]=useState(true)
    const MonthlyPlan = ()=>{
       setplan(true)
    }
    const YearlyPlan = ()=>{
      setplan(false)
    }

    const plans = useSelector((state: RootState) => state.pricing.plans);

  return (

    <div className="mt-[100px]">
        <div className="flex justify-center items-center">
            <div className="custom-container">

            <SectionTitle title={pricingHead.title} description={pricingHead.subtitle}>
                <ButtonContainer primaryButtonText="Monthly" secondaryButtonText="Yearly" onPrimaryButtonClick={MonthlyPlan} onSecondaryButtonClick={YearlyPlan} />
            </SectionTitle> 

            </div>
        </div>
        
        <div className="flex justify-center items-center">
            <div className="custom-container bg-white flex justify-center items-center gap-4 p-20
            ">
              {plans.map((e,i)=>{return(
                <PricingCard key={i} title={e.title} plan_fee={plan === true? e.monthly_plan_fee:e.yearly_plan_fee}
                 usedPlan={plan === true? e.monthPlan:e.yearPlan} available="Available Features"/>
              )})}

            </div>
        </div>
    </div>
  )
}

export default PricingSection
