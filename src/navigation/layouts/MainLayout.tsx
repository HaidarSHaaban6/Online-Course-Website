import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavBar, { LinkData } from "../../ui/NavBar";
import Banner from "../../components/Banner";
import logo from "./../../assets/img/Logo.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AuthService from "../../Services/AuthService";

// to wrap the public pages with NavBar and Footer
const MainLayout = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const linkData: LinkData[] = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Courses",
      link: "/courses",
    },
    {
      text: "About Us",
      link: "/aboutus",
    },
    {
      text: "Pricing",
      link: "/pricing",
    },
    {
      text: "contact",
      link: "/contact",
    },
  ];
  if (currentUser && AuthService.isUserAnAdmin(currentUser))
    linkData.push({
      text: "Dashboard",
      link: "/dashboard",
    });

  return (
    <div className="bg-white/97 min-h-screen">
      <Banner />
      <div className="relative">
        <NavBar logo={logo} links={linkData} />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
