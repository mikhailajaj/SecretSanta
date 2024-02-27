import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import styles from './LoginScreenStyles.js';
const LoginScreen = () => {
  return (
    <View style={styles.loginScreen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Kesitter</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Log in</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button
            title="Login"
            onPress={() => {}}
            color="#f08a5d" // You can customize the color
          />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>WELCOME</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Secret Santa</Text>
      </View>
    </View>
  );
};
export default LoginScreen;
