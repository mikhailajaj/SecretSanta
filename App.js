import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screens/SignUpScreen'; // Import your screens accordingly
import LoginScreen from './screens/LoginScreen';
import GuestLoginScreen from './screens/GuestLoginScreen';
import GiftSelectionScreen from './screens/GiftSelectionScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createStackNavigator();

const App = () => {
  console.log("App Executed")
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GiftSelection">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GuestLogin" component={GuestLoginScreen} />
        <Stack.Screen name="GiftSelection" component={GiftSelectionScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        {/* You can add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
