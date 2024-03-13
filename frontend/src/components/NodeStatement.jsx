import React from "react";
import threedot from "../assets/row01.svg";
import arrow from "../assets/Arrow.svg";

const NodeStatement = ({ nodeImage, nodeName }) => {
  return (
    <div className="px-4 py-4 my-2 w-full border-2 border-gray-900 flex justify-between items-center">
      <div className="flex items-center gap-2 w-[20%]">
        <img src={nodeImage} className="w-8" />
        <p className=" font-lw text-sm">{nodeName}</p>
      </div>
      <div className="zero  font-lw font-[14px] w-[10%]">0</div>
      <div className="flex items-center gap-6 w-[58%]">
        <p className=" font-lw font-[14px]">$0,0000000</p>
        <img src={arrow} className=" w-3" />
        <p className=" font-lw font-[14px]  ">0,0000000 REAL</p>
      </div>
      <div className="flex items-center justify-between gap-2 w-[12%]">
        <button
          className={`button-part px-6 py-1 text-sm font-semibold border-black border-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-[2rem] text-[white] font-poppins`}
        >
          Create
        </button>
        <img src={threedot} />
      </div>
    </div>
  );
};

export default NodeStatement;
