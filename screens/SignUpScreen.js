import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
// Require your local image
const backgroundImage = require('../assets/img/background_sign.png');

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signupScreen}>
      <ImageBackground
        source={backgroundImage} // Replace with your image URL
        resizeMode="cover" // Cover is a good default option to cover the whole area
        style={styles.backgroundImage}
      >
      <View style={styles.mainContent}>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />

          <TextInput style={styles.input} placeholder="Email" />
          <CustomButton title="Sign Up" onPress={() => navigation.navigate('Dashboard')} width={'100%'} />
        </View>
        <View style={styles.ButtonContainer}>
        <CustomButton title="Guest Login" onPress={() => navigation.navigate('GuestLogin')} width={150} />
        <CustomButton title="Login" onPress={() => navigation.navigate('Login')} width={150} />
        </View>
      </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  signupScreen: {

    fontFamily: 'Arial',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  mainContent: {
    width: '100%',
    // flexDirection is 'column' by default in React Native
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    width: '80%', // or a specific dp value
    alignSelf: 'center',
  },
  input: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white', // Assuming you want the TextInput to have a white background
    width: '100%', // You can adjust the width as needed
    borderRadius: 5, // Optional: if you want rounded corners
    borderWidth: 1, // Optional: if you want borders
    borderColor: 'gray', // Optional: if you want borders
  },
  ButtonContainer: {
    flexDirection: 'row',

  },

  backgroundImage: {
    width:  '100%',
    flex: 1,
    justifyContent: 'center', // Align items vertically
    alignItems: 'center', // Align items horizontally
  },
  // ...add more styles as needed
});
export default SignUpScreen;