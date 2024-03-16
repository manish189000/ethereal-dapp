import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import UserBalance from "../../components/UserBalance";

const ConfigPage = () => {
  const [botWalletInputFields, setBotWalletInputFields] = useState(1);
  return (
    <>
      <UserBalance />

      <div className="mt-24 ">
        {/* <button className="bg-gradient-to-r float-end sm:float-none sm:my-3 from-rgba-254 to-rgba-11 text-black sm:text-sm py-3 sm:py-2 px-6 sm:px-3 font-bakbak flex items-center gap-3">
          CONNECT
        </button> */}
        <div className="main flex flex-col gap-6 lg:w-[55%] sm:w-full">
          <section className=" flex gap-8 air:gap-4 items-center air:flex-col air:items-start">
            <p className=" font-lw text-base ">Contract address:</p>
            <input
              type="text"
              className=" px-2 py-2 bg-black outline-none"
              style={{
                border: "1px solid",
                borderImageSource:
                  "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
                borderImageSlice: 1,
              }}
            />
          </section>
          <section className=" flex gap-20 air:gap-4 items-start air:flex-col air:items-start">
            <p className=" font-lw text-base">Bot wallet:</p>
            <div className="flex gap-5 ">
              <div className="flex air:order-1 flex-col gap-3">
                {Array.from({ length: botWalletInputFields }, (_, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      className="px-2 py-2 bg-black outline-none "
                      style={{
                        border: "1px solid",
                        borderImageSource:
                          "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
                        borderImageSlice: 1,
                      }}
                    />
                  </div>
                ))}
              </div>
              <FaPlus
                className=" air:order-2 text-xl cursor-pointer"
                onClick={() => setBotWalletInputFields((prev) => prev + 1)}
              />
            </div>
          </section>
          <div className="plus-container w-[100%] flex pt-9 sm:pt-0 justify-start">
            <div className=" bg-gradient-to-r from-rgba-254 px-6 to-rgba-11 text-black p-3 font-lw">
              SUBMIT
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigPage;
