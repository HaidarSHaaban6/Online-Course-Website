interface videoProps {
  img: string;
  children: React.ReactNode;
}

// Video Component :
const Video: React.FC<videoProps> = ({ img, children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="flex items-center justify-center bg-center bg-cover rounded-xl video-height"
    >
      <div>{children}</div>
    </div>
  );
};

export default Video;
