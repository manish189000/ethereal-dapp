import logo from "../../assets/logo.svg";
import connect from "../../assets/connect.svg";

const DashboardHeader = () => {
  return (
    <div className="h-[12%] px-4 border-b-[1px] border-rgba-11 flex justify-between items-center">
      <img src={logo} alt="logo" />
      <button className="bg-gradient-to-r from-rgba-254 to-rgba-11 text-black py-3 px-6 font-bakbak flex items-center gap-3">
        <img src={connect} alt="connect" />
        CONNECT
      </button>
    </div>
  );
};

export default DashboardHeader;
