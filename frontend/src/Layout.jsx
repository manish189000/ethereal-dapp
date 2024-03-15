import { Outlet } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import cube from "../src/assets/cube.svg";
import { RiMenu2Line } from "react-icons/ri";
import ResponsiveSidebar from "./components/ResponsiveSidebar";
import { useState } from "react";

const Layout = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="h-dvh bg-black w-full relative overflow-hidden">
      <DashboardHeader />
      <div className="w-full z-[1000] relative flex lg2:block h-[88%] sm:h-[90%]">
        <Sidebar />
        <div className=" hidden lg2:block text-2xl px-16 air:px-4 py-4 h-[10%]">
          <RiMenu2Line onClick={() => setShowNavbar(!showNavbar)} />
        </div>
        <ResponsiveSidebar
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
        />
        <div className=" w-full lg2:w-full lg2:h-[90%] h-full overflow-y-scroll px-16 air:px-4 pt-24 pb-6 lg2:pt-6 no-scrollbar">
          <Outlet />
        </div>
      </div>
      <img
        src={cube}
        className="cubeContainer absolute top-[43%] z-10 left-5"
      />
      <img
        src={cube}
        className="cubeContainer absolute top-[25%] z-10 -right-32"
      />
      <img
        src={cube}
        className="cubeContainer absolute bottom-[-35%] z-10 right-[40%]"
      />
    </div>
  );
};

export default Layout;
