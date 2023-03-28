import { Avatar, Box, Button, Card, CardBody, Center, HStack, Text, VStack } from "@chakra-ui/react"
import QuestionCard from "../components/QuestionCard"
import Navbar from "../components/Navbar"
import AnswerCard from "../components/AnswerCard"
import { useParams } from "react-router-dom"

const Answer = () => {
    const { id } = useParams()
    // get question for id

    // get answers for this question id

    return (
        <Box bg="background" height={"100%"} padding={"2"}>
            <Navbar queryBar={false} isAdmin={false} />
            <Center marginBottom={"7"}>
                <VStack>
                    <QuestionCard id={id} />
                    {/* map all the answers */}
                    <AnswerCard />
                </VStack>
            </Center>
        </Box>
    )
}

export default Answer
