import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './GuestLoginScreenStyles.js';
import { useNavigation } from '@react-navigation/native';

const GuestLoginScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.guestLoginScreen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Kesitter</Text>
      </View>
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
          <TouchableOpacity style={styles.button} 
          onPress={() => navigation.navigate('GiftSelection')} // Use the name you used in your stack navigator
          color="#f08a5d"
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
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


export default GuestLoginScreen;
