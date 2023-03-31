import Navbar from '../components/Navbar'
import { Box } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import MintRequest from "../components/MintRequest"

const Admin = () => {
    const [requests, setRequests] = useState([])

    const URL = "http://localhost:4000/"

    useEffect(() => {
        const getRequests = async () => {
            const response = await axios.get("http://localhost:4000/requests/get-requests");
            setRequests(response.data);
            console.log(response.data)
        };
        getRequests();
    }, []);
    return (
        <Box bg={"background"} height={"100%"}>
            <Navbar queryBar={false} isAdmin={true} />
            <MintRequest />
            {
                requests.map((req, idx) => (<MintRequest key={idx} address={req.address} nftType={req.nftType} />))
            }
        </Box>
    )
}

export default Admin
