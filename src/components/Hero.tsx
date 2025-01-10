import { useNavigate } from "react-router-dom"
import { HeroData } from "../data/homepageFillData"
import CustomButton from "../ui/CustomButton"
import { RiFlashlightFill } from "react-icons/ri";

const Hero = ({ iconImg, word1, line1, line2, line3, btn1, btn2 }: HeroData) => {
  const navigate = useNavigate()
  const moveToCourses = () => {
    navigate('/courses')
  }
  const moveToPricing = () => {
    navigate('/pricing')
  }
  return (
    <div className="flex justify-center items-center font-vietnam py-[50px] ">
      <div className="custom-container text-center">
        <div className=" flex justify-center items-center text-center text-orange/50 font-semibold bottom-1 bg-white
          custom-2xl:rounded-[11px] custom-2xl:py-[14px]  custom-2xl:text-5xl custom-2xl:leading-[72px]
          lg:py-3 lg:text-4xl lg:leading-[54px] 
          sm:py-2 sm:text-2xl sm:leading-10 
          rounded-lg py-[14px] text-base px-[1px] relative
          ">
          <img src={iconImg} alt="" className="absolute sm:-top-8 sm:-left-7 -top-6 -left-4  p-2   " />
              <div className=" bg-orange/95 p-[14px] rounded-md custom-2xl:mr-4 mr-1 text-grey/15 "> 
              <RiFlashlightFill className="custom-2xl:size-[34px] size-6" /></div>
          {word1}<span className="text-grey/10 custom-2xl:pl-3 pl-1">{line1}</span>
        </div>

        <div className=" text-grey/15 font-medium mt-2
            custom-2xl:text-[38px] custom-2xl:leading-[57px]
            lg:text-[28px] lg:leading-[42px]
            text-2xl leading-9">{line2}</div>

        <div className="flex justify-center items-center text-grey/15 mt-2 font-normal     
            custom-2xl:text-lg
            lg:text-base
            text-sm ">{line3}</div>

        <div className="flex justify-center items-center mt-[50px] gap-2
            ">
          <CustomButton
            btnText={btn1}
            custom={true}
            functionality={() => moveToCourses()} />

          <CustomButton
            btnText={btn2}
            functionality={() => moveToPricing()} />

        </div>

      </div>

    </div>
  )
}

export default Hero
