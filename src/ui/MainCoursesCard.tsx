// Import Section :
import { HiOutlineClock } from "react-icons/hi";
import { Lessons } from "../data/Courses";
import useAOS from "../hooks/useAOS";

// Interface Section :
interface MainCoursesCardProps {
  unit: string;
  topic: string;
  info: Lessons[];
}

const MainCoursesCard: React.FC<MainCoursesCardProps> = ({
  unit,
  topic,
  info,
}) => {
  useAOS();
  return (
    <div className="p-[30px] lg:p-10 custom-2xl:p-[50px] font-vietnam bg-white rounded-[10px] custom-2xl:rounded-xl">
      <p className="font-bold text-[50px] mb-[30px] w-fit ml-auto lg:text-6xl lg:mb-10 custom-2xl:text-[80px] custom-2xl:mb-[50px] text-grey/15">
        {unit}
      </p>
      <p className="text-lg font-semibold text-grey/20 mb-[30px] lg:text-xl lg:mb-10 custom-2xl:text-2xl custom-2xl:mb-[50px]">
        {topic}
      </p>
      <div>
        {info.map((item: Lessons) => (
          <div
            key={item.id}
            className={`p-6 lg:px-6 lg:py-5 custom-2xl:px-[30px] custom-2xl:py-6 lg:flex lg:justify-between lg:items-center rounded-md lg:rounded-[10px] custom-2xl:rounded-xl ${
              item.current
                ? "border border-orange/80 shadow-custom"
                : "border border-white/95"
            }
            ${item.id == 3 ? "" : "mb-4 custom-2xl:mb-[20px]"}
            `}
            data-aos="fade-up">
            <div className="mb-6 lg:mb-0">
              <p className="mb-[2px] font-medium text-grey/20 custom-2xl:text-xl custom-2xl:mb-[6px] w-fit">
                {item.lesson_title}
              </p>
              <p className="text-sm text-grey/35 custom-2xl:text-lg">
                {item.lesson_number}
              </p>
            </div>
            <p
              className={`flex items-center w-fit text-grey/35 p-[10px] custom-2xl:py-3 custom-2xl:px-[14px] rounded-md text-sm custom-2xl:text-lg ${
                item.current ? "bg-orange/90" : "bg-white/97"
              }`}
            >
              <span>
                <HiOutlineClock className="mr-1 text-grey/30 text-[20px] custom-2xl:text-2xl" />
              </span>
              {item.lesson_duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCoursesCard;
