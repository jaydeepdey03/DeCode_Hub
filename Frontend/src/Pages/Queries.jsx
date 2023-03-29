import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import QueryCard from "../components/QueryCard"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Query = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQueries = async () => {
            const response = await axios.get("http://localhost:4000/question/get-question");
            setQuestions(response.data);
            console.log(response.data)
        };
        getQueries();
    }, []);

    return (
        <Box bg="background" height={"100%"}>
            <Navbar queryBar={true} />
            <VStack padding={"6"}>
                <Heading color={"white"} marginBottom={"10"}>Top Queries</Heading>

                {questions.map((question) => (
                    <Link to={`/answer/${question._id}`}>
                        <QueryCard
                            key={question._id}
                            title={question.title}
                            description={question.description}
                            code={question.code}
                            codeLanguage={question.codeLanguage}
                            image={question.image}
                        />
                    </Link>
                ))}
            </VStack>
        </Box>
    )
}

export default Query
