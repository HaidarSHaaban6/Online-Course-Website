// Import Section :
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHomeCourses } from "../redux/slice/coursesSlice";
import { RootState } from "./../redux/store";
import SectionTitle from "../ui/SectionTitle";
import CustomButton from "../ui/CustomButton";
import { useNavigate } from "react-router-dom";
import HomeCoursesCard from "../ui/HomeCoursesCard";

// Variable Definition Section :
const title = "Our Courses"; // Title For The Section
const description = // Description For The Section
  "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.";
const btnText = "View All"; // Text For The Button

const OurCoursesSection = () => {
  const dispatch = useDispatch(); // Dispatch Function To Send Actions To Redux Store
  const navigate = useNavigate(); // Navigate Function For Programmatic Routing

  // Selecting The First Six Courses From Redux State
  const firstSixCourses = useSelector(
    (state: RootState) => state.courses.firstSixCourses
  );

  // Button Click Handler To Navigate To The Courses Page
  const handleBtnClick = () => {
    navigate("/courses");
  };

  // Fetching The First Six Courses When The Component Mounts
  useEffect(() => {
    dispatch(getHomeCourses());
  }, [dispatch]);

  return (
    <div id="courses" className="custom-container mt-[50px] custom-xl:mt-[100px]">
      <SectionTitle title={title} description={description}>
        <CustomButton btnText={btnText} functionality={handleBtnClick} />
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {firstSixCourses.map((item) => (
          <HomeCoursesCard
            key={item.id}
            id={item.id}
            title={item.course_title}
            description={item.description}
            img={item.image1}
            author={item.author}
            level={item.level}
            course_duration={item.course_duration}
          />
        ))}
      </div>
    </div>
  );
};

export default OurCoursesSection;
