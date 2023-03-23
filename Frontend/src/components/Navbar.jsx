import { Button, HStack, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import './Navbar.css'
import {
  connectWallet,
  getActiveAccount,
  disconnectWallet,
} from "../utils/Wallet"
import { useEffect, useState } from "react"
import ToggleTheme from "./ToggleTheme"

const Navbar = ({ queryBar, isAdmin }) => {

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
    <HStack padding={"7"} display={"flex"} justifyContent={"space-between"}>
      <Text as="b" fontSize={"2xl"} color={"white"}>Logo</Text>
      {queryBar ? <InputGroup width={"container.md"}>
        <Input placeholder="Search Query" rounded={"3xl"} />
        <InputRightElement children={<SearchIcon marginRight={"3"} />} />
      </InputGroup> : isAdmin && <Text fontSize={"lg"} as="b">Admin Page</Text>}
      <HStack>
        {/* <ToggleTheme /> */}
        <Button width={"44"} onClick={wallet ? handleDisconnectWallet : handleConnectWallet} rounded={"3xl"} colorScheme={"blue"}>
          {wallet
            ? wallet.slice(0, 8) +
            "..." +
            wallet.slice(wallet.length - 4, wallet.length)
            : "Connect"}
        </Button>
      </HStack>
    </HStack >
  )
}

export default Navbar
