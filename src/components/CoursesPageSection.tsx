// Import Section :
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PageTitle from "../ui/PageTitle";
import { getMainCourse } from "../redux/Slice/coursesSlice";
import { RootState } from "../redux/store";
import SectionTitle from "../ui/SectionTitle";
import CustomButton from "../ui/CustomButton";
import { useNavigate } from "react-router-dom";
import useAOS from "../hooks/useAOS";

// CoursePageSection Component
const CoursePageSection = () => {
  const title = "Online Courses on Design and Development";
  const description =
    "Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.";

  // Redux Hooks
  const dispatch = useDispatch();
  const mainCourses = useSelector(
    (state: RootState) => state.courses.mainCourses
  );

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMainCourse());
  }, [dispatch]);

  const handleButton = (id: number) => {
    navigate(`/courses/${id}`);
  };
 useAOS();
  return (
    <>
      <PageTitle title={title} description={description} />
      <div className="custom-container font-vietnam">
        {mainCourses.map((course) => (
          <div
            key={course.id}
            className={`p-6 custom-xl:p-10 custom-2xl:p-[50px] bg-white rounded-lg custom-xl:rounded-[10px] custom-2xl:rounded-xl ${
              course.id == 5
                ? "mb-[50px] custom-xl:mb-[100px] custom-2xl:mb-[150px]"
                : "mb-5 custom-xl:mb-10 custom-2xl:mb-[50px]"
            }`}
            data-aos="fade-up">
            <SectionTitle
              title={course.course_title}
              description={course.description}
              custom={true}
            >
              <CustomButton
                btnText="View Course"
                functionality={() => {
                  handleButton(course.id);
                }}
              />
            </SectionTitle>
            <div className="flex gap-[10px] custom-xl:gap-5 custom-2xl:gap-[30px] justify-between mb-6 custom-2xl:mb-[30px]">
              <img
                alt="course image1"
                className="object-cover w-[31.2%] md:w-1/3 rounded-lg course-img-heigh"
                src={course.image1}
              />
              <img
                alt="course image2"
                className="object-cover w-[31.2%] md:w-1/3 rounded-lg course-img-heigh"
                src={course.image2}
              />
              <img
                alt="course image3"
                className="object-cover w-[31.2%] md:w-1/3 rounded-lg course-img-heigh"
                src={course.image3}
              />
            </div>
            <div className="md:flex md:items-center custom-2xl:mb-[50px] mb-[40px]">
              <p className="py-2 border rounded-lg border-white/95 text-grey/30 px-[12px] mr-[8px] custom-2xl:mr-[10px] inline-block text-sm custom-xl:text-base custom-2xl:text-lg custom-2xl:px-4 custom-2xl:py-[10px]">
                {course.course_duration}
              </p>
              <p className="py-2 border rounded-lg border-white/95 text-grey/30 px-[12px] mr-[8px] custom-2xl:mr-[10px] inline-block text-sm custom-xl:text-base custom-2xl:text-lg custom-2xl:px-4 custom-2xl:py-[10px]">
                {course.level}
              </p>
              <p className="font-medium custom-2xl:text-xl md:ml-auto text-grey/15 mt-[16px] md:mt-0">
                {course.author}
              </p>
            </div>
            <div className="border border-white/95 rounded-xl">
              <p className="my-[14px] mx-5 custom-xl:my-[20px] custom-xl:mx-6 custom-2xl:my-6 custom-2xl:mx-[30px] font-semibold custom-xl:text-lg custom-2xl:text-[22px]">
                Curriculum
              </p>
              <div className="flex flex-col p-6 border-t lg:flex-row border-white/95 lg:px-10 lg:py-6 custom-2xl:px-[50px] custom-2xl:py-[30px]">
                {course.curriclum.map((item, index) => (
                  <div
                    key={index}
                    className={`lg:w-full border-white/95 ${
                      item.id == 1
                        ? "pb-5 border-b lg:pb-0 lg:border-b-0 lg:pr-10 lg:border-r custom-2xl:pr-[50px]"
                        : item.id == 5
                        ? "pt-5 lg:pt-0 lg:pl-10 custom-2xl:pl-[50px]"
                        : "py-5 border-b lg:py-0 lg:border-b-0 lg:px-10 lg:border-r custom-2xl:px-[50px]"
                    }`}
                  >
                    <p className="font-extrabold text-[30px] mb-3 custom-xl:text-[40px] custom-xl:mb-4 custom-2xl:text-[50px] custom-2xl:mb-5">
                      {item.unit}
                    </p>
                    <p className="text-sm text-grey/20 custom-xl:text-base custom-2xl:text-lg">
                      {item.topic}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoursePageSection;
