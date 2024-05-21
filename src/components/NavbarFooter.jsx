import Navbars from "./Navbars";
import Footers from "./Footers";
import { Outlet } from "react-router-dom";

const NavbarFooter = () => {
  return (
    <>
      <Navbars />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footers />
    </>
  );
};

export default NavbarFooter;
