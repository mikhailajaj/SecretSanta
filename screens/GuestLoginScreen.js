import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
// Require your local image
const backgroundImage = require('../assets/img/background_sign.png');

const GuestLoginScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.guestLoginScreen}>
       <ImageBackground
        source={backgroundImage} // Replace with your image URL
        resizeMode="cover" // Cover is a good default option to cover the whole area
        style={styles.backgroundImage}
      >
      <View style={styles.mainContent}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Guest Log in</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Invitation Code" 
            // Add other props like onChangeText if needed
          />
          <TextInput 
            style={styles.input} 
            placeholder="Name" 
            // Add other props like onChangeText if needed
          />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry 
            // Add other props like onChangeText if needed
          />
          <CustomButton title="Login" onPress={() => navigation.navigate('GiftSelection')} width={'100%'} />
         
        </View>
      </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  guestLoginScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Add any additional styling you need
  },
  backgroundImage: {
    width:  '100%',
    flex: 1,
    justifyContent: 'center', // Align items vertically
    alignItems: 'center', // Align items horizontally
  },
  mainContent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // Add any additional styling you need
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    width: '80%', // Width is often set as a percentage of the screen width in React Native
  },
  title: {
    color: '#ff4500',
    marginBottom: 15,
    fontSize: 26,
    fontWeight: 'bold',
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
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    // Add any additional styling you need
  },
});


export default GuestLoginScreen;
