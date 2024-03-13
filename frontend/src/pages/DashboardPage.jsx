import UserBalance from "../components/UserBalance";
import nodez from "../assets/nodez.svg";
import portfolio from "../assets/portfolio.png";
import clock from "../assets/clock.svg";
import particle_node from "../assets/particle_node.svg";
import master_node from "../assets/master_node.svg";
import arrow from "../assets/Arrow.svg";
import obtuse_node from "../assets/obtuse_node.svg";
import canon_node from "../assets/canon_node.svg";
import NodeName from "../components/NodeName";
import { nodeObject } from "../util/data";
import DashboardStatement from "../components/DashboardStatement";

const DashboardPage = () => {
  return (
    <div>
      <UserBalance />
      <div className="mt-14 flex justify-between gap-4 w-full">
        <div className="flex flex-col w-[30%]">
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
          <div className="mt-2 w-full border px-3 py-4 flex">
            <div className="w-[50%] mt-4">
              <p className=" font-poppins text-sm font-semibold text-[#292D32]">
                Total Nodez
              </p>
              <p className=" font-lw text-3xl">0 REAL</p>
            </div>
            <div>
              <button
                className={`button-part px-4 py-2 text-sm font-semibold border-black border-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-[2rem] text-[white] font-poppins`}
              >
                Create New Node
              </button>
              <div className="flex flex-col gap-2 mx-6 my-4">
                <NodeName img={particle_node} nodeName={"Particle Nodes"} />
                <NodeName img={canon_node} nodeName={"Canon Node"} />
                <NodeName img={obtuse_node} nodeName={"Obtuse Node"} />
                <NodeName img={master_node} nodeName={"Master Node"} />
                <NodeName img={particle_node} nodeName={"Executive Node"} />
                <NodeName img={canon_node} nodeName={"Partner Node"} />
                <NodeName img={particle_node} nodeName={"Founder Node"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[65%] ">
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
        </div>
      </div>
      <div className="w-[70%] "></div>
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
              <div className="inportcntnt w-[75%]">
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
              <div className="inportcntnt2 w-[25%]">
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
      <div
        style={{
          border: "1px solid",
          borderImageSource:
            "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
          borderImageSlice: 1,
        }}
        className="detailContainer w-full mt-2 flex"
      >
        <div
          // style={{
          //   border: "1px solid",
          //   borderImageSource:
          //     "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
          //   borderImageSlice: 1,
          // }}
          className="leftpart w-[75%] border-r-2 border-[#0E0E0E] px-14 py-8"
        >
           <div className="text-item flex  w-[100%] ">
            <div className="name-text text-[#292D32] w-[20%] text-center font-lw font-[700] ">Name</div>
            <div className="name-text text-[#292D32] w-[18%] text-center font-lw font-[700] ">Asset</div>
           <div className="name-text text-[#292D32] w-[10%] text-center font-lw font-[700] ">Mining Rate 24h</div>

           <div className="miningtext text-[#292D32] w-[18%] text-center font-lw font-[700]">Earnings</div>
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
        <div className="rightPart w-[25%] py-8">
          <div className="w-full flex items-center justify-center flex-col">
            {nodeObject.map((item) => {
              return (
                <div
                  key={Math.random()}
                  className="w-[90%] px-2 py-3 my-2 flex items-center gap-4 border-2 border-[#0E0E0E]"
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
              className="flex w-[90%] border-2 p-2 my-2 items-center justify-between"
            >
              <p className=" font-lw text-[14px]">$3000</p>
              <img src={arrow} className="w-4" />
              <p className=" font-lw text-[14px]">REAL</p>
              <button
                className={`button-part px-4 py-2 text-[12px] font-semibold border-black border-2 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500  rounded-[2rem] text-[white] font-poppins`}
              >
                Activate Node
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
