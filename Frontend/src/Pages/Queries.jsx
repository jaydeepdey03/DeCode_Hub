import { Heading, Text, VStack } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import QueryCard from "../components/QueryCard"

const Query = () => {
    return (
        <div>
            <Navbar queryBar={true}/>
            <VStack padding={"6"}>
                <Heading>Top Queries</Heading>

                <QueryCard/>
                <QueryCard/>
                <QueryCard/>
                <QueryCard/>
            </VStack>
        </div>
    )
}

export default Query
