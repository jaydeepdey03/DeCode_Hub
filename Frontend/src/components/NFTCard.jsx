import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"

const NFTCard = () => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-1.png.webp'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    height={"xs"}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' margin={"auto"}>#100Question</Heading>
                    <Text align={"center"} as="">
                        Achievement for 100 Question
                    </Text>
                    {/* <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text> */}
                </Stack>
            </CardBody>
            {/* <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter> */}
        </Card>
    )
}

export default NFTCard
