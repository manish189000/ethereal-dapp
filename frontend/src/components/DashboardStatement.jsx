/* eslint-disable react/prop-types */

import threedot from "../assets/row01.svg";
import arrow from "../assets/Arrow.svg";
import add from "../assets/add.svg";
import marketgraph from "../assets/marketgraph.svg";

const DashboardStatement = ({ nodeImage, nodeName }) => {
  return (
    <div className="px-4 py-4 my-3 w-full min-w-[766px] border-2 border-gray-900 flex justify-between items-center">
      <div className="flex items-center gap-2 w-[20%]">
        <img src={nodeImage} className="w-8" />
        <p className=" font-lw text-sm">{nodeName}</p>
      </div>
      <div className="flex items-center justify-between w-[25%]">
        <div className="w-[40%]">
          <button
            className={`button-part w-full flex items-center justify-between px-3 py-1 text-sm font-semibold border-black border-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-[2rem] text-[white] font-poppins`}
          >
            0 <img src={add} className=" w-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 w-[50%]">
          <p className=" font-lw font-[14px]">$0</p>
          <img src={arrow} className=" w-3" />
          <p className=" font-lw font-[14px] ">REAL</p>
        </div>
      </div>
      <div className="flex items-center gap-4 w-[30%]">
        <div className="flex items-center gap-2 w-[60%]">
          <p className=" font-lw font-[14px]">$0</p>
          <img src={arrow} className=" w-3" />
          <p className=" font-lw font-[14px] ">REAL</p>
        </div>
        <img src={marketgraph} />
      </div>

      <div className="flex items-center justify-between gap-4 w-[15%]">
        <button
          className={`button-part px-4 py-1 text-sm font-semibold border-black border-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-[2rem] text-[white] font-poppins`}
        >
          Details
        </button>
        <img src={threedot} />
      </div>
    </div>
  );
};

export default DashboardStatement;
