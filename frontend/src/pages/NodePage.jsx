import Squareicon from "../assets/Layer_x0020_1.svg";
import SuareIcon2 from "../assets/Vector.svg";
import Arrow from "../assets/Arrow.svg";
import ThreeDots from "../assets/row01.svg";
import CustomComponent from "./CustomComponent";
import Triangle from "../assets/triangle.svg";
import Master from "../assets/Master.svg";
import Obtuse from "../assets/Obtuse.svg";
import Poly from "../assets/poly.svg";
import Leftbg from "../assets/left-bg.svg";
import UserBalance from "../components/UserBalance";


const NodePage = () => {
  return (
    <>
    <UserBalance />
      <div className="parent-part flex items-center gap-4">
        <div className="left-icon bg-[#fe1bf1] w-[5rem] h-[4rem] px-[0.7rem] py-[0.7rem]">
          <img src={Squareicon} alt="Square Icon" />
        </div>

        <div className="right-part text-white w-[100%] bg-[#121212] ">
          <div className="list1 text-[#FE1BF1] font-lw ">保留中の引き出し</div>
          <div className="list2 font-bold font-lw">NODE </div>
          <div className="list3 text-[#0BFFFF] font-lw bg-[#232323]">
            Withdrawals in Progress
          </div>
        </div>
      </div>
      //next-part
      <div className="baground-image absolute left-3 -z-2 ">
        <img src={Poly} alt="" />
      </div>
      <div
        className="child-part mt-10 h-[auto]px-6"
        style={{
          border: "1px solid",
          borderImageSource:
            "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
          borderImageSlice: 1,
        }}
      >
        <div className="sub-child text-[#292D32] flex items-center gap-3 pl-11 pt-2">
          <div className="name font-lw pl-[7rem]">Name</div>
          <div className="mining-rate pl-[16rem]">Mining Rate</div>
        </div>

        <CustomComponent
          borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
          leftPartIconSrc={SuareIcon2}
          rightPartIconText="Particle Nodes"
          zeroText="0"
          dollarZero="$ 0"
          arrowSrc={Arrow}
          realText="0.0000 REAL"
          buttonText="Create"
          buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
          threeDotsSrc={ThreeDots}
        />
        <CustomComponent
          borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
          leftPartIconSrc={Triangle}
          rightPartIconText="Canon Node"
          zeroText="0"
          dollarZero="$ 0"
          arrowSrc={Arrow}
          realText="0.0000 REAL"
          buttonText="Create"
          buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
          threeDotsSrc={ThreeDots}
        />
        <CustomComponent
          borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
          leftPartIconSrc={Obtuse}
          rightPartIconText="Obtuse Nodes"
          zeroText="0"
          dollarZero="$ 0"
          arrowSrc={Arrow}
          realText="0.0000 REAL"
          buttonText="Create"
          buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
          threeDotsSrc={ThreeDots}
        />
        <CustomComponent
          borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
          leftPartIconSrc={Master}
          rightPartIconText=" Master Nodes"
          zeroText="0"
          dollarZero="$ 0"
          arrowSrc={Arrow}
          realText="0.0000 REAL"
          buttonText="Create"
          buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
          threeDotsSrc={ThreeDots}
        />

        <CustomComponent
          borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
          leftPartIconSrc={SuareIcon2}
          rightPartIconText="Executive Nodes"
          zeroText="0"
          dollarZero="$ 0"
          arrowSrc={Arrow}
          realText="0.0000 REAL"
          buttonText="Create"
          buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
          threeDotsSrc={ThreeDots}
        />
        <CustomComponent
          borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
          leftPartIconSrc={Triangle}
          rightPartIconText="Partner Nodes"
          zeroText="0"
          dollarZero="$ 0"
          arrowSrc={Arrow}
          realText="0.0000 REAL"
          buttonText="Create"
          buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
          threeDotsSrc={ThreeDots}
        />
        <CustomComponent
          borderImageSource="linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)"
          leftPartIconSrc={SuareIcon2}
          rightPartIconText="Founder Nodes"
          zeroText="0"
          dollarZero="$ 0"
          arrowSrc={Arrow}
          realText="0.0000 REAL"
          buttonText="Create"
          buttonBgGradient="bg-gradient-to-r from-blue-400 to-purple-600"
          threeDotsSrc={ThreeDots}
        />
        <div className="baground-image absolute  top-[10rem] w-[20rem] left-[76rem] ">
          <img src={Leftbg} alt="" />
        </div>
      </div>
    </>
  );
export default NodePage;
