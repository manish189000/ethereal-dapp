import UserBalance from "../components/UserBalance";
import nodez from "../assets/nodez.svg";
import portfolio from "../assets/portfolio.png";
const DashboardPage = () => {
  return (
    <div>
      <UserBalance />
      <div className=" mt-14 flex h-[60px] gap-3 w-[30%]">
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
      <div className="w-[70%] "></div>

      {/* 
      dfg
      ef
      df
      df
      df
      sdfs
      df
      */}

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
              <div className="inportcntnt w-[60%]">
                <div className="upContent bg-[#121212] h-[80%] p-2">
                  <p className="text-rgba-254 text-[12px] font-openSans">
                    ポートフォリオ
                  </p>
                  <p className="text-white text-sm font-lw ">PORTFOLIO</p>
                </div>
                <div className="downContent h-[20%] bg-[#232323] px-2 flex items-center">
                  <p className=" font-openSans text-[6px] font-bold text-[#14B0D0]">
                    REAL NODEZ Tracking
                  </p>
                </div>
              </div>
              <div className="inportcntnt2 w-[40%]">
                <div className="upContent bg-[#121212] h-[80%] p-2">
                  <p className="text-rgba-254 text-[12px] font-openSans">
                    ノードのアクティブ化
                  </p>
                  <p className="text-white text-sm font-lw ">
                    ACTIVATE NEW NODES
                  </p>
                </div>
                <div className="downContent h-[20%] bg-[#232323] px-2 flex items-center">
                  <p className=" font-openSans text-[6px] font-bold text-[#14B0D0]">
                    Nodez Forge: Empower Your Network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sfd
      fdfg
      fhyk
      jhyty
      juij
       */}

      <div className="detailContainer w-full h-[400px] bg-slate-500 mt-2 flex">
        <div className="leftpart w-[60%] bg-lime-700 ">
          
        </div>
        <div className="rightPart w-[40%] bg-yellow-600 "></div>
      </div>
    </div>
  );
};

export default DashboardPage;
