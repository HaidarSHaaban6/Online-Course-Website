import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";
import NavBar, { LinkData } from "../../ui/NavBar";
import Banner from "../../components/Banner";
import logo from "./../../assets/img/Logo.png";

// to wrap the public pages with NavBar and Footer
const MainLayout = () => {
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
