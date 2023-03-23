import { Avatar, Box, Button, Card, CardBody, Center, Code, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import { HiThumbDown, HiThumbUp } from 'react-icons/hi'
import { useState } from "react";

const AnswerCard = () => {
    const [toggleLike, setToggleLike] = useState(false)
    const [toggleDisLike, setToggleDisLike] = useState(false)
    const [count, setCount] = useState(5)
    const [countDislike, setcountDislike] = useState(-5)
    const codeString = `#include <string.h> 
char *strrev(char *str) 
{ 
    char *p1, *p2; 
    if (! str || ! *str) 
            return str; 
    for (p1 = str, p2 = str + strlen(str) - 1; p2 > p1; ++p1, --p2) { 
            *p1 ^= *p2; 
            *p2 ^= *p1; 
            *p1 ^= *p2; 
    } 
    return str; 
}`;
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
                            <Text fontSize={"smaller"}>tz1gXMk...tuJtASRKwddY</Text>
                        </Box>
                    </HStack>
                    <HStack alignItems={"center"}>
                        {!toggleLike ? <FiThumbsUp onClick={() => {
                            setToggleLike(prev => !prev)
                            setCount(prev => prev + 1)
                        }
                        } /> : <HiThumbUp onClick={() => {
                            setToggleLike(prev => !prev)
                            setCount(prev => prev - 1)
                        }
                        } />}
                        <Text>{count}</Text>
                        {!toggleDisLike ? <FiThumbsDown onClick={() => {
                            setToggleDisLike(prev => !prev)
                            setcountDislike(prev => prev - 1)
                        }
                        } /> : <HiThumbDown onClick={() => {
                            setToggleDisLike(prev => !prev)
                            setcountDislike(prev => prev + 1)
                        }
                        } />}
                        <Text>{countDislike}</Text>
                    </HStack>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default AnswerCard
