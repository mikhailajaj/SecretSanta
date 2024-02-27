import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signupScreen: {
    fontFamily: 'Arial',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    // React Native doesn't support backgroundImage, you would typically use an <ImageBackground> component
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20, // Choose your font size
    // fontFamily is inherited
  },
  mainContent: {
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
  button: {
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 10,
    borderRadius: 5, // Optional: if you want rounded corners
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 20, // Adjust as needed
  },
  welcomeButton: {
    backgroundColor: '#ff4500',
    padding: 10,
    margin: 10,
    borderRadius: 5, // Optional: if you want rounded corners
    alignItems: 'center',
  },
  welcomeButtonText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: 'white',
    // fontFamily is inherited
  },
  // ...add more styles as needed
});

export default styles;
