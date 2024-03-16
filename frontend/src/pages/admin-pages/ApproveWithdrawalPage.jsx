import UserBalance from "../../components/UserBalance";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import ApproveWithdrawStatement from "../../components/ApproveWithdrawStatement";

const ApproveWithdrawalPage = () => {
  const data = [
    { id: 1, sender: "Alice", receiver: "Bob", amount: 30, approved: true },
    {
      id: 2,
      sender: "Charlie",
      receiver: "David",
      amount: 100,
      approved: false,
    },
    { id: 3, sender: "Eve", receiver: "Alice", amount: 320, approved: true },
    { id: 4, sender: "Bob", receiver: "Charlie", amount: 50, approved: false },
    { id: 5, sender: "David", receiver: "Eve", amount: 200, approved: true },
    { id: 6, sender: "Alice", receiver: "David", amount: 80, approved: true },
    { id: 7, sender: "Charlie", receiver: "Bob", amount: 120, approved: false },
    { id: 8, sender: "Eve", receiver: "Charlie", amount: 90, approved: true },
    { id: 9, sender: "David", receiver: "Alice", amount: 60, approved: false },
    { id: 10, sender: "Bob", receiver: "Eve", amount: 150, approved: true },
  ];
  return (
    <>
      <UserBalance />
      <div className="mt-14 ">
        <div
          style={{
            border: "1px solid",
            borderImageSource:
              "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
            borderImageSlice: 1,
          }}
          className="approveWithdrawContainer w-full mt-4 px-10 py-8  air:px-4 bg-opacity-50 backdrop-blur-sm"
        >
          <div className="headings flex">
            <div className="declined w-[10%] text-center text-[#292D32] font-lw font-[700]">
              Sr No.
            </div>
            <div className="account w-[40%] text-center text-[#292D32] font-lw font-[700]">
              Account
            </div>
            <div className="amount w-[25%] text-center text-[#292D32] font-lw font-[700]">
              Amount
            </div>
            <div className="approval w-[25%] text-center text-[#292D32] font-lw font-[700]">
              Status
            </div>
          </div>
          <div className="main overflow-x-scroll custom-scrollbar">
            {data.map((item) => {
              return (
                <ApproveWithdrawStatement
                  sr={item.id}
                  account={item.sender}
                  amount={item.amount}
                  approved={item.approved}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApproveWithdrawalPage;
