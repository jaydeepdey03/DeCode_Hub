import { Avatar, Box, Button, Card, CardBody, CardHeader, CardFooter, Center, Flex, Heading, HStack, IconButton, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';

const ProfileQuestion = () => {
    return (
        <Card maxW='md'>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        {/* <Avatar name='Segun Adebayo' src='https://api.dicebear.com/6.x/identicon/svg?seed=Fluffy' /> */}

                        <Box justifyContent={"center"} >
                            <Heading size='md' noOfLines={[1]}>Title</Heading>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                    // icon={<BsThreeDotsVertical />}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text noOfLines={[1]}>
                    With Chakra UI, I wanted to sync the speed of development with the speed
                    of design. I wanted the developer to be just as excited as the designer to
                    create a screen.
                </Text>
            </CardBody>
            <CardFooter justify='center' color={"blue.400"}
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}>
                <Text>3 Answers</Text>
            </CardFooter>
        </Card>
    )
}

export default ProfileQuestion
