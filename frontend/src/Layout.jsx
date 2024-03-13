import { Outlet } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import cube from "../src/assets/cube.svg";
const Layout = () => {
  return (
    <div className="h-dvh bg-black w-full relative overflow-hidden">
      <DashboardHeader />
      <div className="w-full flex h-[88%]">
        <Sidebar />
        <div className="w-[85%] h-full overflow-y-scroll px-16 py-6 no-scrollbar">
          <Outlet />
        </div>
      </div>
      <img src={cube} className="cubeContainer absolute top-[43%] left-5" />
      <img src={cube} className="cubeContainer absolute top-[25%] -right-32" />
      <img
        src={cube}
        className="cubeContainer absolute bottom-[-35%] right-[40%]"
      />
      0{" "}
    </div>
  );
};

export default Layout;
