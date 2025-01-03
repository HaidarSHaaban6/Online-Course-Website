import OurCoursesSection from "../components/OurCoursesSection";
import PageTitle from "../ui/PageTitle";
import Video from "../ui/Video";
import VideoIconTag from "../ui/VideoIconTag";

const description =
  "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.";
const HomePage = () => {
  return (
    <>
      <PageTitle
        title="Online Courses on Design and Development"
        description={description}
      />
      <OurCoursesSection />
      <div className="custom-container">
        <Video img="src/assets/img/home_page_frame.png">
          <VideoIconTag />
        </Video>
      </div>
    </>
  );
};
export default HomePage;
