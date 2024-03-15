import UserBalance from "../components/UserBalance";
import nodez from "../assets/nodez.svg";
import portfolio from "../assets/portfolio.png";
import clock from "../assets/clock.svg";
import NodeName from "../components/NodeName";
import { nodeObject } from "../util/data";
import CandlestickChart from "../components/Candlestickchart";
import DashboardPortfolio from "../components/dashboardpage-components/DashboardPortfolio";

const DashboardPage = () => {
  return (
    <div>
      <UserBalance />
      <div className=" mt-32 air:mt-20 flex air:flex-col justify-between gap-4 w-full">
        <div className="flex flex-col w-[30%] air:w-full">
          <div className=" flex h-16 gap-2 w-full">
            <img src={nodez} alt="nodez" className="bg-rgba-254 p-2" />
            <div
              style={{
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
          <div
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
              borderImageSlice: 1,
            }}
            className="mt-2 w-full border px-3 bg-black py-4 flex"
          >
            <div className="w-[30%] mt-4">
              <p className=" font-poppins text-sm font-semibold text-[#292D32]">
                Total Nodez
              </p>
              <p className=" font-lw text-3xl">0 REAL</p>
            </div>
            <div className="flex w-[70%] flex-col items-center">
              <button
                className={`button-part px-4 py-2 text-sm font-semibold border-black border-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-[2rem] text-[white] font-poppins`}
              >
                Create New Node
              </button>
              <div className="flex flex-col gap-3 mx-6 my-3">
                {nodeObject.map((item) => {
                  return (
                    <NodeName
                      key={Math.random()}
                      img={item.nodeImage}
                      nodeName={item.nodeName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[65%] air:w-full ">
          <div className="flex h-16 gap-2 w-full">
            <img src={clock} alt="clock" className="bg-rgba-254 py-2 px-3" />
            <div
              style={{
                float: "left",
                webkitClipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 0% 100%)",
                clipPath: "polygon(96% 0, 100% 35%, 100% 100%, 0 100%, 0 0)",
              }}
              className="h-full w-full"
            >
              <div className="bg-[#121212] h-[80%] p-2">
                <p className="text-rgba-254 text-[12px] font-openSans">
                  追跡価格
                </p>
                <p className="text-white text-sm font-lw ">
                  REAL TOKEN PRICES 24h
                </p>
              </div>
              <div className="h-[20%] bg-[#232323] px-2 flex items-center">
                <p className=" font-openSans text-[6px] font-bold text-[#14B0D0] uppercase">
                  Real-Time Insights
                </p>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <CandlestickChart />
          </div>
        </div>
      </div>

      <div className="portfolio">
        <div className="inSection1 mt-14 flex h-16 gap-3 w-full">
          <img src={portfolio} alt="nodez" className="bg-rgba-254 py-2 px-3" />
          <div
            style={{
              float: "left",
              webkitClipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 0% 100%)",
              clipPath: "polygon(98% 0, 100% 35%, 100% 100%, 0 100%, 0 0)",
            }}
            className="h-full w-full"
          >
            <div className="cntnt flex justify-between">
              <div className="inportcntnt w-[75%] md:w-full">
                <div className="upContent bg-[#121212] h-[80%] p-2">
                  <p className="text-rgba-254 text-[12px] font-openSans">
                    ポートフォリオ
                  </p>
                  <p className="text-white text-sm font-lw ">PORTFOLIO</p>
                </div>
                <div className="downContent h-[20%] bg-[#232323] px-2 flex items-center">
                  <p className=" font-openSans text-[6px] font-bold text-[#14B0D0] uppercase">
                    REAL NODEZ Tracking
                  </p>
                </div>
              </div>
              <div className="inportcntnt2 md:hidden w-[25%]">
                <div className="upContent bg-[#121212] h-[80%] p-2">
                  <p className="text-rgba-254 text-[12px] font-openSans">
                    ノードのアクティブ化
                  </p>
                  <p className="text-white text-sm font-lw ">
                    ACTIVATE NEW NODES
                  </p>
                </div>
                <div className="downContent h-[20%] bg-[#232323] px-2 flex items-center">
                  <p className=" font-openSans text-[6px] font-bold text-[#14B0D0] uppercase">
                    Nodez Forge: Empower Your Network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashboardPortfolio />
    </div>
  );
};

export default DashboardPage;
