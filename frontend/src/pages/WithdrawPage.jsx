import UserBalance from "../components/UserBalance";
import withdraw_icon from "../assets/withdraw_icon.svg";
import WithdrawStatement from "../components/WithdrawStatement";
import { nodeObject } from "../util/data";

const WithdrawPage = () => {
  return (
    <>
      <UserBalance />
      <div className="mt-14">
        <div className=" flex h-16 gap-2 w-full">
          <img src={withdraw_icon} alt="wicon" className="bg-rgba-254 p-2" />
          <div
            style={{
              backgroundColor: "blue",
              float: "left",
              webkitClipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 0% 100%)",
              clipPath: "polygon(97% 0, 100% 35%, 100% 100%, 0 100%, 0 0)",
            }}
            className="h-full w-full"
          >
            <div className="bg-[#121212] h-[80%] p-2">
              <p className="text-rgba-254 text-[12px] font-openSans">
                ツイッタープラットフォーム
              </p>
              <p className="text-white text-sm font-lw "> PENDING WITHDRAWS</p>
            </div>
            <div className="h-[20%] bg-[#232323] px-2 flex items-center">
              <p className=" font-openSans text-[6px] font-bold text-[#14B0D0]">
                JOIN THE CONVERSATION
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid",
          borderImageSource:
            "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
          borderImageSlice: 1,
        }}
        className=" mt-4 px-14 air:px-4 py-8 bg-opacity-50 backdrop-blur-sm"
      >
        {/* // <<<<<<< changes */}
        <div className=" py-4 w-full overflow-x-scroll">
          <div className="text-item flex w-[100%] ">
            <div className="name-text text-[#292D32] w-[20%] lg2:w-[25%] min-w-[191px] text-center font-lw font-[700] ">
              Name
            </div>
            <div className="miningtext text-[#292D32] w-[35%] lg2:w-[45%] min-w-[343px] text-center font-lw font-[700]">
              Earnings
            </div>
          </div>
          {/* // =======
//         <div className="text-item flex  w-[100%] ">
//           <div className="name-text text-[#292D32] w-[20%] text-center font-lw font-[700] ">
//             Name
//           </div>
//           <div className="miningtext text-[#292D32] w-[35%] text-center font-lw font-[700]">
//             Earnings
//           </div>
//         </div>
//         <div className=" py-4 w-full  xl:overflow-x-scroll  2xl:overflow-hidden "> 
// >>>>>>> main */}
          {nodeObject.map((item) => {
            return (
              <WithdrawStatement
                key={Math.random()}
                nodeImage={item.nodeImage}
                nodeName={item.nodeName}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WithdrawPage;
