import BenefitsSection from "../components/BenefitsSection";
import Hero from "../components/Hero";
import OurCoursesSection from "../components/OurCoursesSection";
import FAQsSection from "../components/FAQsSection";
import { FAQ, HeroData } from "../data/homepageFillData";
import MarqueSlider from "../ui/MarqueSlider";
import Video from "../ui/Video";
import VideoIconTag from "../ui/VideoIconTag";
import videoFrame from "../assets/img/home_page_frame.png";
import iconImg from "/src/assets/img/Abstract_Line.png";
import PricingSection from "../components/PricingSection";
import TetimonialsSection from "../components/TetimonialsSection";
import useAOS from '../hooks/useAOS';

const HomePage = () => {
  useAOS();
  return (
    <div>
      <Hero
        iconImg={iconImg}
        word1={HeroData.word1}
        line1={HeroData.line1}
        line2={HeroData.line2}
        line3={HeroData.line3}
        btn1={HeroData.btn1}
        btn2={HeroData.btn2}
      />

      <div className="custom-container" data-aos="fade-up">
        <MarqueSlider />
        <Video img={videoFrame} children={<VideoIconTag />} />
      </div>

      <BenefitsSection  />
      <OurCoursesSection />
      <TetimonialsSection />
      <PricingSection />
      <FAQsSection title={FAQ.title} subtitle={FAQ.subtitle} btn={FAQ.btn} />
    </div>
  );
};
export default HomePage;

