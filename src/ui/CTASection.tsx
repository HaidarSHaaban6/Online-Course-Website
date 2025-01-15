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

      <div className="custom-container relative px-20 bg-white rounded-xl ">

        <div className=" absolute lg:right-28 -right-20 lg:bottom-0  -bottom-8"> <img src={background} alt="" className="lg:size-full size-1/2 -z-1 " /></div>

        <div className=" flex flex-wrap  ">

          <div className="z-20 lg:py-20 py-10 flex-wrap w-3/4  ">
            <div className=" text-orange/50 font-semibold  
                        custom-2xl:text-5xl custom-2xl:leading-[72px]
                        lg:text-4xl lg:leading-[54px] 
                        sm:text-2xl sm:leading-10 
                        text-base 
                        ">
              {word1}<span className="text-grey/10 custom-2xl:pl-3 pl-1">{line1}</span>
            </div>
            <div className=" text-grey/30 mt-2 font-normal     
                            custom-2xl:text-lg 
                            lg:text-base
                            text-sm ">{line2}</div>
          </div>

          <div className=" w-full z-20 flex lg:justify-end custom-2xl:-mt-[200px] lg:-mt-[180px] justify-start items-start mb-4">
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
