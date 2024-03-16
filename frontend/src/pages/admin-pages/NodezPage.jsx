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
      <div className=" w-[100%] max-w-screen-xl mx-auto px-4 md:px-8 ">
        <div className=" mt-24 flex justify-between items-start md:flex"></div>
        <div className="mt-12 shadow-sm border-2 border-gray-900 overflow-x-auto">
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
