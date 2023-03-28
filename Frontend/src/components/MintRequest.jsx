import { Avatar, Button, Card, CardBody, HStack, Text, VStack } from "@chakra-ui/react"
import { bytes2Char, char2Bytes } from '@taquito/utils';
import { TezosToolkit, MichelsonMap } from '@taquito/taquito';

import axios from "axios";
import { useEffect, useState } from "react";
import useGlobalContext from "../hooks/useGlobalContext"

const MintRequest = () => {

    const { Tezos } = useGlobalContext();

    const [tokenId, setTokenId] = useState(0)
    const [nfts, setNfts] = useState([])
    const contractAddress = "KT1NSMmpfLZUBY4naxi4CKQ4dhU692F59G3t"
    const url = "ipfs://QmV2howLdzPNAtiinAQhiAR4GaGKtWvNPd3weSVjhKWeVC"
    const address = "tz1Ph1TwjnaskzUnnhwmntStrqmPy3NJPLGY"

    // get all nfts and fetch the token id for the next mint

    const getNFTs = async () => {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${contractAddress}/bigmaps/ledger/keys`
        );
        const data = response.data;
        console.log(data);
        setNfts(data)
    };

    useEffect(() => {
        getNFTs()
    }, [])


    useEffect(() => {
        console.log(nfts.length)
        setTokenId(nfts.length);
    }, [nfts])

    const getContract = async () => {
        const contract = await Tezos.wallet.at(contractAddress);
        return contract;
    };

    const mintNFT = async (address) => {
        // await disconnectWallet();
        // await connectWallet();
        console.log(address, url, tokenId);
        const amount = 1;
        const contract = await getContract();
        const urlC = char2Bytes(url);
        const op = await contract.methods.mint(address, amount, MichelsonMap.fromLiteral({ '': urlC }), tokenId).send();
        return await op.confirmation(3);
    };

    return (
        <div>
            <VStack marginBottom={"8"}>
                <Card width={"4xl"}>
                    <CardBody display={"flex"} justifyContent={"space-between"}>
                        <HStack>
                            <Avatar size={"sm"} />
                            <Text fontSize={"sm"}>tz1gXMkr...JtASRKwddY</Text>
                            <Text>requested for <span style={{ fontWeight: '700' }}>#100Question</span> Achievement NFT</Text>
                        </HStack>
                        <Button onClick={() => mintNFT(address)}>Mint NFT</Button>
                    </CardBody>
                </Card>
            </VStack>
        </div>
    )
}

export default MintRequest
