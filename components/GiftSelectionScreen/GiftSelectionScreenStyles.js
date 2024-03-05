import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  giftSelectionScreen: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    // Background image would be handled using ImageBackground component
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  mainContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  giftSelectionContainer: {
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  giftOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  giftOption: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  selected: {
    backgroundColor: 'orange',
  },
  giftText: {
    color: 'black',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    // Background image would be handled using ImageBackground component
  },
  homeButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  homeButtonText: {
    color: 'white',
  },
  // Add any other styles you need
});
export default styles;