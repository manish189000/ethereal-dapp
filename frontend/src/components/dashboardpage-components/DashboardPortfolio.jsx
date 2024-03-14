import arrow from "../../assets/Arrow.svg";
import { nodeObject } from "../../util/data";
import DashboardStatement from "../DashboardStatement";

const DashboardPortfolio = () => {
  return (
    <div
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
        borderImageSlice: 1,
      }}
      className="detailContainer w-full mt-2 flex sm:flex-col"
    >
      <div className="leftpart backdrop-blur-sm  w-[75%] sm:w-full border-r-2 border-[#0E0E0E] px-14 air:px-4 py-8">
        <div className=" py-4 w-full overflow-x-scroll custom-scrollbar">
          <div className="text-item flex w-[100%] min-w-[766px] ">
            <div className="name-text text-[#292D32] w-[20%] text-center text-[12px] font-lw font-[700] ">
              Name
            </div>
            <div className="name-text text-[#292D32] w-[18%] text-center text-[12px] font-lw font-[700] ">
              Asset
            </div>
            <div className="name-text text-[#292D32] w-[10%] text-center text-[12px] font-lw font-[700] ">
              Mining Rate
            </div>

            <div className="miningtext text-[#292D32] w-[18%] text-center text-[12px] font-lw font-[700]">
              Earnings
            </div>
          </div>
          {nodeObject.map((item) => {
            return (
              <DashboardStatement
                key={Math.random()}
                nodeImage={item.nodeImage}
                nodeName={item.nodeName}
              />
            );
          })}
        </div>
      </div>
      <div className="rightPart w-[25%] py-8 sm:py-0 sm:w-full">
        <div className="w-full flex items-center py-4 justify-center flex-col">
          <p className=" font-lw text-[#292D32] text-[12px] text-start">
            Name:
          </p>
          {nodeObject.map((item) => {
            return (
              <div
                key={Math.random()}
                className="w-[90%] bg-black px-2 py-3 my-2 flex items-center gap-4 border-2 border-[#0E0E0E]"
              >
                <img src={item.nodeImage} className="w-7" />
                <p className=" font-lw text-sm">{item.nodeName}</p>
              </div>
            );
          })}
          <div
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
              borderImageSlice: 1,
            }}
            className="flex lg2:flex-col lg2:gap-3 w-[90%] border-2 p-2 my-2 items-center justify-between"
          >
            <div className="flex gap-3">
              <p className=" font-lw text-[14px]">$3000</p>
              <img src={arrow} className="w-4" />
              <p className=" font-lw text-[14px]">REAL</p>
            </div>
            <button
              className={`button-part px-4 py-2 text-[12px] lg2:w-full font-semibold border-black border-2 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500  rounded-[2rem] text-[white] font-poppins`}
            >
              Activate Node
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPortfolio;
