import React from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const ApproveWithdrawStatement = ({ sr, account, amount, approved }) => {
  return (
    <>
      <div className="tableContents min-w-[434px]  flex border-2 border-gray-900 bg-black mt-4 ">
        <div className="content4 py-4 w-[10%] flex justify-center items-center text-center text-white font-lw font-normal">
          {sr}
        </div>
        <div className="content1 py-4 w-[40%] text-center text-white font-lw font-normal">
          {account}
        </div>
        <div className="content2 py-4 w-[25%] text-center text-white font-lw font-normal">
          ${amount}
        </div>
        <div className="content3 py-4 w-[25%] flex justify-center items-center text-white font-lw font-normal">
          {approved ? (
            <TiTick className="text-green-500 text-2xl" />
          ) : (
            <RxCross2 className="text-red-500 text-2xl" />
          )}
        </div>
      </div>
    </>
  );
};

export default ApproveWithdrawStatement;
