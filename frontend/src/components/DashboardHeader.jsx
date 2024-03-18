import logo from "../assets/logo.svg";
import connect from "../assets/connect.svg";
import sun from "../assets/sun.svg";
import { useContext } from "react";
import MainContext from "../store/MainContext";
import Web3 from "web3";
const DashboardHeader = () => {
  function changeDarkMode() {}
  const { setWalletBalance, accountAddress, setAccountAddress } =
    useContext(MainContext);
  console.log("account address:", accountAddress);
  async function connectToMetaMask() {
    try {
      if (typeof window.ethereum !== "undefined") {
        const web3 = new Web3(window.ethereum);

        // Request account access if needed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // Get the user's account address
        const userAddress = accounts[0];
        setAccountAddress(userAddress);
        const request = await fetch("http://localhost:3000/api/v1/users", {
          method: "POST",
          body: JSON.stringify({ id: userAddress }),
          headers: {
            "Content-type": "application/json",
          },
        });
        const response = await request.json();
        console.log(response);
        // Get the account balance
        const accountBalance = await web3.eth.getBalance(userAddress);

        // Set the balance and account address states
        setWalletBalance(web3.utils.fromWei(accountBalance, "ether"));
      } else {
        console.error("MetaMask is not installed");
      }
    } catch (error) {
      console.error("Error fetching account data:", error);
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
        {accountAddress ? (
          <p className=" sm:w-28 sm:overflow-hidden sm:truncate">
            {accountAddress}
          </p>
        ) : (
          <button
            onClick={connectToMetaMask}
            className="bg-gradient-to-r from-rgba-254 to-rgba-11 text-black sm:text-sm py-3 sm:py-2 px-6 sm:px-3 font-bakbak flex items-center gap-3"
          >
            <img src={connect} alt="connect" className=" sm:w-4" />
            CONNECT
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
