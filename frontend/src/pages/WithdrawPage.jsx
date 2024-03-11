import Balance from "../components/Balance";
import icon1 from "../assets/Group 48095668.svg";
import icon2 from "../assets/Group 48095669.svg";
import icon3 from "../assets/Group 48095670.svg";
import bgsvg from "../assets/bgSvg.svg";
const WithdrawPage = () => {
  return (
    <>
      <div className="mainContainer w-full h-52 flex items-center justify-between relative ">
        <img src={bgsvg} className="absolute z-0 w-[120%]" />
        <Balance title="AVAILABLE BALANCE" icon={icon1} />
        <Balance title="TOTAL EARNINGS" icon={icon2} />
        <Balance title="DAILY MINING RATE" icon={icon3} />
      </div>
    </>
  );
};

export default WithdrawPage;
