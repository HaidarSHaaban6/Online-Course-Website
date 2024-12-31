import { useNavigate } from "react-router-dom";
import ButtonContainer from "../ui/ButtonContainer";
import FAQsSection from "../ui/FAQsSection";

const HomePage = () => {
  // const navigate = useNavigate()
  // const handleSignUp = ()=>{
  // //  navigate("/login")
  // }
  // const handleSign = ()=>{
  //   // navigate("/login")
  //  }

  return (
  <div className="bg-white/97">
  
    <FAQsSection title="Frequently Asked Questions"
     subtitle="Still you have any questions? Contact our Team via support@skillbridge.com" 
     btn="See All FAQ’s" />
{/* 
    <ButtonContainer primaryButtonText="sign up" secondaryButtonText="login" onPrimaryButtonClick={handleSignUp} onSecondaryButtonClick={handleSign} isReversed={true} />  */}
    
  </div>
)
};
export default HomePage;
