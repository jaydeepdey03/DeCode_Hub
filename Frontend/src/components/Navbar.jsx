import { Button, HStack, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import './Navbar.css'
import ToggleTheme from "./ToggleTheme"
import { useEffect } from "react"
import useGlobalContext from "../hooks/useGlobalContext"

const Navbar = ({ queryBar, isAdmin }) => {

  const { walletaddress, setWalletaddress, connectWallet, getActiveAccount, disconnectWallet, getUserId } = useGlobalContext();

  const handleConnectWallet = async () => {
    const { wallet } = await connectWallet();
    setWalletaddress(wallet);
  };
  const handleDisconnectWallet = async () => {
    const { wallet } = await disconnectWallet();
    setWalletaddress(wallet);
  };

  useEffect(() => {
    const func = async () => {
      const account = await getActiveAccount();
      if (account) {
        setWalletaddress(account.address);
      }
    };
    func();
  }, [walletaddress, setWalletaddress, getActiveAccount]);

  // backend

  useEffect(() => {
    if(walletaddress)
    getUserId();
  }, [walletaddress])


  return (
    <HStack padding={"7"} display={"flex"} justifyContent={"space-between"} position="fixed" width="100%">
      <Text as="b" fontSize={"2xl"} color={"white"}>Logo</Text>
      {queryBar ? <InputGroup width={"container.md"}>
        <Input placeholder="Search Query" rounded={"3xl"} />
        <InputRightElement children={<SearchIcon marginRight={"3"} />} />
      </InputGroup> : isAdmin && <Text fontSize={"lg"} as="b">Admin Page</Text>}
      <HStack>
        {/* <ToggleTheme /> */}
        <Button width={"44"} onClick={walletaddress ? handleDisconnectWallet : handleConnectWallet} rounded={"3xl"} colorScheme={"blue"}>
          {walletaddress
            ? walletaddress.slice(0, 8) +
            "..." +
            walletaddress.slice(walletaddress.length - 4, walletaddress.length)
            : "Connect"}
        </Button>
      </HStack >
    </HStack >
  )
}

export default Navbar
