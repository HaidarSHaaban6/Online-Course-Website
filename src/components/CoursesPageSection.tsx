// Import Section :
import { useDispatch, useSelector } from "react-redux"; // Import react-redux
import { useEffect } from "react"; // Import react
import PageTitle from "../ui/PageTitle"; // Import PageTitle Component
import { getMainCourse } from "./../redux/Slice/coursesSlice";
import { RootState } from "../redux/store"; // Import RootState

// CoursePageSection Component
const CoursePageSection = () => {
  // Define Constants :
  const title = "Online Courses on Design and Development";
  const description =
    "Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.";

  // Redux Hooks
  const dispatch = useDispatch();
  const mainCourses = useSelector(
    (state: RootState) => state.courses.mainCourses
  );

  // useEffect To Trigger getMainCourse
  useEffect(() => {
    dispatch(getMainCourse());
  }, [dispatch]);

  return (
    <>
      <PageTitle title={title} description={description} />
      <div className="custom-container">
        <div className="courses-grid">
          {mainCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.image1} alt={course.course_title} />
              <img src={course.image2} alt={course.course_title} />
              <img src={course.image3} alt={course.course_title} />
              <h3>{course.course_title}</h3>
              <p>{course.description}</p>
              <p>{course.author}</p>
              <span>{course.level}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursePageSection;
