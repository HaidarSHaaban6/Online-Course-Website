import { useNavigate } from "react-router-dom";
import useAOS from "../hooks/useAOS";

interface HomeCoursesCardProps {
  id: number;
  img: string;
  title: string;
  description: string;
  course_duration: string;
  level: string;
  author: string;
}

const HomeCoursesCard: React.FC<HomeCoursesCardProps> = ({
  id,
  img,
  title,
  description,
  course_duration,
  level,
  author,
}) => {
  const navigate = useNavigate();
  const handleCourseButton = (id: number) => {
    navigate(`/courses/${id}`);
  };
  useAOS();
  return (
    <div className="custom-2xl:p-[50px] md:p-[40px] p-[24px] font-vietnam bg-white rounded-[10px] custom-2xl:rounded-xl"
    data-aos="fade-up">
      <img
        src={img}
        alt="course image"
        className="object-cover w-full mb-6 rounded-lg img-height"
      />
      <div className="lg:flex lg:items-center custom-2xl:mb-[30px] mb-6">
        <p className="py-4 border rounded-lg border-white/95 text-grey/30 px-[10px] mr-[10px] inline-block text-sm custom-2xl:text-lg">
          {course_duration}
        </p>
        <p className="py-4 border rounded-lg border-white/95 text-grey/30 px-[10px] mr-[10px] inline-block text-sm custom-2xl:text-lg">
          {level}
        </p>
        <p className="font-medium custom-2xl:text-xl md:ml-auto text-grey/15 mt-[14px] lg:mt-0">
          {author}
        </p>
      </div>
      <h2 className="text-2xl font-semibold text-grey/15 mb-[14px]">{title}</h2>
      <p className="text-grey/40 mb-[30px]">{description}</p>
      <button
        onClick={() => {
          handleCourseButton(id);
        }}
        className="w-full bg-white/97 text-grey/15 custom-2xl:h-[63px] h-[49px] font-medium"
      >
        Get it Now
      </button>
    </div>
  );
};

export default HomeCoursesCard;
