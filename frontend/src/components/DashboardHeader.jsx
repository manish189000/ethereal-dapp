import logo from "../assets/logo.svg";
import connect from "../assets/connect.svg";
import sun from "../assets/sun.svg";
import { useContext } from "react";
import MainContext from "../store/MainContext";
import Web3 from "web3";
const DashboardHeader = () => {
  function changeDarkMode() {}
  const { setWalletBalance } = useContext(MainContext);
  async function connectToMetaMask() {
    try {
      if (typeof window.ethereum !== "undefined") {
        // Create a new Web3 instance
        const web3 = new Web3(window.ethereum);

        try {
          // Request account access if needed
          await window.ethereum.enable();

          // Get the user's accounts
          const accounts = await web3.eth.getAccounts();

          // Get the account balance
          const accountBalance = await web3.eth.getBalance(accounts[0]);

          // Set the balance state
          setWalletBalance(web3.utils.fromWei(accountBalance, "ether"));
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("MetaMask is not installed");
      }
    } catch (error) {
      console.error("Error fetching wallet token:", error);
    }
  }
  return (
    <div className="h-[12%] sm:h-[10%] px-4 sm:px-2 border-b-[1px] border-rgba-11 flex justify-between items-center">
      <img src={logo} alt="logo" className=" sm:w-40" />
      <div className="flex gap-6 sm:gap-3 items-center">
        <img
          onClick={changeDarkMode}
          src={sun}
          className=" w-6 sm:w-5 cursor-pointer"
        />
        <button
          onClick={connectToMetaMask}
          className="bg-gradient-to-r from-rgba-254 to-rgba-11 text-black sm:text-sm py-3 sm:py-2 px-6 sm:px-3 font-bakbak flex items-center gap-3"
        >
          <img src={connect} alt="connect" className=" sm:w-4" />
          CONNECT
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
