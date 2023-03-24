import { Avatar, Box, Card, CardBody, Container, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import { HiThumbDown, HiThumbUp } from 'react-icons/hi'
const QueryCard = () => {
    const [toggleLike, setToggleLike] = useState(false)
    const [count, setCount] = useState(5)
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, blanditiis quibusdam recusandae vero sed laudantium distinctio modi officiis officia libero ut accusantium praesentium quisquam excepturi illo fugit, nisi dignissimos debitis incidunt. Harum, doloremque quas laboriosam ex, quasi corporis fugiat iusto adipisci, temporibus in odit illo saepe cumque consequatur aperiam! Minus."
    return (
        <Card size={"lg"} marginBottom={"7"}>
            <CardBody>
                <Flex flexDirection={"column"}>
                    <Heading size={"sm"} >Query Heading</Heading>
                    <Container paddingLeft={0}>
                        <Text>{text.slice(0,170) + "..."}<Text as={"sp"} color={"blue.500"}>10 Answers</Text></Text>
                    </Container>
                    <Flex justifyContent={"space-between"} marginTop={"3"}>
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
                                setCount(prev=>prev+1)
                            }
                            } /> : <HiThumbUp onClick={() => {
                                setToggleLike(prev => !prev)
                                setCount(prev => prev - 1)
                            }
                            } />}
                            <Text>{count}</Text>
                            <FiThumbsDown />
                            <Text>-100</Text>
                        </HStack>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default QueryCard
