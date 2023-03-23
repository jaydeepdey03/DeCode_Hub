import { Avatar, Box, Button, Card, CardBody, Center, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react"

const AnswerCard = () => {
    return (
        <Card width={"3xl"} padding={"5"}>
            <CardBody>
                {/* Top Header */}
                <HStack justifyContent={"space-between"} marginBottom={"3"}>
                    <Box>
                        <Text as="b" justifyContent={"start"} fontSize={"lg"}>Query Heading</Text>
                        <Flex width={"full"} marginRight={"3"} justifyContent={"space-around"}>
                            <Text>Asked by: </Text>
                            <Text>tz1gXMk...tuJtASRKwddY</Text>
                        </Flex>
                    </Box>
                    <Button>Answer Now</Button>
                </HStack>
                {/* Problem desc*/}
                <Text>
                    Correct. Use one of the alternative implementations available:
                </Text>
                {/* Code box */}
                <Center marginTop={"4"} backgroundColor={"gray.200"} padding={"2"} borderRadius={"16px"} alignItems={"center"} justifyContent={"center"}>
                    <Text>{`
                        #include <string.h> 
                        char *strrev(char *str) 
                        { 
                              char *p1, *p2; 
                              if (! str || ! *str) 
                                     return str; 
                              for (p1 = str, p2 = str + strlen(str) - 1; p2 > p1; ++p1, --p2) { 
                                      *p1 ^= *p2; 
                                      *p2 ^= *p1; 
                                      *p1 ^= *p2; 
                               } 
                                return str; 
                        }
                    
                    `}</Text>
                </Center>
                {/* Furthur Text */}
                <Text marginTop={"4"}>Is this possible as illustrated above, or in the .pylintrc configuration file for example?</Text>
            </CardBody>
        </Card>
    )
}

export default AnswerCard
