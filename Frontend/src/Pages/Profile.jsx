import { Avatar, Box, Button, Card, CardBody, CardFooter, Center, Flex, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
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
            {/* {userNfts.map((nft, idx) => {
                return (
                    <div key={idx}>
                        <h1>{nft.key.nat}</h1>
                        <h1>{nft.key.address}</h1>
                        image
                    </div>
                )
            })} */}
            <Flex padding={"7"} flexDirection={"column"} alignItems={"center"} bg="background" height={"100vh"}>
                <Center>
                    <Heading padding={"2rem"} color={"white"}>Profile</Heading>
                </Center>
                {/* <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    width={"2xl"}
                >

                    <CardBody>
                        <Center>
                            <HStack alignContent={"center"}>
                                <Avatar marginRight={"6"} name='Jaydeep Dey' size="xl" ></Avatar>
                                <VStack alignItems={"start"}>
                                    <Text fontSize={"4xl"}>Jaydeep Dey</Text>
                                    <Text>Wallet Address: <span>0xjnsghurh4857ith...5gsifgh</span></Text>
                                </VStack>
                            </HStack>
                        </Center>
                        <HStack justifyContent={"space-between"} marginTop={"16"}>
                            <Text>Number of NFTs: <span>0</span></Text>
                            <Text>Questions Answered: <span>100</span></Text>
                            <Text>No of Likes Earned: <span>100</span></Text>
                        </HStack>
                    </CardBody>
                </Card> */}

                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    width={"2xl"}
                >

                    <HStack>
                        <Avatar
                            justifyContent='center'
                            name="Jaydeep Dey"
                            size="2xl"
                        />
                        <CardBody>
                            <Heading size='md'>The perfect latte</Heading>

                            <Text py='2'>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                            </Text>
                        </CardBody>
                    </HStack>

                </Card>
                <Heading padding={"16"}>Your NFTs</Heading>
            </Flex>
        </>
    )
}

export default Profile