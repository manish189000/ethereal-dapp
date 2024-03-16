// import { FaPlus } from "react-icons/fa";
// import UserBalance from "../../components/UserBalance";

// const NodezPage = () => {
//   return (
//     <>
//       <UserBalance />

//       <div className="node-container mt-14 ">
//         <div className="plus-container w-[100%] flex justify-end">
//           <div class=" bg-gradient-to-r from-rgba-254 to-rgba-11 text-black p-3 rounded-full ">
//             <FaPlus />
//           </div>
//         </div>
//         <div className="button-part flex w-[100%] justify-between pt-4">
//           <div className="px-6 py-3 border border-[#141414] w-[30%] text-center font-lw font-medium bg-black">
//             Node
//           </div>
//           <div className="px-6 py-3 border border-[#141414] w-[30%] text-center font-lw font-medium bg-black">
//             R/D
//           </div>
//           <div className="px-6 py-3 border border-[#141414] w-[30%] text-center font-lw font-medium bg-black">
//             Day
//           </div>
//         </div>

//         {/* //next part */}

//         <div className="button-part flex w-[100%] justify-between pt-6 ">
//           <div className="bg-gradient-to-r w-[30%] h-[2rem] font-lw font-medium">
//             <input
//               type="text"
//               className="px-2 w-full py-2 bg-black outline-none "
//               style={{
//                 border: "1px solid",
//                 borderImageSource:
//                   "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
//                 borderImageSlice: 1,
//               }}
//             />
//           </div>
//           <div className="bg-gradient-to-r w-[30%] h-[2rem] font-lw font-medium">
//             <input
//               type="text"
//               className="px-2 w-full py-2 bg-black outline-none "
//               style={{
//                 border: "1px solid",
//                 borderImageSource:
//                   "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
//                 borderImageSlice: 1,
//               }}
//             />
//           </div>
//           <div className="bg-gradient-to-r w-[30%] h-[2rem] font-lw font-medium">
//             <input
//               type="text"
//               className="px-2 w-full py-2 bg-black outline-none "
//               style={{
//                 border: "1px solid",
//                 borderImageSource:
//                   "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
//                 borderImageSlice: 1,
//               }}
//             />
//           </div>
//         </div>

//         {/* //next part */}

//         <div className="button-part flex w-[100%] justify-between pt-5 ">
//           <div className="bg-gradient-to-r w-[30%] h-[2rem] font-lw font-medium">
//             <input
//               type="text"
//               className="px-2 w-full py-2 bg-black outline-none "
//               style={{
//                 border: "1px solid",
//                 borderImageSource:
//                   "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
//                 borderImageSlice: 1,
//               }}
//             />
//           </div>
//           <div className="bg-gradient-to-r w-[30%] h-[2rem] font-lw font-medium">
//             <input
//               type="text"
//               className="px-2 w-full py-2 bg-black outline-none "
//               style={{
//                 border: "1px solid",
//                 borderImageSource:
//                   "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
//                 borderImageSlice: 1,
//               }}
//             />
//           </div>
//           <div className="bg-gradient-to-r w-[30%] h-[2rem] font-lw font-medium">
//             <input
//               type="text"
//               className="px-2 w-full py-2 bg-black outline-none "
//               style={{
//                 border: "1px solid",
//                 borderImageSource:
//                   "linear-gradient(212.97deg, #0bffff 8.98%, #fe1bf1 80.33%)",
//                 borderImageSlice: 1,
//               }}
//             />
//           </div>
//         </div>

//         {/* //next part */}

//         {/* <div className="plus-container w-[100%] flex pt-9 justify-end">
//         <div class=" bg-gradient-to-r from-rgba-254 to-rgba-11 text-black p-3 rounded-full ">
//           <FaPlus />
//         </div>
//       </div> */}
//         <div className="plus-container w-[100%] flex pt-9 justify-end">
//           <div class=" bg-gradient-to-r from-rgba-254 px-6 to-rgba-11 text-black p-3 font-lw">
//             SUBMIT
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NodezPage;
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import UserBalance from "../../components/UserBalance";

const NodezPage = () => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [tableItems, setTableItems] = useState([
    {
      name: "Liam James",
      email: "liamjames@example.com",
      position: "Software engineer",
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      position: "Product designer",
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      position: "Front-end developer",
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      position: "Laravel engineer",
    },
    {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      position: "Open source manager",
    },
  ]);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };
      <div className="node-container mt-14 ">
        <div className="plus-container w-[100%] flex justify-end">
          <div className=" bg-gradient-to-r from-rgba-254 to-rgba-11 text-black p-3 rounded-full ">
            <FaPlus />
          </div>
        </div>
        <div className="button-part flex w-[100%] justify-between pt-4">
          <div className="px-6 py-3 border border-[#141414] w-[30%] text-center font-lw font-medium bg-black">
            Node
          </div>
          <div className="px-6 py-3 border border-[#141414] w-[30%] text-center font-lw font-medium bg-black">
            R/D
          </div>
          <div className="px-6 py-3 border border-[#141414] w-[30%] text-center font-lw font-medium bg-black">
            Day
          </div>
        </div>
  const handleSave = (index) => {
    setEditingIndex(null);
    // You can update state here or call an API to save the changes
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleInputChange = (index, field, value) => {
    const newTableItems = [...tableItems];
    newTableItems[index][field] = value;
    setTableItems(newTableItems);
  };

  return (
    <>
      <UserBalance />
      <div className=" w-[100%] max-w-screen-xl">
        <div className=" mt-24 flex justify-between items-start md:flex"></div>
        <div className="mt-12 shadow-sm border-2 border-gray-900 overflow-x-auto custom-scrollbar">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-black text-white font-medium border-b">
              <tr>
                <th className="py-3 px-6">Node</th>
                <th className="py-3 px-6">R/D</th>
                <th className="py-3 px-6">Day</th>
              </tr>
            </thead>
            <tbody className="text-white divide-y bg-opacity-50 backdrop-blur-sm">
              {tableItems.map((item, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderColor: "#111827",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    // backgroundColor: "orange",
                  }}
                >
                  {/* Changed border color to black */}
                  {Object.keys(item).map((key) => (
                    <td key={key} className="px-6 py-4 whitespace-nowrap">
                      {editingIndex === idx ? (
                        <input
                          type="text"
                          value={item[key]}
                          onChange={(e) =>
                            handleInputChange(idx, key, e.target.value)
                          }
                          style={{
                            backgroundColor: "#ccc",
                            color: "#000",
                            outline: "none",
                          }}
                        />
                      ) : (
                        item[key]
                      )}
                    </td>
                  ))}
                  <td className="text-right px-6 whitespace-nowrap">
                    {editingIndex === idx ? (
                      <div>
                        <button
                          onClick={() => handleSave(idx)}
                          className="py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-gray-50 rounded-lg mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="py-2 px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEdit(idx)}
                        className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NodezPage;
