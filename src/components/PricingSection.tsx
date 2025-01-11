import ButtonContainer from "../ui/ButtonContainer";
import PricingCard from "../ui/PricingCard";
import SectionTitle from "../ui/SectionTitle";
import { Pricing, pricingHead } from "../data/Pricing";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getMonthlyPlans, getYearlyPlans } from "../redux/Slice/pricingSlice";

const PricingSection = () => {
  const fetchMonthlyData = () => {
    dispatch(getMonthlyPlans());
    setDataToShow(monthPlan);
  };

  const fetchYearlyData = () => {
    dispatch(getYearlyPlans());
    setDataToShow(yearPlan);
  };

  const dispatch = useDispatch();

  const monthPlan = useSelector(
    (state: RootState) => state.pricing.monthlyPlansData
  );

  const yearPlan = useSelector(
    (state: RootState) => state.pricing.yearlyPlansData
  );

  const [dataToShow, setDataToShow] = useState<Pricing[]>(monthPlan);

  useEffect(() => {
    dispatch(getMonthlyPlans());
  }, [dispatch]);

  useEffect(() => {
    if (monthPlan.length > 0) {
      setDataToShow(monthPlan);
    }
  }, [monthPlan]);

  useEffect(() => {
    if (yearPlan.length > 0) {
      setDataToShow(yearPlan);
    }
  }, [yearPlan]);

  return (
    <div className="mt-[100px]">
      <div className="flex items-center justify-center">
        <div className="custom-container">
          <SectionTitle
            title={pricingHead.title}
            description={pricingHead.subtitle}
          >
            <ButtonContainer
              primaryButtonText="Monthly"
              secondaryButtonText="Yearly"
              onPrimaryButtonClick={fetchMonthlyData}
              onSecondaryButtonClick={fetchYearlyData}
            />
          </SectionTitle>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-4 p-20 bg-white custom-container ">
          {dataToShow.map((item, index) => {
            return (
              <PricingCard
                key={index}
                title={item.title}
                plan_fee={
                  item.isMonth ? item.monthly_plan_fee : item.yearly_plan_fee
                }
                usedPlan={item.isMonth ? item.monthPlan : item.yearPlan}
                available="Available Features"
                features={item.features}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
