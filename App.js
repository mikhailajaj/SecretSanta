import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './components/SignUpScreen/SignUpScreen'; // Import your screens accordingly
import LoginScreen from './components/LoginScreen/LoginScreen';
import GuestLoginScreen from './components/GuestLoginScreen/GuestLoginScreen';
import GiftSelectionScreen from './components/GiftSelectionScreen/GiftSelectionScreen';
import DashboardScreen from './components/DashboardScreen/DashboardScreen';
import 'bootstrap/dist/css/bootstrap.css'
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
