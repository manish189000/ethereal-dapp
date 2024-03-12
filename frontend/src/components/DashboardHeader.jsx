import logo from "../assets/logo.svg";
import connect from "../assets/connect.svg";
import sun from "../assets/sun.svg";
const DashboardHeader = () => {
  return (
    <div className="h-[12%] px-4 border-b-[1px] border-rgba-11 flex justify-between items-center">
      <img src={logo} alt="logo" />
      <div className="flex gap-6 items-center">
        <img src={sun} className=" w-6 cursor-pointer" />
        <button className="bg-gradient-to-r from-rgba-254 to-rgba-11 text-black py-3 px-6 font-bakbak flex items-center gap-3">
          <img src={connect} alt="connect" />
          CONNECT
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
