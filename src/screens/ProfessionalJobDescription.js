import React from 'react';
import { Alert, Collapse, Button, extendTheme, NativeBaseProvider, Heading, Box, Avatar, HStack, VStack, Text, Fab, Icon, IconButton, CloseIcon } from 'native-base';
import { Ionicons } from "@expo/vector-icons";

const ProfessionalJobDescription = ({ navigation }) => {
    const [show, setShow] = React.useState(false);
    const theme = extendTheme({
        colors: {
            primary: {
                50: '#e0fded',
                100: '#bbf2d3',
                200: '#93e9b7',
                300: '#6adf9b',
                400: '#42d680',
                500: '#29bd66',
                600: '#1d934f',
                700: '#116938',
                800: '#054020',
                900: '#001705'
            }
        }
    })
    return (
        <NativeBaseProvider theme={theme}>
            <Fab mt={"20px"} onPress={() => navigation.goBack()} renderInPortal={false} shadow={2} size="4" placement="top-left" icon={<Icon color="white" as={Ionicons} name="chevron-back" size="4" />} />
            <Collapse isOpen={show}>
                <Alert mt={"70px"} w="100%" maxW="400" status="success">
                    <VStack space={1} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                            <HStack flexShrink={1} space={2} alignItems="center">
                                <Alert.Icon />
                                <Text fontSize="md" fontWeight="medium" _dark={{
                                    color: "coolGray.800"
                                }}>
                                   Status Request
                                </Text>
                            </HStack>
                            <IconButton variant="unstyled" _focus={{
                                borderWidth: 0
                            }} icon={<CloseIcon size="3" color="coolGray.600" />} onPress={() => setShow(false)} />
                        </HStack>
                        <Box pl="6" _dark={{
                            _text: {
                                color: "coolGray.600"
                            }
                        }}>
                            You accepted this job!
                        </Box>
                    </VStack>
                </Alert>
            </Collapse>
            <Box mt={!show ? '90px' : '10px'} ml={'20px'}>
                <HStack space={"2"}>
                    <Avatar bg="green.500" alignSelf="center" size="lg" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        KA
                    </Avatar>
                    <VStack>
                        <Heading color={"primary.500"}>Karla <Heading>Juarez</Heading></Heading>
                        <Heading size={'sm'}>Date: May/02/2022</Heading>
                    </VStack>
                </HStack>
            </Box>
            <Box m={'20px'}>
                <Heading size={'md'}>Short Description</Heading>
                <Text>No muestra nada la pantalla de mi computadora cuando la prendo</Text>
                <Heading size={'md'} mt={"5px"}>Complete Description</Heading>
                <Text>Cuando enciende lo que es mi computadora no puedo ver nada de lo que estoy viendo, ya cambie los cables y aun así no ve lo que sale de la computadora</Text>
                <Heading size={'md'} mt={"5px"}>Photo</Heading>
                <Text>Nothing</Text>
            </Box>
            <Box mt={'20px'} alignItems={'center'}>
                <HStack space={"2"}>
                    <Button variant={"outline"} colorScheme={"danger"}>Decline</Button>
                    <Button colorScheme={"success"} onPress={() => setShow(true)}>Accept</Button>
                </HStack>
            </Box>
        </NativeBaseProvider>
    )
}

export default ProfessionalJobDescription;
