import { Avatar, Button, Card, CardBody, HStack, Text, VStack } from "@chakra-ui/react"
import MintRequest from "../components/MintRequest"
import Navbar from "../components/Navbar"

const Admin = () => {
    return (
        <div>
            <Navbar queryBar={false}/>
            <MintRequest />
            <MintRequest />
            <MintRequest />
            <MintRequest />
            <MintRequest />
        </div>
    )
}

export default Admin
