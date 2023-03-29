import {
    Box, Heading, Text, VStack, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Center,
    Button
} from '@chakra-ui/react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const AskQuestion = () => {
    const [input, setInput] = useState({
        title: '', description: '', code: ''
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // backend code
    }

    return (
        <>
            <Navbar />
            <Box bg={"background"} height={"100%"}>
                <Center>
                    <VStack padding={"10"} color={"white"} width={"2xl"}>
                        <Heading>Ask Question</Heading>
                        <FormControl color="white" width={"4xl"} onSubmit={handleSubmit}>
                            <FormLabel>Title</FormLabel>
                            <Input color={"black"} name="title" onChange={handleOnChange} marginBottom={"4"} backgroundColor="white" placeholder='Enter your Question' />
                            <FormLabel>Code</FormLabel>
                            <Textarea height={"36"} name="code" color={"black"} onChange={handleOnChange}
                                marginBottom={"4"} backgroundColor="white" placeholder='Put your code' />
                            <FormLabel>Description</FormLabel>
                            <Textarea name="description" color={"black"} onChange={handleOnChange}
                                marginBottom={"4"} height={"36"} backgroundColor="white" placeholder='Put your query here' />
                            <Button width={"100%"} variant={"solid"} colorScheme="blue">Submit</Button>
                        </FormControl>
                    </VStack>
                </Center>
            </Box>
        </>
    )
}

export default AskQuestion
