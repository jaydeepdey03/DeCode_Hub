import { TezosToolkit } from "@taquito/taquito";
import { wallet } from "./wallet";

export const tezos = new TezosToolkit("https://ghostnet.smartpy.io");

tezos.setWalletProvider(wallet);

// export const contractAddress = "KT1NSMmpfLZUBY4naxi4CKQ4dhU692F59G3t"
