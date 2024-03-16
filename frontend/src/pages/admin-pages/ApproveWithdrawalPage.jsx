const ApproveWithdrawalPage = () => {
  return (
    <>
      <div className="flex justify-between sm:flex-col sm:gap-4">
        <div
          // style={{
          //   border: "1px solid",
          //   borderImageSource:
          //     "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
          //   borderImageSlice: 1,
          // }}
          className="px-6 py-3 text-lw border border-[#141414] rounded-md w-[30%] sm:w-full flex justify-center bg-black shadow-lg"
        >
          <p className="text-base font-lw">Account</p>
        </div>
        <div
          // style={{
          //   border: "1px solid",
          //   borderImageSource:
          //     "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
          //   borderImageSlice: 1,
          // }}
          className="px-6 py-3 text-lw border border-[#141414] rounded-md w-[30%] sm:w-full flex justify-center bg-black shadow-lg"
        >
          <p className="text-base font-lw">Amount</p>
        </div>
        <div
          // style={{
          //   border: "1px solid",
          //   borderImageSource:
          //     "linear-gradient(212.97deg, #0BFFFF 8.98%, #FE1BF1 80.33%)",
          //   borderImageSlice: 1,
          // }}
          className="px-6 py-3 text-lw border border-[#141414] rounded-md w-[30%] sm:w-full flex justify-center bg-black shadow-lg"
        >
          <p className="text-base font-lw">Approval</p>
        </div>
      </div>
      <div className="h-[300px] w-full bg-slate-400 mt-2">
        <div className="box "></div>
      </div>
    </>
  );
};

export default ApproveWithdrawalPage;
