// Import Section :
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../ui/CustomButton";
import SectionTitle from "../ui/SectionTitle";
import { RootState } from "./../redux/store";
import {
  getMainBenefitData,
  getAllBenefitData,
  BenefitType,
} from "../redux/slice/benefitsSlice";
import BenefitsCard from "../ui/BenefitsCard";

const BenefitsSection = () => {
  
  // Define Constants
  const title = "Benefits";
  const description =
    "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.";

  // Redux Dispatch and Selector
  const dispatch = useDispatch();
  const mainBenefitData = useSelector(
    (state: RootState) => state.benefit.mainBenefitData
  );
  const allBenefitData = useSelector(
    (state: RootState) => state.benefit.allBenefitData
  );

  // State To Track Currently Viewed Data
  const [benefitData, setBenefitData] = useState<BenefitType[]>([]);
  const [isViewingAllBenefits, setIsViewingAllBenefits] =
    useState<boolean>(false);
  const [btnTextState, SetBtnTextState] = useState<boolean>(false);

  // Fetch Initial Main Benefit Data
  useEffect(() => {
    dispatch(getMainBenefitData());
  }, [dispatch]);

  // Update benefitData Based on The Viewing Mode
  useEffect(() => {
    if (isViewingAllBenefits) {
      setBenefitData(allBenefitData);
    } else {
      setBenefitData(mainBenefitData);
    }
  }, [isViewingAllBenefits, mainBenefitData, allBenefitData]);

  // Function To Toggle Between mainBenefitData And allBenefitData
  const toggleBenefitData = () => {
    if (isViewingAllBenefits) {
      dispatch(getMainBenefitData()); // Fetch main benefits data
    } else {
      dispatch(getAllBenefitData()); // Fetch all benefits data
    }
    setIsViewingAllBenefits((prev) => !prev); // Toggle the viewing flag
    SetBtnTextState((prev) => !prev); // Toggle the button text
  };

  return (
    <div id="benefits" className="custom-container mt-[50px] custom-xl:mt-[100px] custom-2xl:mt-[150px]">
      <SectionTitle title={title} description={description}>
        <CustomButton
          btnText={btnTextState ? "View Less" : "View All"}
          functionality={toggleBenefitData}
        />
      </SectionTitle>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefitData.length > 0 ? (
          benefitData.map((benefit, index) => (
            <BenefitsCard
              key={index}
              number={String(benefit.id)}
              title={benefit.title}
              description={benefit.description}
              
            />
          ))
        ) : (
          <p>No Data...</p>
        )}
      </div>
    </div>
  );
};

export default BenefitsSection;
