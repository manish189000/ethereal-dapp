import React from "react";

const CustomComponent = ({
  borderImageSource,
  leftPartIconSrc,
  rightPartIconText,
  zeroText,
  dollarZero,
  arrowSrc,
  realText,
  buttonText,
  buttonBgGradient,
  threeDotsSrc,
}) => {
  return (
    <div
      className="child-part mt-10 h-[4rem] mx-[4rem] mb-[2rem] py-4"
      style={{
        border: "1px solid",
        borderImageSource:
          borderImageSource ||
          "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
        borderImageSlice: 1,
      }}
    >
      <div className="real-part flex ">
        <div className="left-part-icon  w-[5rem] pl-6">
          <img src={leftPartIconSrc} alt="" />
        </div>
        <div className="right-part-icon text-[white] pl-1 w-[8rem] font-lw">
          {rightPartIconText}
        </div>
        <div className="zero-text text-[white]  w-4 pl-[4rem]">{zeroText}</div>
        <div className="dollar-zero text-[white]  font-lw  pl-[4rem] ">
          {dollarZero}
        </div>
        <div className="arrow pt-2 pl-[2rem] ">
          <img src={arrowSrc} alt="" />
        </div>
        <div className="real-text text-[white] pl-[1rem] font-lw">
          {realText}
        </div>
        <div
          className={`button-part w-[6rem] h-[2rem]  ml-[25rem] border-black border-2 ${buttonBgGradient} rounded-[2rem] text-[white] px-5 font-lw`}
        >
          {buttonText}
        </div>
        <div className="three-dots  w-7 pl-[1rem] pt-1">
          <img src={threeDotsSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
