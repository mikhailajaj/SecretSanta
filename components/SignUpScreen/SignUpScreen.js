import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';


const LoginScreen = () => {
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');

  const handle_text_input_change = (input, input_type) => {
    input_type === 'email' ? set_email(input) : set_password(input);
  }

  const login_action = () => {
    console.log("Pressed");
    console.log(email, password);
  }

  return (
    <ImageBackground
      source={require('../../assets/img/Welcome_Screen_background.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{
        backgroundColor: 'white',
        height: 280,
        width: 250,
        borderRadius: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TextInput
          placeholder='First Name'
          style={{
            backgroundColor: '#D9D9D9',
            width: 200,
            borderRadius: 25,
            padding: 10,
            marginBottom: 10,
          }}
        >
        </TextInput>
        <TextInput
          placeholder='Last Name'
          style={{
            backgroundColor: '#D9D9D9',
            width: 200,
            borderRadius: 25,
            padding: 10,
            marginBottom: 10,
          }}
        >
        </TextInput>
        <TextInput
          style={{
            backgroundColor: '#D9D9D9',
            width: 200,
            borderRadius: 25,
            padding: 10,
            marginBottom: 10,
          }}
          placeholder='Email'
          onChangeText={(text) => handle_text_input_change(text, 'email')}
          value={email}
        />
        <TextInput
          style={{
            backgroundColor: '#D9D9D9',
            width: 200,
            borderRadius: 25,
            padding: 10,
            marginBottom: 10,
          }}
          placeholder='Password'
          onChangeText={(text) => handle_text_input_change(text, 'password')}
          secureTextEntry={true}
          value={password}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#C62828', // Red color for Christmas
            width: 200,
            borderRadius: 25,
            padding: 10,
            alignItems: 'center',
            marginBottom: 10,
          }}
          onPress={login_action}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems : 'center',
            justifyContent : 'space-between',
            flexDirection : 'row',
          }}
        >
        <Text>
          Already have an account?
        </Text>
        <TouchableOpacity >
          <Text
          style={{
          color : 'blue',
          paddingLeft : 5
          }}
          >
            Log In
          </Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
