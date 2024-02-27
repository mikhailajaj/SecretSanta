import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    fontFamily: 'Arial', // This will only work on iOS. Android requires a different approach.
  },
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // For background image, use the ImageBackground component in render
    color: 'white',
  },
  headerText: {
    color: 'white',
    fontSize: 20, // You might need to adjust this to match your design
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    width: '90%', // Width is often set as a percentage of the screen width in React Native
  },
  title: {
    color: '#ff4500',
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginVertical: 10,
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5, // React Native uses borderRadius for border curvature
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Add styles for other components as needed
});

export default styles;