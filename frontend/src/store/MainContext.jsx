/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Web3 from "web3";

// const MainContext = () => {
//   return (
//     <div>MainContext</div>
//   )
// }
const MainContext = createContext({
  walletBalance: null,
  setWalletBalance: () => {},
});
export default MainContext;

export const MainContextProvider = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState("");
  useEffect(() => {
    const getAccountBalance = async () => {
      // Check if MetaMask is installed
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
    };

    getAccountBalance();
  }, []);
  return (
    <MainContext.Provider value={{ walletBalance, setWalletBalance }}>
      {children}
    </MainContext.Provider>
  );
};
