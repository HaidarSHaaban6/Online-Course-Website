// Import Section :
import { useDispatch, useSelector } from "react-redux"; // Import reacts-redux
import { useEffect } from "react"; // Import useEffect
import { getOpenCourse } from "../redux/Slice/coursesSlice";
import { RootState } from "../redux/store"; // Import RootState
import { useParams } from "react-router-dom"; // Import useParams
import Video from "../ui/Video"; // Import Video Component
import VideoIconTag from "../ui/VideoIconTag"; // Import VideoIconTag
import PageTitle from "../ui/PageTitle"; // Import PageTitle
import MainCoursesCard from "../ui/MainCoursesCard";

const CoursesOpenPageSection = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const param = useParams(); // Extract Route parameters
  const courseId = Number(param.id); // Ensure courseId Is a Number

  // Use useSelector To Access openCourse Data
  const openCourse = useSelector(
    (state: RootState) => state.courses.openCourse
  );

  useEffect(() => {
    dispatch(getOpenCourse(courseId)); // Call The Action When The Component Loads
  }, [dispatch, courseId]);

  if (!openCourse) {
    return <div>No Data...</div>;
  }

  return (
    <div>
      <PageTitle
        title={openCourse.course_title}
        description={openCourse.description}
      />
      <div className="custom-container">
        <Video img={openCourse.image1}>
          <VideoIconTag />
        </Video>
        <div className="grid gap-5 lg:grid-cols-2 custom-2xl:gap-[30px] mt-[50px] lg:mt-20 custom-2xl:mt-[100px]">
          {openCourse.curriclum.map((item) => (
            <MainCoursesCard
              topic={item.topic}
              info={item.info}
              unit={item.unit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesOpenPageSection;
