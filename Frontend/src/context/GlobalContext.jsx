import { createContext, useState } from "react";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";


// export const contractAddress = "KT1NSMmpfLZUBY4naxi4CKQ4dhU692F59G3t"


export const Context = createContext();

const GlobalContextProvider = ({ children }) => {


    const [walletaddress, setWalletaddress] = useState(null);

    // initialization 

    const preferredNetwork = "ghostnet";
    const options = {
        name: "NFT",
        preferredNetwork: preferredNetwork,
    };
    const wallet = new BeaconWallet(options);

    const Tezos = new TezosToolkit("https://ghostnet.smartpy.io");
    Tezos.setWalletProvider(wallet);


    // function calls 

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

    return (
        <Context.Provider value={{
            walletaddress,
            setWalletaddress,
            connectWallet,
            disconnectWallet,
            getActiveAccount,
            checkIfWalletConnected,
            Tezos
        }}>
            {children}
        </Context.Provider>
    );
}

export default GlobalContextProvider