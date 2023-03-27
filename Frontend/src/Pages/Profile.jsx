import { bytes2Char, char2Bytes } from '@taquito/utils';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GlobalContextProvider from '../context/GlobalContext';
// import { contractAddress } from '../utils/Tezos';

function Profile() {

    const contractAddress = "KT1NSMmpfLZUBY4naxi4CKQ4dhU692F59G3t"
    const walletAddress = "tz1hxTwWPfqAAmqp9RiXoWBi1pTLteHD6eaN"
    // get NFTs by owner

    const [userNfts, setUserNfts] = useState([])

    const getNFTsByOwner = async () => {
        const response = await axios.get(
            `https://api.ghostnet.tzkt.io/v1/contracts/${contractAddress}/bigmaps/ledger/keys?address=${walletAddress}`
        );
        const data = response.data;
        setUserNfts(data)
        console.log(data);
    };

    useEffect(() => {
        getNFTsByOwner()
    }, [])


    return (
        <>
            {userNfts.map((nft, idx) => {
                return (
                    <div key={idx}>
                        <h1>{nft.key.nat}</h1>
                        <h1>{nft.key.address}</h1>
                        {/* image  */}
                    </div>
                )
            })}
        </>
    )
}

export default Profile