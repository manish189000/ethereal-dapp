/* eslint-disable react/prop-types */
import polygon from "../assets/Polygon 1.svg";

const Balance = ({ title, icon }) => {
  return (
    <div
      className="threebox w-[30%] air:w-full h-32 flex flex-col justify-between p-3 bg-opacity-50 backdrop-blur-sm z-10"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
        borderImageSlice: 1,
      }}
    >
      <div className="uppContainer flex justify-between">
        <div className="availableBal text-sm font-lw">{title}</div>
        <button className="flex gap-1 items-center font-poppins bg-gradient-to-r from-blue-400 to-purple-600  py-1 px-2 air:px-4 air:py-2 rounded-2xl text-xs air:text-sm font-bold">
          $USDT <img src={polygon} />
        </button>
      </div>
      <div className="downcontainer flex justify-between">
        <div className="dleft">
          <div className="real font-lw text-2xl font-bold">0 REAL</div>
          <div className="real2 font-lw text-sm">0 REAL</div>
        </div>
        <div className="dright">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
};

export default Balance;
