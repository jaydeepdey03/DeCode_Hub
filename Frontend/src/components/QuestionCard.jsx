import { Avatar, Box, Button, Card, CardBody, Center, Container, Flex, FormControl, FormLabel, HStack, Input, Menu, MenuButton, MenuItem, MenuList, Text, Textarea, useDisclosure, VStack } from "@chakra-ui/react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import useGlobalContext from "../hooks/useGlobalContext";



// new content
import { useParams } from "react-router-dom"
import AnswerCard from "../components/AnswerCard"



const QuesionCard = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { userId } = useGlobalContext();
    const [answer, setAnswer] = useState({
        // title: '',
        code: '',
        language: '',
        description: ''
    })


    // new content

    const [question, setQuestion] = useState({})
    const [answers, setAnswers] = useState([])
    const { id } = useParams()

    // const { userId } = useGlobalContext()

    const URL = "http://localhost:4000"

    useEffect(() => {
        const getQuestions = async () => {
            const ques = await axios.get(`${URL}/question/get-question/${id}`)
            setQuestion(ques.data[0])
            console.log(ques.data[0])
        }
        const getAnswers = async () => {
            const answers = await axios.get(`${URL}/answer/answers/${id}`)
            console.log(answers.data)
            setAnswers(answers.data)
        }
        getQuestions();
        getAnswers();
    }, [id, userId])


    const handleAnswer = (e) => {
        const { name, value } = e.target
        setAnswer({ ...answer, [name]: value })
    }

    const handleSubmit = async () => {
        // submit and close the modal
        onClose()
        console.log(answer)
        try {
            const URL = "http://localhost:4000/answer"
            console.log(answer.description)
            console.log(answer.code)
            console.log(answer.language)
            const res = await axios.post(`${URL}/add-answer`, {
                questionId: props.id,
                userId: userId,
                code: answer.code,
                codeLanguage: answer.language,
                content: answer.description
            })
            console.log(res)
            // res = res.data;
            setAnswers(...answers, res.data);
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <Card width={"3xl"} padding={"5"}>
                <CardBody>
                    {/* Top Header */}
                    <HStack justifyContent={"space-between"} marginBottom={"3"}>
                        <Box display={"flex"} alignItems={"start"} justifyContent={"start"} flexDirection="column">
                            <Text as="b" justifyContent={"start"} fontSize={"lg"}>{props.title}</Text>
                            <Flex width={"full"} justifyContent={"start"}>
                                <Text>Asked by: &nbsp;</Text>
                                <Text as="b"> {props.user.slice(0, 8) + "..." + props.user.slice(-4)} </Text>
                            </Flex>
                            <Text></Text>
                        </Box>
                        <Button onClick={onOpen}>Answer Now</Button>
                    </HStack>
                    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Answer the Question</ModalHeader>
                            {/* <ModalCloseButton /> */}
                            <ModalBody>
                                <FormControl>
                                    {/* <FormLabel>Title</FormLabel>
                                    <Input name="title" onChange={handleAnswer} placeholder="Answer title" /> */}
                                    <Menu>
                                        <HStack alignItems={"center"} justifyContent={"space-between"} padding={"2"}>
                                            <FormLabel>Code</FormLabel>
                                            <MenuButton size={"sm"} px={2} py={1} as={Button} rightIcon={<ChevronDownIcon />}>
                                                {answer.language === '' ? 'Select Language' : answer.language}
                                            </MenuButton>
                                        </HStack>
                                        <MenuList>
                                            <MenuItem onClick={() => setAnswer({ ...answer, language: 'Javascript' })}>Javascript</MenuItem>
                                            <MenuItem onClick={() => setAnswer({ ...answer, language: 'C++' })}>C++</MenuItem>
                                            <MenuItem onClick={() => setAnswer({ ...answer, language: 'CSS' })}>CSS</MenuItem>
                                            <MenuItem onClick={() => setAnswer({ ...answer, language: 'Java' })}>Java</MenuItem>
                                            <MenuItem onClick={() => setAnswer({ ...answer, language: 'Python' })}>Python</MenuItem>
                                        </MenuList>
                                    </Menu>
                                    <Textarea name="code" onChange={handleAnswer} placeholder="Code (if any)" />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Description</FormLabel>
                                    <Textarea onChange={handleAnswer} name="description" height={"32"} placeholder="Description" />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter justifyContent={"space-between"}>
                                <Button colorScheme='blue' onClick={(e) => {
                                    e.preventDefault()
                                    handleSubmit()
                                }} variantColor="blue" mr={3} >
                                    Answer Now
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                    {/* Problem desc*/}
                    <Text>
                        {props.description}
                    </Text>
                    {/* Code box */}
                    <Center marginTop={"4"} borderRadius={"16px"} alignItems={"center"} justifyContent={"center"}>
                        <SyntaxHighlighter language={`${props.codeLanguage.toLowerCase() || 'javascript'}`} style={vscDarkPlus} wrapLines={true}>
                            {`${props.code}`}
                        </SyntaxHighlighter>
                    </Center>
                    {/* Furthur Text */}
                    {/* <Text marginTop={"4"}>Is this possible as illustrated above, or in the .pylintrc configuration file for example?</Text> */}

                </CardBody>
            </Card>
            {/* {answers.map(answer => (
                <AnswerCard
                    key={answer._id}
                    id={answer._id}
                    user={answer.userId}
                    content={answer.content}
                    upvotes={answer.upvotes}
                    downvotes={answer.downvotes}
                />
            ))} */}
        </>
    )
}

export default QuesionCard
