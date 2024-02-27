import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './SignUpScreenStyles';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signupScreen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Kesitter</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />
          <TextInput style={styles.input} secureTextEntry={true} placeholder="Confirm Password" />
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Dashboard')} // Use the name you used in your stack navigator
            color="#f08a5d"
          />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>WELCOME</Text>
          <Button title="Guest Login"
          onPress={() => navigation.navigate('GuestLogin')} // Use the name you used in your stack navigator
          color="#f08a5d"
          />
          <Button title="Login" 
          onPress={() => navigation.navigate('Login')} // Use the name you used in your stack navigator
          color="#f08a5d"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Secret Santa</Text>
      </View>
    </View>
  );
};
export default SignUpScreen;