import { FaPlay } from "react-icons/fa";

// Video Icon Component :
const VideoIconTag = () => {
  return (
    <span className="custom-2xl:w-[72px] custom-2xl:h-[72px] w-[54px] h-[54px] rounded-full bg-[#FFFFFF33] border-[#FFFFFF4D] custom-2xl:border-[6px] border-[4px] flex items-center justify-center z-20 hover:cursor-pointer">
      <FaPlay className="text-xl text-white" />
    </span>
  );
};

export default VideoIconTag;
