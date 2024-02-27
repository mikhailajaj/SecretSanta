import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './component/SignUpScreen/SignUpScreen'; // Import your screens accordingly
import LoginScreen from './component/LoginScreen/LoginScreen';
import GuestLoginScreen from './component/GuestLoginScreen/GuestLoginScreen';
import GiftSelectionScreen from './component/GiftSelectionScreen/GiftSelectionScreen';
import DashboardScreen from './component/DashboardScreen/DashboardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
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
