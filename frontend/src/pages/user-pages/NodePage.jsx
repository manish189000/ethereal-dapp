// import nodez from "../assets/nodez.svg";
// // import SuareIcon2 from "../assets/Vector.svg";
// import Arrow from "../assets/Arrow.svg";
// import ThreeDots from "../assets/row01.svg";
// import CustomComponent from "./CustomComponent";
// import particle_node from "../assets/particle_node.svg";
// import master_node from "../assets/master_node.svg";
// import obtuse_node from "../assets/obtuse_node.svg";
// import canon_node from "../assets/canon_node.svg";

// import Poly from "../assets/poly.svg";
// import Leftbg from "../assets/left-bg.svg";
// import UserBalance from "../components/UserBalance";

// const NodePage = () => {
//   return (
//     <>
//       <UserBalance />
//       <div className="parent-part mt-14 flex items-center gap-4">
//         <div className="left-icon bg-[#fe1bf1] w-[5rem] h-[4rem] px-[0.7rem] py-[0.7rem]">
//           <img src={nodez} alt="Square Icon" />
//         </div>

//         <div className="right-part text-white w-[100%] bg-[#121212] ">
//           <div className="list1 text-[#FE1BF1] font-lw ">保留中の引き出し</div>
//           <div className="list2 font-bold font-lw">NODE </div>
//           <div className="list3 text-[#0BFFFF] font-lw bg-[#232323]">
//             Withdrawals in Progress
//           </div>
//         </div>
//       </div>
//       {/* <div className="baground-image absolute left-3 -z-2 ">
//         <img src={Poly} alt="" />
//       </div> */}
//       <div
//         className="child-part mt-14 h-[auto]px-6"
//         style={{
//           border: "1px solid",
//           borderImageSource:
//             "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
//           borderImageSlice: 1,
//         }}
//       >
//         <div className="sub-child text-[#292D32] flex items-center gap-3 pl-11 pt-2">
//           <div className="name font-lw pl-[7rem]">Name</div>
//           <div className="mining-rate pl-[16rem]">Mining Rate</div>
//         </div>

//         <CustomComponent
//           borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
//           leftPartIconSrc={particle_node}
//           rightPartIconText="Particle Nodes"
//           zeroText="0"
//           dollarZero="$ 0"
//           arrowSrc={Arrow}
//           realText="0.0000 REAL"
//           buttonText="Create"
//           buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
//           threeDotsSrc={ThreeDots}
//         />
//         <CustomComponent
//           borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
//           leftPartIconSrc={canon_node}
//           rightPartIconText="Canon Node"
//           zeroText="0"
//           dollarZero="$ 0"
//           arrowSrc={Arrow}
//           realText="0.0000 REAL"
//           buttonText="Create"
//           buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
//           threeDotsSrc={ThreeDots}
//         />
//         <CustomComponent
//           borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
//           leftPartIconSrc={obtuse_node}
//           rightPartIconText="Obtuse Nodes"
//           zeroText="0"
//           dollarZero="$ 0"
//           arrowSrc={Arrow}
//           realText="0.0000 REAL"
//           buttonText="Create"
//           buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
//           threeDotsSrc={ThreeDots}
//         />
//         <CustomComponent
//           borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
//           leftPartIconSrc={master_node}
//           rightPartIconText="Master Nodes"
//           zeroText="0"
//           dollarZero="$ 0"
//           arrowSrc={Arrow}
//           realText="0.0000 REAL"
//           buttonText="Create"
//           buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
//           threeDotsSrc={ThreeDots}
//         />

//         <CustomComponent
//           borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
//           leftPartIconSrc={particle_node}
//           rightPartIconText="Executive Nodes"
//           zeroText="0"
//           dollarZero="$ 0"
//           arrowSrc={Arrow}
//           realText="0.0000 REAL"
//           buttonText="Create"
//           buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
//           threeDotsSrc={ThreeDots}
//         />
//         <CustomComponent
//           borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
//           leftPartIconSrc={particle_node}
//           rightPartIconText="Partner Nodes"
//           zeroText="0"
//           dollarZero="$ 0"
//           arrowSrc={Arrow}
//           realText="0.0000 REAL"
//           buttonText="Create"
//           buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
//           threeDotsSrc={ThreeDots}
//         />
//         <CustomComponent
//           borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
//           leftPartIconSrc={particle_node}
//           rightPartIconText="Founder Nodes"
//           zeroText="0"
//           dollarZero="$ 0"
//           arrowSrc={Arrow}
//           realText="0.0000 REAL"
//           buttonText="Create"
//           buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
//           threeDotsSrc={ThreeDots}
//         />
//         {/* <div className="baground-image absolute  top-[10rem] w-[20rem] left-[76rem] ">
//           <img src={Leftbg} alt="" />
//         </div> */}
//       </div>
//     </>
//   );
// };
// export default NodePage;
import UserBalance from "../../components/UserBalance";
import nodez from "../../assets/nodez.svg";
import NodeStatement from "../../components/NodeStatement";
import { nodeObject } from "../../util/data";

const NodePage = () => {
  return (
    <>
      <UserBalance />
      <div className="nodeContainer">
        <div className="inSection1 mt-28 flex h-16 gap-3 w-full">
          <img src={nodez} alt="nodez" className="bg-rgba-254 py-2 px-3" />
          <div
            style={{
              float: "left",
              webkitClipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 0% 100%)",
              clipPath: "polygon(98% 0, 100% 35%, 100% 100%, 0 100%, 0 0)",
            }}
            className="h-full w-full"
          >
            <div className="cntnt h-full flex justify-between">
              <div className="inportcntnt w-full">
                <div className="upContent bg-[#121212] h-[80%] p-2">
                  <p className="hidden text-rgba-254 text-[12px] font-openSans">
                    保留中の引き出し
                  </p>
                  <p className="text-white text-sm font-lw ">NODE</p>
                </div>
                <div className="downContent h-[20%] bg-[#232323] px-2 flex items-center">
                  <p className=" font-openSans text-[6px] font-bold text-[#14B0D0]">
                    WITHDRAWALS IN PROGRESS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gapg
      gapg
      gaph
      sdfg
      dghryt
      dth */}

      <div
        style={{
          border: "1px solid",
          borderImageSource:
            "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
          borderImageSlice: 1,
        }}
        className=" mt-4 px-14 air:px-4 py-8 bg-opacity-50 backdrop-blur-sm"
      >
        <div className="py-4 my-2 w-full overflow-x-scroll custom-scrollbar">
          <div className="text-item flex  w-[100%] ">
            <div className="name-text text-[#292D32] w-[20%] text-center font-lw font-[700] ">
              Name
            </div>
            <div className="miningtext text-[#292D32] w-[45%] text-center font-lw font-[700]">
              Mining Rate
            </div>
          </div>
          {nodeObject.map((item) => {
            return (
              <NodeStatement
                key={Math.random()}
                nodeImage={item.nodeImage}
                nodeName={item.nodeName}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NodePage;
