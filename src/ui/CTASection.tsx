import { useNavigate } from "react-router-dom"
import { AboutBannerData } from "../data/about"
import CustomButton from "./CustomButton"

const CTASection = ({ background, word1, line1, line2, btn }: AboutBannerData) => {
  const navigate = useNavigate()

  const moveToContact = () => {
    navigate("/contact");
  }

  return (

    <div className=" font-vietnam py-[50px] ">

      <div className="custom-container relative lg:px-20 p-[30px] bg-white rounded-xl overflow-hidden">

        <div className=" absolute lg:right-28 -right-48 custom-2xl:-top-9 lg:bottom-0 lg:-top-10  -bottom-14 "> 
          <img src={background} alt="" className="lg:size-full size-1/2 -z-1 " /></div>

        <div className=" flex flex-wrap  ">
          <div className="z-20 lg:py-20 flex-wrap lg:w-3/4  ">
            <div className=" text-orange/50 font-semibold  
                        custom-2xl:text-5xl custom-2xl:leading-[72px]
                        lg:text-[42px] lg:leading-[54px] 
                        text-[28px] leading-[33.6px] 
                        ">
              {word1}<span className="text-grey/10 custom-2xl:pl-3 pl-1">{line1}</span>
            </div>
            <div className=" text-grey/30 mt-2 font-normal  
                            custom-2xl:text-lg 
                            lg:text-base 
                            text-sm py-3">{line2}</div>
          </div>

          <div className=" w-full z-20 flex lg:justify-end custom-2xl:-mt-[200px] lg:-mt-[180px] justify-start items-start sm:py-0 py-3">
            <CustomButton

              btnText={btn}
              custom={true}
              functionality={() => moveToContact()} />
          </div>
        </div>



      </div>

    </div>

  )
}

export default CTASection
