import { Avatar, Button, HStack, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import './Navbar.css'
import { connectWallet, getAccount } from "../utils/Wallet"
import { useEffect, useState } from "react"

const Navbar = () => {

    const [account, setAccount] = useState("")

    useEffect(() => {
        (async () => {
          const account = await getAccount();
          setAccount(account);
        })();
      }, []);

      const onConnectWallet = async () => {
        await connectWallet();
        const account = await getAccount();
        setAccount(account);
      };

    return (
        <HStack padding={"7"} display={"flex"} justifyContent={"space-around"}>
            <p>Logo</p>
            <InputGroup width={"container.md"}>
                <Input placeholder="Search Query" rounded={"3xl"} />
                <InputRightElement children={<SearchIcon marginRight={"14"} />} />
            </InputGroup>
            <HStack>
                {account ? 
                <>
                <Avatar height={"10"} width={"10"} />
                <p>{account.slice(0, 10) + '...' + account.slice(-4)}</p></>
                : <Button onClick={connectWallet}>Connect Wallet</Button>}
            </HStack>
        </HStack>
    )
}

export default Navbar
