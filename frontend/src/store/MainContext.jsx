/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { useState, createContext } from "react";
import Web3 from "web3";

const MainContext = createContext({
  walletBalance: null,
  setWalletBalance: () => {},
  accountAddress: null,
  setAccountAddress: () => {},
});

export default MainContext;

export const MainContextProvider = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const isMounted = useRef(false); // Ref to track component mount status

  useEffect(() => {
    if (!isMounted.current) {
      // Component is mounting for the first time
      isMounted.current = true;
      return; // Skip the effect on initial mount
    }

    const getAccountData = async () => {
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

          // Fetch user data only after setting the account address
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
    };

    getAccountData();
  }, []);

  return (
    <MainContext.Provider
      value={{
        walletBalance,
        setWalletBalance,
        accountAddress,
        setAccountAddress,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
