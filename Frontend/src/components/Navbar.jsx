import { Button, HStack, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import './Navbar.css'
import {
  connectWallet,
  getActiveAccount,
  disconnectWallet,
} from "../utils/Wallet"
import { useEffect, useState } from "react"

const Navbar = () => {

  const [wallet, setWallet] = useState(null);

  const handleConnectWallet = async () => {
    const { wallet } = await connectWallet();
    setWallet(wallet);
  };
  const handleDisconnectWallet = async () => {
    const { wallet } = await disconnectWallet();
    setWallet(wallet);
  };

  useEffect(() => {
    const func = async () => {
      const account = await getActiveAccount();
      if (account) {
        setWallet(account.address);
      }
    };
    func();
  }, []);

  return (
    <HStack padding={"7"} display={"flex"} justifyContent={"space-around"}>
      <p>Logo</p>
      <InputGroup width={"container.md"}>
        <Input placeholder="Search Query" rounded={"3xl"} />
        <InputRightElement children={<SearchIcon marginRight={"14"} />} />
      </InputGroup>
      <HStack>
        <Button onClick={wallet ? handleDisconnectWallet : handleConnectWallet} rounded={"3xl"} colorScheme={"teal"}>
          {wallet
            ? wallet.slice(0, 4) +
            "..." +
            wallet.slice(wallet.length - 4, wallet.length)
            : "Connect"}
        </Button>
      </HStack>
    </HStack >
  )
}

export default Navbar
