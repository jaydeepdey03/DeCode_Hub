import { Avatar, Box, Button, Card, CardBody, Center, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


const QuesionCard = () => {
    return (
        <Card width={"3xl"} padding={"5"}>
            <CardBody>
                {/* Top Header */}
                <HStack justifyContent={"space-between"} marginBottom={"3"}>
                    <Box display={"flex"} alignItems={"start"} justifyContent={"start"} flexDirection="column">
                        <Text as="b" justifyContent={"start"} fontSize={"lg"}>Running Pylint Analysis on Remote Repos</Text>
                        <Flex width={"full"} justifyContent={"start"}>
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
                <Center marginTop={"4"}  borderRadius={"16px"} alignItems={"center"} justifyContent={"center"}>
                    <SyntaxHighlighter language="python" style={vscDarkPlus} wrapLines={true}>
                        {`pylint --exit-zero --output-format=text $(find -type f -name "*.py" ! -path "**/.venv/**")`}
                        
                    </SyntaxHighlighter>
                </Center>
                {/* Furthur Text */}
                <Text marginTop={"4"}>Is this possible as illustrated above, or in the .pylintrc configuration file for example?</Text>
            </CardBody>
        </Card>
    )
}

export default QuesionCard
