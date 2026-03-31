import React from 'react';
import { View, Text, FlatList, Image, Pressable, Alert, StyleSheet } from 'react-native';

const Task28 = () => {
  // 1. Create the data array (10 items minimum)
  const imageData = [
    { id: '0', src: require('../Resources/img1.jpg') },
    { id: '1', src: require('../Resources/img2.jpg') },
    { id: '2', src: require('../Resources/img3.jpg') },
    { id: '3', src: require('../Resources/img4.jpg') }, // Repeating for example
    { id: '4', src: require('../Resources/img5.jpg') },
    { id: '5', src: require('../Resources/img6.jpg') },
    { id: '6', src: require('../Resources/img7.jpg') },
    { id: '7', src: require('../Resources/img8.jpg') },
    { id: '8', src: require('../Resources/img9.jpg') },
    { id: '9', src: require('../Resources/img10.jpg') },
  ];

  // 2. The function that runs when an image is pressed
  const handlePress = (index) => {
    Alert.alert("Selection", `You have selected image: ${index}`);
  };

  // 3. The "Blueprint" for a single item in the list
  const renderItem = ({ item, index }) => (
    <Pressable 
      onPress={() => handlePress(index)}
      style={({ pressed }) => [
        { opacity: pressed ? 0.6 : 1 }, // Visual feedback when touched
        styles.imageContainer
      ]}
    >
      <Image source={item.src} style={styles.image} />
      <Text style={styles.indexLabel}>Index: {index}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Horizontal Image Gallery</Text>
      
      <FlatList
        data={imageData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true} // This makes the list scroll left-to-right
        showsHorizontalScrollIndicator={false} // Cleaner look
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#fff', paddingVertical: 50 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  listPadding: { paddingHorizontal: 10 },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 15,
    backgroundColor: '#eee'
  },
  indexLabel: { marginTop: 10, color: '#666', fontWeight: 'bold' }
});

export default Task28;