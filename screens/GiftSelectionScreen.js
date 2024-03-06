import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
// Require your local image
const backgroundImage = require('../assets/img/background_sign.png');
const GiftSelectionScreen = () => {
  const [selectedGifts, setSelectedGifts] = useState([]);

  const navigation = useNavigation();
  const gifts = [
    'Personalized Mug', 'Fitness Band',
    'Eco-Friendly Water Bottle', 'Cookbook',
    'Art Supplies Kit', 'Travel Journal',
    'Keychain Tool', 'Blanket',
    'Speaker', 'Customized Keychain'
  ];

  const handleSelectGift = (gift) => {
    if (selectedGifts.includes(gift)) {
      // If the gift is already selected, remove it from the array
      setSelectedGifts(selectedGifts.filter(selectedGift => selectedGift !== gift));
    } else {
      // Otherwise, add the gift to the array
      setSelectedGifts([...selectedGifts, gift]);
    }
  };
  return (
    <View style={styles.giftSelectionScreen}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.mainContent}>
          <View style={styles.giftSelectionContainer}>
            <Text style={styles.title}>Gift Selection</Text>
            <Text style={styles.description}>pick something that resonates or simply brings a smile.</Text>
            <View style={styles.giftOptions}>
              {gifts.map((gift) => (
                <TouchableOpacity
                  key={gift}
                  style={[
                    styles.giftOption,
                    selectedGifts.includes(gift) && styles.selected
                  ]}
                  onPress={() => handleSelectGift(gift)}
                >
                  <Text style={styles.giftText}>{gift}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
        <CustomButton title="Home" onPress={() => navigation.navigate('Dashboard')} width={'100%'} />
        </View>
      </ImageBackground>
    </View>
  );
};

// Reuse styles from GuestLoginScreen and adjust them for GiftSelectionScreen
const styles = StyleSheet.create({
  giftSelectionScreen: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  mainContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  giftSelectionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    width: '80%',
  },
  title: {
    color: '#ff4500',
    marginBottom: 15,
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
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
    width: '45%', // Assuming you want two gifts per row
    alignItems: 'center',
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
    justifyContent: 'center',
  },
  
});

export default GiftSelectionScreen;