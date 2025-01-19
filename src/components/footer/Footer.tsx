
import { contactInfoData } from "../../data/contactinfo";
import img from '../../assets/img/Logo.png'
import { NavLink } from "react-router-dom";
import { ContactInfoCardProps } from "../../ui/ContactInfoCard";
import FooterList, { aboutlinks, homelinks, icons } from "./FooterList";


const Footer = () => {

  const limit: number = 3;
  const lastItem: ContactInfoCardProps | undefined = contactInfoData[contactInfoData.length - 1];

  return (
    <footer className="bg-white">
      <div className="custom-container bg-white font-vietnam mt-[100px]">
        <div className="flex md:flex-nowrap flex-wrap justify-between items-center sm:pt-[100px] sm:pb-14 pt-[50px] pb-5 "  >
          <div className=" flex justify-start items-start">
            <ul>
              <li className="sm:mb-9 mb-6"><img src={img} alt="" /></li>
              {contactInfoData.slice(0, limit).map((info, index) => (
                <li className="flex justify-start items-center gap-2 font-normal text-grey/15 custom-2xl:text-lg lg:text-base text-[15px] leading-[22.5px] my-5"
                  key={index}>
                  <span className="text-xl ">{info.icons}</span>{info.info}
                </li>
              ))}

            </ul>
          </div>
          <div className="flex sm:flex-nowrap flex-wrap sm:justify-evenly justify-start items-start sm:w-3/5 w-full gap-[30px] sm:my-0 my-2">
            <FooterList>
              <ul className=" ">
                <li className=" font-semibold custom-2xl:text-xl custom-2xl:leading-[30px] text-lg text-grey/15 "><NavLink to={'/'}>Home</NavLink></li>
                {
                  homelinks.map((e, i) => {
                    return <li key={i} className="mt-2 font-normal custom-2xl:text-lg lg:text-base text-sm text-grey/35 "><a href={e.id}>{e.name}</a> </li>
                  })
                }
              </ul>
            </FooterList>

            <FooterList>
              <ul className="">
                <li className=" font-semibold custom-2xl:text-xl custom-2xl:leading-[30px] text-lg text-grey/15 "><NavLink to={'/aboutus'}>About Us</NavLink></li>
                {
                  aboutlinks.map((e, i) => {
                    return <li key={i} className="mt-2 font-normal custom-2xl:text-lg lg:text-base text-sm text-grey/35 "><a href={e.id}>{e.name}</a> </li>
                  })
                }
              </ul>
            </FooterList>
            <FooterList>
              <ul className="flex-wrap justify-start items-center gap-1">
                <li className="font-semibold custom-2xl:text-xl custom-2xl:leading-[30px] text-lg text-grey/15 mb-[14px]">{lastItem.info}</li>
                <li className="flex gap-[10px] font-semibold custom-2xl:text-xl custom-2xl:leading-[30px] text-lg text-grey/15 ">
                  {icons.map((e, i) => {
                    return <span key={i} className="bg-white/97 border-1 border-white/95 custom-2xl:p-[14px] custom-2xl:rounded-lg p-3 rounded-md cursor-pointer">{e.icon}</span>
                  })}
                </li>
              </ul>
            </FooterList>
          </div>
        </div>

        <div className="flex justify-center items-center sm:py-[30px] py-6 border-t-1 border-white/95
        text-grey/40 font-normal custom-2xl:text-lg text-sm">
          <p>© 2023 Skillbridge. All rights reserved.</p> </div>

      </div>
    </footer>
  )
}

export default Footer