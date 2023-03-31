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
import axios from 'axios'
import useGlobalContext from '../hooks/useGlobalContext'

const AskQuestion = () => {
    const {userId}=useGlobalContext();
    const [input, setInput] = useState({
        title: '', description: '', code: '',codeLangauge:'',image:''
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }


    const handleSubmit = async() => {

        console.log("jaydeep")
        const URL="http://localhost:4000/question/"
        // e.preventDefault()

        console.log(userId, input.title)
            try
            {
                const res = await axios.post(`${URL}add-question`,{
                    userId:userId,
                    title:input.title,
                    description:input.description,
                    code:input.code,
                    codeLangauge:input.codeLangauge,
                    image:input.image
                })
                console.log(res)            
            }
            catch(err)
            {
                console.log(err)
            }
        
    }

    return (
        <>
            <Box bg={"background"} height={"100%"}>
                <Navbar />
                <Center>
                    <VStack padding={"10"} color={"white"} maxWidth="sm">
                        <Heading>Ask Question</Heading>
                        <FormControl color="white" width={"xl"}>
                            <FormLabel>Title</FormLabel>
                            <Input required color={"black"} name="title" onChange={handleOnChange} marginBottom={"4"} backgroundColor="white" placeholder='Enter your Question' />
                            <FormLabel>Code</FormLabel>
                            <Textarea required height={"36"} name="code" color={"black"} onChange={handleOnChange}
                                marginBottom={"4"} backgroundColor="white" placeholder='Put your code' />
                            <FormLabel>Description</FormLabel>
                            <Textarea required name="description" color={"black"} onChange={handleOnChange}
                                marginBottom={"4"} height={"36"} backgroundColor="white" placeholder='Put your query here' />
                            <Button width={"100%"} variant={"solid"} colorScheme="blue" onClick={handleSubmit}>Submit</Button>
                        </FormControl>
                    </VStack>
                </Center>
            </Box>
        </>
    )
}

export default AskQuestion
