import BenefitsSection from "../components/BenefitsSection";
import OurCoursesSection from "../components/OurCoursesSection";
import FAQsSection from "../ui/FAQsSection";

const HomePage = () => {
  return (
    <div>
      <BenefitsSection />
      <OurCoursesSection />
      <FAQsSection title="Frequently Asked Questions" subtitle="Still you have any questions? Contact our Team via support@skillbridge.com" btn="See All FAQ’s" />
    </div>
  );
};
export default HomePage;
