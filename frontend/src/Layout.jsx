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
      <div className="w-full z-[1000] relative flex  h-[88%] sm:h-[90%]">
        {/* xl:block */}
        <Sidebar />
        <div className=" hidden text-2xl px-16 air:px-4 py-4 h-[10%]">
          {/* xl:block  */}
          <RiMenu2Line onClick={() => setShowNavbar(!showNavbar)} />
        </div>
        <ResponsiveSidebar
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
        />
        <div className=" flex-auto xl:w-full  h-full overflow-y-scroll px-16 air:px-4 pt-24 pb-6 no-scrollbar">
          {/* xl:h-[90%] */}
          {/* xl:pt-0 */}
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
