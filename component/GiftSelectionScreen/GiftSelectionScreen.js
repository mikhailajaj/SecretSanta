import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import  styles from './GiftSelectionScreenStyles.js';
import { useNavigation } from '@react-navigation/native';

const GiftSelectionScreen = () => {
    const navigation = useNavigation();
  const [selectedGift, setSelectedGift] = useState('');

  const gifts = [
    'Personalized Mug', 'Fitness Band',
    'Eco-Friendly Water Bottle', 'Cookbook',
    'Art Supplies Kit', 'Travel Journal',
    'Keychain Tool', 'Blanket',
    'Speaker', 'Customized Keychain'
  ];

  const handleSelectGift = (gift) => {
    setSelectedGift(gift);
    // Handle the selection, e.g., save to state, post to server, etc.
  };

  return (
    <View style={styles.giftSelectionScreen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Kesitter</Text>
      </View>
      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.giftSelectionContainer}>
          <Text style={styles.title}>Gift Selection</Text>
          <Text style={styles.description}>pick something that resonates or simply brings a smile.</Text>
          <View style={styles.giftOptions}>
            {gifts.map((gift) => (
              <TouchableOpacity
                key={gift}
                style={[styles.giftOption, selectedGift === gift && styles.selected]}
                onPress={() => handleSelectGift(gift)}
              >
                <Text style={styles.giftText}>{gift}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.homeButton} 
        onPress={() => navigation.navigate('Dashboard')} // Use the name you used in your stack navigator
        color="#f08a5d">
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default GiftSelectionScreen;