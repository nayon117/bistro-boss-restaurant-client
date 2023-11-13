import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
