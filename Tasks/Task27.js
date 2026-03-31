import React, { useState } from 'react';
// Make sure 'Alert' is in this import list!
import { View, Text, Button, Image, Alert, StyleSheet } from 'react-native';

const Task27 = () => {
  // 1. Array of local image modules
  const images = [
    require('../Resources/img1.jpg'),
    require('../Resources/img2.jpg'),
    require('../Resources/img3.jpg'),
  ];

  // 2. State to hold the current index (starts at Image 1)
  const [index, setIndex] = useState(0);

  const showSelectionDialog = () => {
    // 3. This is the Universal Alert Dialog
    Alert.alert(
      "Select Image", // Title
      "Pick a number to change the photo:", // Message
      [
        { text: "1", onPress: () => setIndex(0) },
        { text: "2", onPress: () => setIndex(1) },
        { text: "3", onPress: () => setIndex(2) },
        { text: "Cancel", style: "cancel" }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currently Showing: #{index + 1} Make sure to test it on the phone it wont work on the web version</Text>
      
      <View style={styles.imageCard}>
        <Image 
          source={images[index]} 
          style={styles.mainImage} 
          resizeMode="contain" 
        />
      </View>

      <Button title="Choose Image" onPress={showSelectionDialog} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 18, marginBottom: 20, color: '#333' },
  imageCard: {
    width: 300,
    height: 300,
    backgroundColor: '#eee',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5, // Shadow for Android
  },
  mainImage: { width: '100%', height: '100%' },
});

export default Task27;