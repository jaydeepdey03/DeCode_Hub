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
import { useState } from "react";


const QuesionCard = ({ id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [answer, setAnswer] = useState({
        title: '',
        code: '',
        language: '',
        desc: ''
    })

    const handleAnswer = (e) => {
        const { name, value } = e.target
        setAnswer({ ...answer, [name]: value })
    }

    const handleSubmit = () => {
        // submit and close the modal
        onClose()
        console.log(answer)
    }

    return (
        <>
            <Card width={"3xl"} padding={"5"}>
                <CardBody>
                    {/* Top Header */}
                    <HStack justifyContent={"space-between"} marginBottom={"3"}>
                        <Box display={"flex"} alignItems={"start"} justifyContent={"start"} flexDirection="column">
                            <Text as="b" justifyContent={"start"} fontSize={"lg"}>Running Pylint Analysis on Remote Repos</Text>
                            <Flex width={"full"} justifyContent={"start"}>
                                <Text>Asked by: </Text>
                                <Text>tz1gXMk...tuJtASRKwddY</Text>
                            </Flex>
                            <Text>{id}</Text>
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
                                    <FormLabel>Title</FormLabel>
                                    <Input name="title" onChange={handleAnswer} placeholder="Answer title" />
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
                                    <Textarea name="description" height={"32"} placeholder="Description" />
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
                        I want to set up a GitLab CI Pipeline to perform static code analysis on a number of GitLab project repos, each containing several Python scripts. So far the proof of concept that I've set up and run, works perfectly by analysing and generating a score report.........but Pylint analyses Python files in my current GitLab Pipeline working directory.
                        What I'd however like to do is set up the Pipeline to have the flexibility of allowing me redirect Pylint to analyse Python files that exist in other locations other than my working directory, in other words, one or more external GitLab repositories.
                        In my existing GitLab pipeline, below is the command that executes the Pylint analysis:
                    </Text>
                    {/* Code box */}
                    <Center marginTop={"4"} borderRadius={"16px"} alignItems={"center"} justifyContent={"center"}>
                        <SyntaxHighlighter language="python" style={vscDarkPlus} wrapLines={true}>
                            {`pylint --exit-zero --output-format=text $(find -type f -name "*.py" ! -path "**/.venv/**")`}

                        </SyntaxHighlighter>
                    </Center>
                    {/* Furthur Text */}
                    <Text marginTop={"4"}>Is this possible as illustrated above, or in the .pylintrc configuration file for example?</Text>

                </CardBody>
            </Card>
        </>
    )
}

export default QuesionCard
