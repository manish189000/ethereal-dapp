import { Outlet } from "react-router-dom";
import DashboardHeader from "./components/header/DashboardHeader";

const Layout = () => {
  return (
    <div className="h-dvh bg-black w-full">
      <DashboardHeader />
      <div className="w-[15%] border h-[88%] bg-[#08090A]"></div>
      <Outlet />
    </div>
  );
};

export default Layout;
