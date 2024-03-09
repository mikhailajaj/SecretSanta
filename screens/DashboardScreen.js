import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,StyleSheet,ImageBackground } from 'react-native';
import settingsIcon from '../assets/img/settings-icon.png'; // Adjust the path as necessary
import checkIcon from '../assets/img/check-icon.png'; // Adjust the path as necessary
import homeIcon from '../assets/img/home-icon.png'; // Adjust the path as necessary
import giftIcon from '../assets/img/gift-icon.png'; // Adjust the path as necessary

// Require your local image
const backgroundImage = require('../assets/img/background_dash.png');

const DashboardScreen = () => {
    
  const events = [
    {
      id: 1,
      type: 'created',
      name: 'Santa TomTomorrow',
      date: 'Dec 24 2024 6:00 PM',
      location: 'SomeStreetWithLink',
      password: 'oneDay',
      eventCode: 'WSE2024',
      inviteCount: '24/26'
    },
    // Add more events as needed
  ];

  return (
    <View style={styles.dashboardScreen}>
       <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
      <View style={styles.header}>
        <Image source={settingsIcon} style={styles.icon} />
        <Text style={styles.headerTitle}>SECRET SANTA</Text>
        <TouchableOpacity style={styles.addEventBtn}>
          <Text style={styles.addEventBtnText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.mainContent}>
        {events.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <Text style={styles.eventTitle}>{event.type === 'created' ? 'You Have Created An Event' : 'You Have Been Invited To'}</Text>
            <Text>Event name: {event.name}</Text>
            <Text>Password: {event.password}</Text>
            <Text>EventCode: {event.eventCode}</Text>
            <Text>@{event.date}</Text>
            <Text>Location: {event.location}</Text>
            {event.type === 'created' && (
              <View style={styles.inviteCount}>
                <Image source={checkIcon} style={styles.checkIcon} />
                <Text>View Invite {event.inviteCount}</Text>
              </View>
            )}
            <TouchableOpacity style={styles.detailsBtn}>
              <Text style={styles.detailsBtnText}>View Invite Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Image source={homeIcon} style={styles.icon} />
        <Image source={giftIcon} style={styles.icon} />
      </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  dashboardScreen: {
    flex: 1,
  },
  backgroundImage: {
    width:  '100%',
    height: '100%',
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
export default DashboardScreen;