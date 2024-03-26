/* eslint-disable react/prop-types */
// import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import polygon from "../assets/Polygon 1.svg";
import MainContext from "../store/MainContext";

const Balance = ({ title, icon, balance }) => {
  const { walletBalance } = useContext(MainContext);
  // console.log(window.location.pathname);
  const pathname = window.location.pathname;
  let role;
  if (pathname.startsWith("/admin")) {
    console.log("admin");
    role = "admin";
  } else if (pathname.startsWith("/user")) {
    console.log("user");
    role = "user";
  }
  return (
    <div
      className="threebox w-[23%] air:w-full h-[10rem] flex flex-col justify-between p-3 bg-opacity-50 backdrop-blur-sm z-10"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
        borderImageSlice: 1,
      }}
    >
      <div className="uppContainer flex justify-between">
        <div className="availableBal text-sm font-lw">{title}</div>
        {/* <button className="flex gap-1 items-center font-poppins bg-gradient-to-r from-blue-400 to-purple-600  py-1 px-2 air:px-4 air:py-2 rounded-2xl text-xs air:text-sm font-bold">
          $USDT <img src={polygon} />
        </button> */}
      </div>
      <div className="downcontainer flex justify-between">
        <div className="dleft">
          <div className="real font-lw text-2xl font-bold">
            {balance || "NULL"} ETH
          </div>
          <div className="real2 font-lw text-sm">0 REAL</div>
        </div>
        <div className="dright">
          {role === "user" ? (
            <img src={icon} />
          ) : (
            <button
              className={`button-part px-4 py-2 text-[12px] lg2:w-full font-semibold border-black border-2 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500  rounded-[2rem] text-[white] font-poppins`}
            >
              Buy more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
