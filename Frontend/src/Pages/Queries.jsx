import { Heading, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import QueryCard from "../components/QueryCard"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Query = () => {
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const getQueries = async () => {
            const response = await axios.get("http://localhost:4000/question/get-question");
            setQuestions(response.data);
            console.log(response.data)
        };
        getQueries();
    }, []);

    return (
        <div>
            <Navbar queryBar={true} />
            <VStack padding={"6"}>
                <Heading>Top Queries</Heading>

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
        </div>
    );
};
export default Query;