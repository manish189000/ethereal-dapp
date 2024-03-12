import UserBalance from "../components/UserBalance";
import nodez from "../assets/nodez.svg";

const DashboardPage = () => {
  return (
    <div>
      <UserBalance />
      <div className=" mt-14 flex h-[60px] gap-3 w-[30%]">
        <img src={nodez} alt="nodez" className="bg-rgba-254 p-2" />
        <div
          style={{
            backgroundColor: "blue",
            // width: "800px",
            // height: "280px",
            float: "left",
            webkitClipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 0% 100%)",
            clipPath: "polygon(92% 0, 100% 35%, 100% 100%, 0 100%, 0 0)",
          }}
          className="h-full w-full"
        >
          <div className="bg-[#121212] h-[80%] p-2">
            <p className="text-rgba-254 text-[12px] font-openSans">
              総ノード数
            </p>
            <p className="text-white text-sm font-lw ">TOTAL NODEZ</p>
          </div>
          <div className="h-[20%] bg-[#232323] px-2 flex items-center">
            <p className=" font-openSans text-[6px] font-bold text-[#14B0D0]">
              TRACKING
            </p>
          </div>
        </div>
      </div>
      <div className="w-[70%] "></div>
    </div>
  );
};

export default DashboardPage;
