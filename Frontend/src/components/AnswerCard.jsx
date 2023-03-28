import { Avatar, Box, Button, Card, CardBody, Center, Code, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import { HiThumbDown, HiThumbUp } from 'react-icons/hi'
import { useEffect, useState } from "react";
import axios from "axios";
import useGlobalContext from "../hooks/useGlobalContext";

const AnswerCard = (props) => {
    const [toggleLike, setToggleLike] = useState(false)
    const [toggleDisLike, setToggleDisLike] = useState(false)

    const [countLike, setCountLike] = useState(props.upvotes.length)
    const [countDislike, setcountDislike] = useState(props.downvotes.length)

    const {userId} = useGlobalContext();
    console.log("userId-------",  userId)
    const codeString = props.content

    useEffect(() => {
        console.log(props.upvotes)
        props.upvotes.map((val,ind)=>{
            if(val.upvote===userId)
            {
                setToggleLike(true)
                setToggleDisLike(false)
            }
        })

        console.log(props.downvotes)
        props.downvotes.map((val,ind)=>{
            if(val.downvote===userId
                )
            {
                setToggleDisLike(true)
                setToggleLike(false)
            }
        })
        
    }, [userId])

    const upClick=async()=>{
        try {
        
        await axios.post(`http://localhost:4000/answer/upvote/${props.id}`,{
            userId: userId
        })
        const totalupClicks=await axios.get(`http://localhost:4000/answer/upvotes/${props.id}`)
        setCountLike(totalupClicks.data.length)
        
        const totaldownClicks=await axios.get(`http://localhost:4000/answer/downvotes/${props.id}`)
        setcountDislike(totaldownClicks.data.length)

        } catch (error) {
            console.log(error)
        }
    }


    const downClick=async()=>{
        try {
        
        await axios.post(`http://localhost:4000/answer/downvote/${props.id}`,{
            userId:userId
        })
        const totalupClicks=await axios.get(`http://localhost:4000/answer/upvotes/${props.id}`)
        setCountLike(totalupClicks.data.length)
        
        const totaldownClicks=await axios.get(`http://localhost:4000/answer/downvotes/${props.id}`)
        setcountDislike(totaldownClicks.data.length)
        
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card width={"3xl"} padding={"5"}>
            <CardBody>
                {/* Problem desc*/}
                <Text>
                    Correct. Use one of the alternative implementations available:
                </Text>
                {/* Code box */}
                <Center marginTop={"4"} margin={"2"} borderRadius={"16px"} alignItems={"center"} justifyContent={"center"} wrapLongLines={true}>
                    <SyntaxHighlighter language="c" style={vscDarkPlus}>
                        {codeString}
                    </SyntaxHighlighter>
                </Center>
                {/* Furthur Text */}
                <Text marginTop={"4"}>Is this possible as illustrated above, or in the .pylintrc configuration file for example?</Text>
                <Flex justifyContent={"space-between"} marginTop={"7"}>
                    <HStack>
                        <Avatar size={"sm"} />
                        <Box display={"flex"} flexDirection={"column"}>
                            <Text fontSize={"smaller"}>Fidal Mathew</Text>
                            <Text fontSize={"smaller"}></Text>
                        </Box>
                    </HStack>
                    <HStack alignItems={"center"}>
                        {!toggleLike ? <FiThumbsUp onClick={()=>{

                            upClick()
                            setToggleLike(true)
                            setToggleDisLike(false)
                        } 
                        } /> : <HiThumbUp 
                            onClick={
                                ()=>{
                                    upClick()
                                    setToggleLike(false)
                                    setToggleDisLike(false)
                                }
                            }
                        />}
                        <Text>{countLike}</Text>
                        {!toggleDisLike ? <FiThumbsDown 
                        onClick={
                            ()=>{
                                downClick()
                                setToggleDisLike(true)
                                setToggleLike(false)
                            }
                        } /> : <HiThumbDown 
                            onClick={
                                ()=>{
                                downClick()
                                setToggleDisLike(false)
                                setToggleLike(false)
                                }
                            }
                        />}
                        <Text>{countDislike}</Text>
                    </HStack>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default AnswerCard
