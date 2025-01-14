
import FAQsSection from "../components/FAQsSection";
import { FAQ } from "../data/homepageFillData";
import PageTitle from "../ui/PageTitle";
import { Pricing, pricingHead } from "../data/Pricing";
import ButtonContainer from "../ui/ButtonContainer";
import { useEffect, useState } from "react";
import { getMonthlyPlans, getYearlyPlans } from "../redux/Slice/pricingSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PricingCard from "../ui/PricingCard";

const PricingPage = () => {
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

        <div>
            <PageTitle title={pricingHead.title1} description={pricingHead.subtitle1} />
            <div className="mt-[100px]">
                <div className="flex justify-center items-center">
                    <div className="custom-container">
                        <ButtonContainer primaryButtonText="Monthly" secondaryButtonText="Yearly"
                            onPrimaryButtonClick={fetchMonthlyData}
                            onSecondaryButtonClick={fetchYearlyData} />
                    </div>
                </div>

            </div>

            <div className=" mt-[50px]">
                <div className="custom-container  ">

                    <div className="lg:p-20 p-5 bg-white  grid grid-cols-1 lg:grid-cols-2 gap-[30px] rounded-xl ">
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
            <FAQsSection title={FAQ.title} subtitle={FAQ.subtitle} btn={FAQ.btn} />
        </div>


    )
};

export default PricingPage;
