import Video from "../ui/Video";
import frameImg from "./../assets/img/home_page_frame.png";
import VideoIconTag from "../ui/VideoIconTag";

const HomePage = () => {
  return (
    <div className="custom-container">
      <Video img={frameImg}>
        <VideoIconTag />
      </Video>
    </div>
  );
};

export default HomePage;
