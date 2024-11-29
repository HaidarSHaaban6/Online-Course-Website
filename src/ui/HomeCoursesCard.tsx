import { useNavigate } from "react-router-dom";

interface HomeCoursesCardProps {
  img: string;
  infoArray: string[];
  title: string;
  description: string;
}

const HomeCoursesCard: React.FC<HomeCoursesCardProps> = ({
  img,
  infoArray,
  title,
  description,
}) => {
  const navigate = useNavigate();
  const handleCourseButton = () => {
    navigate("/coursesopen");
  };

  return (
    <div className="custom-2xl:p-[50px] md:p-[40px] p-[24px] font-vietnam bg-white">
      <img
        src={img}
        alt="course image"
        className="object-cover w-full mb-6 rounded-lg img-height"
      />
      <div className="flex items-center custom-2xl:mb-[30px] mb-6">
        {infoArray.map((item, index) => (
          <div
            key={index}
            className={`${
              index === infoArray.length - 1
                ? "text-grey/15 text-xl font-medium ml-auto"
                : "py-4 border rounded-lg border-white/95 text-grey/30 px-[10px] mr-[10px]"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold text-grey/15 mb-[14px]">{title}</h2>
      <p className="text-grey/40 mb-[30px]">{description}</p>
      <button
        onClick={handleCourseButton}
        className="w-full bg-white/97 text-grey/15 custom-2xl:h-[63px] h-[49px] font-medium"
      >
        Get it Now
      </button>
    </div>
  );
};

export default HomeCoursesCard;
