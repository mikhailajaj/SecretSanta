import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Accept width as a prop
const CustomButton = ({ title, onPress, width }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width: width }]} // Apply the width to the button style
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// Define default styles for the button
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff4500',//#ff4500 // The color in the image looks like a coral shade; adjust as needed
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20, // Rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    // Shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: '#fff', // White text color
    fontSize: 16, // Adjust the size as needed
    fontWeight: 'bold', // Bold text
  },
});

export default CustomButton;
