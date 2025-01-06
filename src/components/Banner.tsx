import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 pt-5 lg:px-5 custom-2xl:px-[30px]">
      <div
        className="py-2.5 bg-orange/50 rounded-md duration-300 text-white text-sm font-vietnam px-3.5 text-center
        custom-2xl:text-lg custom-2xl:px-3.5
        lg:gap-x-6
        flex items-center justify-center gap-x-3
        hover:cursor-pointer hover:bg-orange/70"
        onClick={() => {navigate("/pricing")}}
      >
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Banner;