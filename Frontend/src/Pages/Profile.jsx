import { Avatar, Box, Button, Card, CardBody, CardFooter, Center, Flex, Grid, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { bytes2Char, char2Bytes } from '@taquito/utils';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NFTCard from '../components/NFTCard';
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
        <Box bg="background" height={"100%"} padding={"3"}>
            <Navbar />
            <Flex flexDirection={"column"} alignItems={"center"}>
                <Text color={"white"} fontSize={"3xl"} as="b" marginBottom={"7"}>Profile</Text>
                <Card maxWidth={"2xl"} marginBottom={"16"} >
                    <CardBody>
                        <VStack justifyContent={"center"}>
                            <Avatar size={"2xl"} margin="6" src="https://api.dicebear.com/6.x/identicon/svg?seed=Fluffy" />
                            <Stack mt='6' spacing='3' marginTop={"16"} >
                                <Heading margin="auto" size='md'>tz1gXMk....tASRKwddY</Heading>
                                <Flex justifyContent={"space-between"}>
                                    <Card margin={"4"}>
                                        <CardBody padding="3" justifyContent={"center"} textAlign="center">
                                            <Text>Upvote</Text>
                                            <Text fontSize={"xl"} as="b" align="center">100</Text>
                                        </CardBody>
                                    </Card>
                                    <Card margin={"4"}>
                                        <CardBody padding="3" justifyContent={"center"} textAlign="center">
                                            <Text>NFTs</Text>
                                            <Text fontSize={"xl"} as="b" align="center">3</Text>
                                        </CardBody>
                                    </Card>
                                </Flex>
                            </Stack>
                        </VStack>
                    </CardBody>
                </Card>
                <Text color={"white"} fontSize={"2xl"} as="b">Remaining Requests</Text>
                <Box marginTop={"2"} >
                    <VStack padding={"5"}>
                        <Card width={"4xl"}>
                            <CardBody display={"flex"} justifyContent={"space-between"}>
                                <HStack>
                                    {/* <Avatar size={"sm"} /> */}
                                    <Text fontSize={"sm"}>Congratulation! You have Earned NFTs for getting  <span style={{ fontWeight: '700' }}>#100Question</span>. Thanks for your contribution</Text>
                                </HStack>
                                <Button colorScheme={"blue"}>Request NFT</Button>
                            </CardBody>
                        </Card>
                    </VStack>
                </Box>
                <Heading color={"white"} margin={"10"} fontSize={"3xl"} as="b">Your NFTs</Heading>
                <SimpleGrid columns={[1, 2, 3]} gap={6} width={"5xl"}>
                    <NFTCard />
                    <NFTCard />
                    <NFTCard />
                    <NFTCard />
                    <NFTCard />
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Profile