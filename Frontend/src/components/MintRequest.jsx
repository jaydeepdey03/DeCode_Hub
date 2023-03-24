import { Avatar, Button, Card, CardBody, HStack, Text, VStack } from "@chakra-ui/react"

const MintRequest = () => {
    return (
        <div>
            <VStack padding={"5"}>
                <Card width={"4xl"}>
                    <CardBody display={"flex"} justifyContent={"space-between"}>
                        <HStack>
                            <Avatar size={"sm"} />
                            <Text fontSize={"sm"}>tz1gXMkr...JtASRKwddY</Text>
                            <Text>requested for <span style={{ fontWeight: '700' }}>#100Question</span> Achievement NFT</Text>
                        </HStack>
                        <Button>Mint NFT</Button>
                    </CardBody>
                </Card>
            </VStack>
        </div>
    )
}

export default MintRequest
