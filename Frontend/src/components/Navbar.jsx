import { Button, HStack, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import './Navbar.css'
import { useEffect } from "react"
import useGlobalContext from "../hooks/useGlobalContext"

const Navbar = () => {

  const { walletaddress, setWalletaddress, connectWallet, getActiveAccount, disconnectWallet } = useGlobalContext();

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

  return (
    <HStack padding={"7"} display={"flex"} justifyContent={"space-around"}>
      <p>Logo</p>
      <InputGroup width={"container.md"}>
        <Input placeholder="Search Query" rounded={"3xl"} />
        <InputRightElement children={<SearchIcon marginRight={"14"} />} />
      </InputGroup>
      <HStack>
        <Button onClick={walletaddress ? handleDisconnectWallet : handleConnectWallet} rounded={"3xl"} colorScheme={"teal"}>
          {walletaddress
            ? walletaddress.slice(0, 4) +
            "..." +
            walletaddress.slice(walletaddress.length - 4, walletaddress.length)
            : "Connect"}
        </Button>
      </HStack>
    </HStack >
  )
}

export default Navbar
