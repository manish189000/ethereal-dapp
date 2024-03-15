/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */

// const WithdrawStatement = ({
//   borderImageSource,
//   leftPartIconSrc,
//   rightPartIconText,
//   zeroText,
//   dollarZero,
//   arrowSrc,
//   realText,
//   buttonText,
//   buttonBgGradient,
//   threeDotsSrc,
// }) => {
//   return (
//     <div
//       className="child-part mt-10 h-[4rem] mx-[4rem] mb-[2rem] py-4"
//       style={{
//         border: "1px solid",
//         borderImageSource:
//           borderImageSource ||
//           "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
//         borderImageSlice: 1,
//       }}
//     >
//       <div className="real-part flex ">
//         <div className="left-part-icon  w-[5rem] pl-6">
//           <img src={leftPartIconSrc} alt="" />
//         </div>
//         <div className="right-part-icon text-[white] pl-1 w-[8rem] font-lw">
//           {rightPartIconText}
//         </div>
//         <div className="zero-text text-[white]  w-4 pl-[4rem]">{zeroText}</div>
//         {/* <div className="dollar-zero text-[white]  font-lw  pl-[4rem] ">
//           {dollarZero}
//         </div> */}
//         <div className="arrow pt-2 pl-[2rem] ">
//           <img src={arrowSrc} alt="" />
//         </div>
//         <div className="real-text text-[white] pl-[1rem] font-lw">
//           {realText}
//         </div>
//         <button
//           className={`button-part w-[6rem] h-[2rem]  ml-[25rem] border-black border-2 ${buttonBgGradient} rounded-[2rem] text-[white] px-5 font-lw`}
//         >
//           {buttonText}
//         </button>
//         <div className="three-dots  w-7 pl-[1rem] pt-1">
//           <img src={threeDotsSrc} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawStatement;
import threedot from "../assets/row01.svg";
import arrow from "../assets/Arrow.svg";
const WithdrawStatement = ({ nodeImage, nodeName }) => {
  return (
    <div className="px-4 py-4 bg-black my-2 w-full min-w-[760px] border-2 border-gray-900 flex justify-between items-center ">
      <div className="flex items-center gap-2 w-[25%] lg2:w-[20%]">
        <img src={nodeImage} className="w-8" />
        <p className=" font-lw text-sm">{nodeName}</p>
      </div>
      <div className="flex items-center gap-6 lg2:gap-4 w-[55%] lg2:w-[35%]">
        <p className=" font-lw font-[14px]">$0,0000000</p>
        <img src={arrow} className=" w-3" />
        <p className=" font-lw font-[14px] ">0,0000000 REAL</p>
      </div>
      <div className="flex items-center justify-between gap-8 lg2:gap-4 w-[20%]">
        <button
          className={`button-part px-6 py-1 text-sm font-semibold border-black border-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-[2rem] text-[white] font-poppins`}
        >
          Withdraw
        </button>
        <img src={threedot} />
      </div>
    </div>
  );
};

export default WithdrawStatement;
