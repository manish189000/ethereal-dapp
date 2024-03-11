import { Outlet } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div className="h-dvh bg-black w-full">
      <DashboardHeader />
      <div className="w-full flex h-[88%]">
        <Sidebar />
        <div className="w-[85%] h-full overflow-y-scroll px-16 py-6 no-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
