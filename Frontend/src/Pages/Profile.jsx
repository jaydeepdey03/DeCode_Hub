import { bytes2Char, char2Bytes } from '@taquito/utils';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useGlobalContext from '../hooks/useGlobalContext';
// import { contractAddress } from '../utils/Tezos';

function Profile() {

    const contractAddress = "KT1NSMmpfLZUBY4naxi4CKQ4dhU692F59G3t"
    // get NFTs by owner

    const [userNfts, setUserNfts] = useState([])


    const { walletAddress } = useGlobalContext();
    const navigate = useNavigate()

    useEffect(() => {
        if (!walletAddress)
            navigate('/', { replace: true });
    }, [walletAddress, navigate])



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
            <Navbar />
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