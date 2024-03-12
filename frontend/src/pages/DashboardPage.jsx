import UserBalance from "../components/UserBalance";
import nodez from "../assets/nodez.svg";
import clock from "../assets/clock.svg";
import particle_node from "../assets/particle_node.svg";
import master_node from "../assets/master_node.svg";
import obtuse_node from "../assets/obtuse_node.svg";
import canon_node from "../assets/canon_node.svg";
import NodeName from "../components/NodeName";
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
                backgroundColor: "blue",
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
                backgroundColor: "blue",
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
    </div>
  );
};

export default DashboardPage;
