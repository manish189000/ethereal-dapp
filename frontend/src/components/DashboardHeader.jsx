import logo from "../assets/logo.svg";
import connect from "../assets/connect.svg";
import sun from "../assets/sun.svg";
const DashboardHeader = () => {
  function changeDarkMode() {}
  return (
    <div className="h-[12%] sm:h-[10%] px-4 sm:px-2 border-b-[1px] border-rgba-11 flex justify-between items-center">
      <img src={logo} alt="logo" className=" sm:w-40" />
      <div className="flex gap-6 sm:gap-3 items-center">
        <img
          onClick={changeDarkMode}
          src={sun}
          className=" w-6 sm:w-5 cursor-pointer"
        />
        <button className="bg-gradient-to-r from-rgba-254 to-rgba-11 text-black sm:text-sm py-3 sm:py-2 px-6 sm:px-3 font-bakbak flex items-center gap-3">
          <img src={connect} alt="connect" className=" sm:w-4" />
          CONNECT
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
