/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Web3 from "web3";

const WalletConnect = () => {
  const [balance, setBalance] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletToken, setWalletToken] = useState("");
  const [customToken, setCustomToken] = useState("");
  //   const [accountBalance, setAccountBalance] = useState("");

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
          setBalance(web3.utils.fromWei(accountBalance, "ether"));
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("MetaMask is not installed");
      }
    };

    getAccountBalance();
  }, []);

  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== "undefined") {
      // Enable Ethereum provider
      window.ethereum.enable().then(() => {
        setWalletConnected(true);
      });
    }
  }, []);

  const connectWallet = () => {
    // Open MetaMask wallet popup
    window.ethereum.enable().then(() => {
      setWalletConnected(true);
    });
  };

  const getWalletToken = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        // Get the current Ethereum wallet address
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // Get the wallet balance for the current account
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0]], // Pass the current account as the parameter
        });
        console.log("balance", balance);
        setWalletToken(balance);
      }
    } catch (error) {
      console.error("Error fetching wallet token:", error);
    }
  };

  const getCustomToken = () => {
    // Get the custom token from your backend API
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    fetch("YOUR_API_ENDPOINT")
      .then((response) => response.json())
      .then((data) => {
        setCustomToken(data.token);
      })
      .catch((error) => {
        console.error("Error fetching custom token:", error);
      });
  };

  return <div>WalletConnect</div>;
};

export default WalletConnect;
