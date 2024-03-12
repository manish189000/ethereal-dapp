import UserBalance from "../components/UserBalance";
const WithdrawPage = () => {
  return (
    <>      <UserBalance />
      <div className="mainContainer w-full h-52 flex items-center justify-between relative ">
        <img src={bgsvg} className="absolute z-0 w-[120%] opacity-60 " />
        <div className="paddingContainer  w-full h-52 flex items-center justify-between px-8">
          <Balance title="AVAILABLE BALANCE" icon={icon1} />
          <Balance title="TOTAL EARNINGS" icon={icon2} />
          <Balance title="DAILY MINING RATE" icon={icon3} />
        </div>
      </div>

      <div
        className="empty"
        // style={{
        //   backgroundColor: "blue",
        //   clipPath:
        //     polygon(0px 0px, 0px 189px, 100.48% 94.71%, 200px 120px, 80.67% 37.17%),
        //   width: "200px",
        //   height: "200px",
        // }}
        style={{
          backgroundColor: "blue",
          width: "800px",
          height: "280px",
          float: "left",
          webkitClipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 0% 100%)",
          clipPath: "polygon(87% 0, 100% 35%, 100% 100%, 0 100%, 0 0)",
        }}
      ></div>
    </>
  );
};

export default WithdrawPage;
