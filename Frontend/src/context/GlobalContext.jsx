import { createContext, useState } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";
import axios from "axios";

export const Context = createContext();

const GlobalContextProvider = ({ children }) => {

    const [walletaddress, setWalletaddress] = useState(null);
    const [userId, setUserId] = useState(null);

    const preferredNetwork = "ghostnet";
    const options = {
        name: "NFT",
        preferredNetwork: preferredNetwork,
    };
    const wallet = new BeaconWallet(options);

    const getActiveAccount = async () => {
        return await wallet.client.getActiveAccount();
    };

    const connectWallet = async () => {
        let account = await wallet.client.getActiveAccount();

        if (!account) {
            await wallet.requestPermissions({
                network: { type: preferredNetwork },
            });
            account = await wallet.client.getActiveAccount();
        }
        return { success: true, wallet: account.address };
    };

    const disconnectWallet = async () => {
        await wallet.clearActiveAccount();
        await wallet.disconnect();
        return { success: true, wallet: null };
    };

    const checkIfWalletConnected = async (wallet) => {
        try {
            const activeAccount = await wallet.client.getActiveAccount();
            if (!activeAccount) {
                await wallet.client.requestPermissions({
                    type: { network: preferredNetwork },
                });
            }
            return {
                success: true,
            };
        } catch (error) {
            return {
                success: false,
                error,
            };
        }
    };

    // backend methods
    const URL = "localhost:4000"

    const getUserId = async() =>{
        try {

            const user = await axios.post('http://localhost:4000/user/signup',{
                 address: walletaddress   
            });
            console.log(user);
        }
        catch (error) {
        console.error(error);
        }
    }


    return (
        <Context.Provider value={{
            walletaddress,
            setWalletaddress,
            connectWallet,
            disconnectWallet,
            getActiveAccount,
            checkIfWalletConnected,
            getUserId
        }}>
            {children}
        </Context.Provider>
    );
}

export default GlobalContextProvider