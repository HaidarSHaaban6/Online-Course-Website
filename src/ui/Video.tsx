// Interface Section :
interface videoProps {
  img: string;
  children: React.ReactNode;
}

// Video Component :
const Video: React.FC<videoProps> = ({ img, children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }} // Start The Path With src...
      className="flex items-center justify-center bg-center bg-cover rounded-xl video-height"
    >
      <div>{children}</div>
    </div>
  );
};

export default Video;

// Example For Use :

// <Video img="src/assets/img/home_page_frame.png">
//   <VideoIconTag />
// </Video>;
