import { FaPlus } from "react-icons/fa";
const NodezPage = () => {
  return (
    <div className="node-container">
      <div className="button-part flex w-[100%] gap-6 justify-left ">
        <div
          className="px-6 py-3 border border-[#141414] w-[30%] text-center font-lw font-medium bg-black"
        
        >
          Node
        </div>
        <div
          className="px-6 py-3 border border-[#141414] w-[30%] text-center font-lw font-medium bg-black"
     
        >
          R/D
        </div>
        <div className="px-6 py-3 border border-[#141414] w-[30%] text-center font-lw font-medium bg-black">
          Day
        </div>
      </div>

      {/* //next part */}

      <div className="button-part flex w-[100%] gap-6 justify-left pt-9 ">
        <div className="bg-gradient-to-r w-[30%] h-[2rem] font-lw font-medium">
          <input
            type="text"
            className="px-2 w-full py-2 bg-black outline-none "
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
              borderImageSlice: 1,
            }}
          />
        </div>
        <div className="bg-gradient-to-r w-[30%] h-[2rem] font-lw font-medium">
          <input
            type="text"
            className="px-2 w-full py-2 bg-black outline-none "
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
              borderImageSlice: 1,
            }}
          />
        </div>
        {/* <div
          className="bg-gradient-to-r w-[30%] h-[2rem] text-center font-medium r "
          style={{
            border: "1px solid",
            borderImageSource:
              "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
            borderImageSlice: 1,
          }}
        >
          Day
        </div> */}
      </div>

      {/* //next part */}

      <div className="button-part flex w-[100%] gap-6 justify-left pt-5 ">
        <div className="bg-gradient-to-r w-[30%] h-[2rem] font-lw font-medium">
          <input
            type="text"
            className="px-2 w-full py-2 bg-black outline-none "
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
              borderImageSlice: 1,
            }}
          />
        </div>
        <div className="bg-gradient-to-r w-[30%] h-[2rem] font-lw font-medium">
          <input
            type="text"
            className="px-2 w-full py-2 bg-black outline-none "
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
              borderImageSlice: 1,
            }}
          />
        </div>
        {/* <div
          className="bg-gradient-to-r w-[30%] h-[2rem] text-center font-medium r "
          style={{
            border: "1px solid",
            borderImageSource:
              "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
            borderImageSlice: 1,
          }}
        >
          Day
        </div> */}
      </div>

      {/* //next part */}

      <div className="plus-container w-[100%] flex pt-9 justify-end">
        <div class=" bg-gradient-to-r from-rgba-254 to-rgba-11 text-black p-3 rounded-full ">
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default NodezPage;
