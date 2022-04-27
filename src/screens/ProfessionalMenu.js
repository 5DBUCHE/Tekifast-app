import { Text, NativeBaseProvider, Box, Heading, HStack, Spacer, extendTheme, Badge, Avatar, Flex, Pressable } from 'native-base';
import React from 'react';
import ProfessionalProfile from './ProfessionalProfile';
import ProfessionalHistory from './ProfessionalHistory';
import ProfessionalMyBusiness from './ProfessionalMyBusiness';
import { MaterialCommunityIcons } from "@expo/vector-icons";


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Home = ({navigation}) => {
    return (
        <>
            <Box alignItems="center" mt="30px">
                <Heading mt="10px" color={"primary.500"}>N<Heading mt="10px" >ews requests</Heading></Heading>
                <Pressable onPress={() => navigation.navigate('ProfessionalJobDescription')} mt="15px">
                    <Box maxWidth="300" borderWidth="1" borderColor="coolGray.300" bg="coolGray.100" p="5" rounded="8">
                        <HStack space={"3"} alignItems="center">
                            <Avatar bg="green.500" alignSelf="center" size="sm" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}>
                                KA
                            </Avatar>
                            <Badge colorScheme="primary.700" _text={{
                                color: "white"
                            }} variant="solid" rounded="4">
                                New!
                            </Badge>
                            <Spacer />
                            <Text fontSize={10} color="coolGray.800">
                                Date: May/02/2022
                            </Text>
                        </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="md">
                            Karla
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            No muestra nada la pantalla de mi computadora cuando la prendo
                        </Text>
                        <Flex>
                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                                Read More
                            </Text>
                        </Flex>
                    </Box>
                </Pressable>
            </Box>
        </>
    )
}

const ProfessionalMenu = ({ navigation }) => {
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
            <Tab.Navigator barStyle={{ backgroundColor: '#bbf2d3' }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="ProfessionalHistory"
                    component={ProfessionalHistory}
                    options={{
                        tabBarLabel: 'History',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="history" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="ProfessionalMyBusiness"
                    component={ProfessionalMyBusiness}
                    options={{
                        tabBarLabel: 'My Business',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="briefcase-variant-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="ProfessionalProfile"
                    component={ProfessionalProfile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NativeBaseProvider>
    )
}

export default ProfessionalMenu;