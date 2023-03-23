import { Avatar, Box, Button, Card, CardBody, Center, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react"

const QuesionCard = () => {
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
                        I want to set up a GitLab CI Pipeline to perform static code analysis on a number of GitLab project repos, each containing several Python scripts. So far the proof of concept that I've set up and run, works perfectly by analysing and generating a score report.........but Pylint analyses Python files in my current GitLab Pipeline working directory.
                        What I'd however like to do is set up the Pipeline to have the flexibility of allowing me redirect Pylint to analyse Python files that exist in other locations other than my working directory, in other words, one or more external GitLab repositories.
                        In my existing GitLab pipeline, below is the command that executes the Pylint analysis:
                    </Text>
                    {/* Code box */}
                    <Center marginTop={"4"} backgroundColor={"gray.200"} padding={"2"} borderRadius={"16px"} alignItems={"center"} justifyContent={"center"}>
                        <Text><code style={{fontSize:'0.74rem', fontWeight:'600'}}>{`pylint --exit-zero --output-format=text $(find -type f -name "*.py" ! -path "**/.venv/**")`}</code></Text>
                    </Center>
                    {/* Furthur Text */}
                    <Text marginTop={"4"}>Is this possible as illustrated above, or in the .pylintrc configuration file for example?</Text>
            </CardBody>
        </Card>
    )
}

export default QuesionCard
