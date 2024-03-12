import UserBalance from "../components/UserBalance";
import withdraw_icon from "../assets/withdraw_icon.svg";

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
        className=" mt-14 h-16"
      ></div>
    </>
  );
};

export default WithdrawPage;
