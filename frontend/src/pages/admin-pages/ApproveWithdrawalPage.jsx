import UserBalance from "../../components/UserBalance";

import ApproveWithdrawStatement from "../../components/ApproveWithdrawStatement";

const ApproveWithdrawalPage = () => {
  const data = [
    {
      id: 1,
      sender: "Alice",
      receiver: "Bob",
      amount: 30,
      approved: true,
      pending: true,
      Decline: true,
    },
    {
      id: 2,
      sender: "Charlie",
      receiver: "David",
      amount: 100,
      approved: false,
      pending: false,
      Decline: true,
    },
    {
      id: 3,
      sender: "Eve",
      receiver: "Alice",
      amount: 320,
      approved: true,
      pending: false,
      Decline: true,
    },
    {
      id: 4,
      sender: "Bob",
      receiver: "Charlie",
      amount: 50,
      approved: false,
      pending: false,
      Decline: true,
    },
    {
      id: 5,
      sender: "David",
      receiver: "Eve",
      amount: 200,
      approved: true,
      pending: false,
      Decline: false,
    },
    {
      id: 6,
      sender: "Alice",
      receiver: "David",
      amount: 80,
      approved: true,
      pending: false,
      Decline: false,
    },
    {
      id: 7,
      sender: "Charlie",
      receiver: "Bob",
      amount: 120,
      approved: false,
      pending: false,
      Decline: false,
    },
    {
      id: 8,
      sender: "Eve",
      receiver: "Charlie",
      amount: 90,
      approved: true,
      pending: false,
      Decline: false,
    },
    {
      id: 9,
      sender: "David",
      receiver: "Alice",
      amount: 60,
      approved: false,
      pending: true,
      Decline: false,
    },
    {
      id: 10,
      sender: "Bob",
      receiver: "Eve",
      amount: 150,
      approved: true,
      pending: true,
      Decline: false,
    },
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
            <div className="declined w-[16.6%] text-center text-[#292D32] font-lw font-[700]">
              Sr No.
            </div>
            <div className="account w-[16.6%] text-center text-[#292D32] font-lw font-[700]">
              Account
            </div>
            <div className="amount w-[16.6%] text-center text-[#292D32] font-lw font-[700]">
              Amount
            </div>
            <div className="approval w-[16.6%] text-center text-[#292D32] font-lw font-[700]">
              Approval
            </div>

            <div className="approval w-[16.6%] text-center text-[#292D32] font-lw font-[700]">
              Pending
            </div>

            <div className="approval w-[16.6%] text-center text-[#292D32] font-lw font-[700]">
              Decline
            </div>
          </div>
          <div className="main overflow-x-scroll custom-scrollbar">
            {data.map((item) => {
              return (
                <ApproveWithdrawStatement
                  key={item.id}
                  sr={item.id}
                  account={item.sender}
                  amount={item.amount}
                  approved={item.approved}
                  pending={item.pending}
                  Decline={item.Decline}
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
