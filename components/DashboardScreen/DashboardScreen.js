import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import settingsIcon from '../../assets/img/settings-icon.png'; // Adjust the path as necessary
import checkIcon from '../../assets/img/check-icon.png'; // Adjust the path as necessary
import homeIcon from '../../assets/img/home-icon.png'; // Adjust the path as necessary
import giftIcon from '../../assets/img/gift-icon.png'; // Adjust the path as necessary
import styles from './DashboardScreenStyles.js';

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
    </View>
  );
};
export default DashboardScreen;