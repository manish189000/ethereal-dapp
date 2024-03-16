import { useContext } from "react";
import icon1 from "../assets/Group 48095668.svg";
import icon2 from "../assets/Group 48095669.svg";
import icon3 from "../assets/Group 48095670.svg";
import bgsvg from "../assets/bgSvg.svg";
import Balance from "./BalanceComponent";
import MainContext from "../store/MainContext";

const UserBalance = () => {
  const { walletBalance } = useContext(MainContext);
  return (
    <div className="mainContainer w-full flex items-center justify-between relative ">
      <img src={bgsvg} className="absolute z-0 w-[120%] air:hidden" />
      <div className="paddingContainer w-full flex air:flex-col air:gap-3 items-center justify-between px-8 air:px-0">
        <Balance
          title="AVAILABLE BALANCE"
          icon={icon1}
          balance={walletBalance}
        />
        <Balance title="TOTAL EARNINGS" icon={icon2} />
        <Balance title="DAILY MINING RATE" icon={icon3} />
      </div>
    </div>
  );
};

export default UserBalance;
