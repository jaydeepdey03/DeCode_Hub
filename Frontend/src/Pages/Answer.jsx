import { Avatar, Box, Button, Card, CardBody, Center, HStack, Text, VStack } from "@chakra-ui/react"
import QuestionCard from "../components/QuestionCard"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import AnswerCard from "../components/AnswerCard"
import { useParams } from "react-router-dom"
import axios from "axios"
import useGlobalContext from "../hooks/useGlobalContext"

const Answer = () => {

    const [question, setQuestion] = useState({})
    const [userQuestion, setUserQuestion] = useState('')
    const [answers, setAnswers] = useState([])
    const { id } = useParams()

    const { userId } = useGlobalContext()

    const URL = "http://localhost:4000"

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const ques = await axios.get(`${URL}/question/get-question/${id}`)
                setQuestion(ques.data[0])
                setUserQuestion(ques.data[0].userId.account)
                console.log("ads", ques.data[0])
            }
            catch (err) {
                console.log(err)
            }
        }

        const getAnswers = async () => {
            const answers = await axios.get(`${URL}/answer/answers/${id}`)
            console.log(answers.data)
            setAnswers(answers.data)
        }
        getQuestions();
        getAnswers();
    }, [id, userId])
    // get question for id

    // get answers for this question id

    return (
        <Box bg="background" minH={"100vh"} padding={"2"}>
            <Navbar queryBar={false} isAdmin={false} />
            <Center marginBottom={"7"}>
                <VStack>
                    {
                        // if question is not empty show the question card
                        userQuestion !== "" &&
                        <QuestionCard key={question._id}
                            id={question._id}
                            user={userQuestion}
                            title={question.title}
                            description={question.description}
                            code={question.code}
                            codeLanguage={question.codeLanguage}
                            image={question.image}
                        />
                    }
                    {/* if no answers show a text 'no one answered with suitable margin'*/}
                    {answers.length === 0 && <Text color={"white"}>No one has answered this question yet</Text>}


                    {/* map all the answers */}
                    {answers.map(answer => (
                        <AnswerCard
                            key={answer._id}
                            id={answer._id}
                            user={answer.userId}
                            content={answer.content}
                            upvotes={answer.upvotes}
                            downvotes={answer.downvotes}
                        />
                    ))}
                </VStack>
            </Center>
        </Box>
    )
}

export default Answer
