import { Avatar, Box, Button, Card, CardBody, Center, HStack, Text, VStack } from "@chakra-ui/react"
import QuestionCard from "../components/QuestionCard"
import Navbar from "../components/Navbar"
import AnswerCard from "../components/AnswerCard"

const Answer = () => {
    return (
        <div>
            <Navbar />
            <Center marginBottom={"7"}>
                <VStack>
                    <QuestionCard />
                    <AnswerCard />
                </VStack>
            </Center>
        </div >
    )
}

export default Answer
