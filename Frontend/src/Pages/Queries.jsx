import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import QueryCard from "../components/QueryCard"

const Query = () => {
    return (
        <Box bg="background" height={"100%"}>
            <Navbar queryBar={true}/>
            <VStack padding={"6"}>
                <Heading color={"white"} marginBottom={"10"}>Top Queries</Heading>

                <QueryCard/>
                <QueryCard/>
                <QueryCard/>
                <QueryCard/>
            </VStack>
        </Box>
    )
}

export default Query
