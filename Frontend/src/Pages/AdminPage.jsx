import { Box } from "@chakra-ui/react"
import MintRequest from "../components/MintRequest"
import Navbar from "../components/Navbar"

const Admin = () => {
    return (
        <Box bg={"background"} height={"100%"}>
            <Navbar queryBar={false} isAdmin={true} />
            <MintRequest />
            <MintRequest />
            <MintRequest />
            <MintRequest />
            <MintRequest />
        </Box>
    )
}

export default Admin
