import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";
import NavBar from "../../ui/NavBar";

// to wrap the public pages with NavBar and Footer
const MainLayout = () => {
  return (
    <div className="bg-white/97">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
