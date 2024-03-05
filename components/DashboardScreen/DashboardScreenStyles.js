import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dashboardScreen: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  addEventBtn: {
    backgroundColor: 'blue', // Customize as needed
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addEventBtnText: {
    color: 'white',
    fontSize: 24,
  },
  mainContent: {
    padding: 10,
  },
  eventCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inviteCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  detailsBtn: {
    backgroundColor: 'orange',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  detailsBtnText: {
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  // Add any other styles you need
});
export default styles;