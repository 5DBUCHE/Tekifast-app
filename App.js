import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserSelectScreen from './src/screens/UserSelectScreen';
import ClientLogin from './src/screens/ClientLogin';
import ProfessionalLogin from './src/screens/ProfessionalLogin';
import ProfessionalMenu from './src/screens/ProfessionalMenu';
import ClientMenu from './src/screens/ClientMenu';
import ClientRegister from './src/screens/ClientRegister';
import ClientPay from './src/screens/ClientPay';
import ProfessionalJobDescription from './src/screens/ProfessionalJobDescription';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="UserSelect" component={UserSelectScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ClientLogin" component={ClientLogin} options={{ headerShown: false }} />
          <Stack.Screen name="ClientMenu" component={ClientMenu} options={{ headerShown: false }} />
          <Stack.Screen name="ClientRegister" component={ClientRegister} options={{ headerShown: false }} />
          <Stack.Screen name="ClientPay" component={ClientPay} options={{ headerShown: false }} />
          <Stack.Screen name="ProfessionalLogin" component={ProfessionalLogin} options={{ headerShown: false }} />
          <Stack.Screen name="ProfessionalMenu" component={ProfessionalMenu} options={{headerShown: false}} />
          <Stack.Screen name="ProfessionalJobDescription" component={ProfessionalJobDescription} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;