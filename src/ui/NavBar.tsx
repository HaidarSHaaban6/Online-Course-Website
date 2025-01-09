import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ColorPickerService from "../Services/ColorPickerService";
import { useRef, useState } from "react";
import { logUserOut } from "../redux/slice/authenticationSlice";
import { IoCloseOutline } from "react-icons/io5";

export interface LinkData {
  text: string;
  link: string;
}

interface NavBarProps {
  logo: string;
  links: LinkData[];
}

const NavBar = ({ logo, links }: NavBarProps) => {
  const [popUp, setPopUp] = useState(false);
  const [navShow, setNavShow] = useState(false);
  const color = useRef(ColorPickerService.pickColor());
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  return (
    <div className="py-3.5 w-full bg-white/97 lg:py-4 custom-2xl:py-5 top-0 sticky z-50 font-vietnam">
      <div className="custom-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[50px]">
            <img
              src={logo}
              alt="logo"
              className="w-10
              lg:w-11
              custom-2xl:w-[54px]"
            />
            <div
              className={`items-center gap-y-[26px] fixed top-0 left-0 w-full h-screen bg-white/97 z-50 flex justify-center flex-col duration-300 ${
                navShow ? "translate-x-0" : "translate-x-full"
              }
            lg:flex-row lg:relative lg:h-fit lg:flex lg:justify-start lg:translate-x-0`}
            >
              <IoCloseOutline
                className="
              absolute top-10 right-10 text-4xl
              lg:hidden
              "
                onClick={() => setNavShow(!navShow)}
              />
              {links.map((element, index) => (
                <NavLink
                  to={element.link}
                  key={index}
                  className={({ isActive }) => `text-sm text-grey/15 duration-300 py-3 px-5
                  ${
                    element.link == "/dashboard" && " text-orange/50 "
                  }
                    ${
                      isActive
                        ? " rounded-md bg-white/95"
                        : ""
                    }`}
                  onClick={() => setNavShow(!navShow)}
                >
                  {element.text}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {currentUser ? (
              <div className="flex items-center gap-x-5">
                <p className="text-base text-grey/15 font-semibold hidden md:block">
                  {currentUser.fullName}
                </p>
                <div
                  className="w-10 rounded-full flex items-center justify-center aspect-square relative
                            lg:w-11
                            custom-2xl:w-[54px]
                            hover:cursor-pointer"
                  style={{ backgroundColor: color.current }}
                  onClick={() => setPopUp(!popUp)}
                >
                  <p className="text-xl font-black text-white uppercase">
                    {currentUser.fullName[0]}
                  </p>
                  {popUp && (
                    <div
                      className="bg-white rounded-md absolute top-[115%] right-0 px-5 py-3
                  lg:px-6
                  custom-2xl:py-3.5 custom-2xl:px-[34px] "
                    >
                      <p
                        className="whitespace-nowrap"
                        onClick={() => {
                          dispatch(logUserOut());
                          setPopUp(!popUp);
                        }}
                      >
                        Log Out
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/signUp"
                  className="text-grey/15 pr-5 text-sm font-vietnam
              lg:pr-8"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="text-white bg-orange/50 rounded-md px-5 py-3 duration-300 text-sm font-vietnam
                lg:px-6
                custom-2xl:py-3.5 custom-2xl:px-[34px]
                hover:bg-orange/70"
                >
                  Login
                </Link>
              </>
            )}
            <HiMenuAlt3
              className="text-3xl ml-5 lg:hidden"
              onClick={() => setNavShow(!navShow)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
