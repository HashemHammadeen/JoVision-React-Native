import React, { useState, useRef } from 'react';
import { 
  View, Text, FlatList, Image, Pressable, 
  Alert, StyleSheet, Modal, TextInput, Button 
} from 'react-native';

const Task29 = () => {
  // 1. Data Array (10 items)
  const imageData = Array.from({ length: 10 }, (_, i) => ({
    id: i.toString(),
    // Replace these with your actual local images from Resources
    src: require('../Resources/img1.jpg'), 
  }));

  // 2. Refs and States
  const listRef = useRef(null); // The "Pointer" for the FlatList
  const [modalVisible, setModalVisible] = useState(false);
  const [targetIndex, setTargetIndex] = useState('');

  const handleImagePress = (index) => {
    Alert.alert("Selection", `You have selected image: ${index}`);
  };

  const scrollToTarget = () => {
    const idx = parseInt(targetIndex);
    
    // Validation: Ensure index is between 0 and 9
    if (isNaN(idx) || idx < 0 || idx >= imageData.length) {
      Alert.alert("Error", "Please enter a valid index (0-9)");
      return;
    }

    // 3. The magic scroll command
    listRef.current.scrollToIndex({ 
      index: idx, 
      animated: true, 
      viewPosition: 0.5 // Centers the image in the screen
    });

    setModalVisible(false); // Close the modal
    setTargetIndex(''); // Clear input
  };

  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => handleImagePress(index)} style={styles.imageContainer}>
      <Image source={item.src} style={styles.image} />
      <Text style={styles.indexLabel}>Index: {index}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scrollable Gallery</Text>
      
      {/* 4. The FlatList with the 'ref' attached */}
      <FlatList
        ref={listRef}
        data={imageData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        // Optimization for scrollToIndex
        getItemLayout={(data, index) => (
          { length: 220, offset: 220 * index, index }
        )}
      />

      <View style={styles.buttonContainer}>
        <Button title="Go to Specific Index" onPress={() => setModalVisible(true)} />
      </View>

      {/* 5. The Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Image Index (0-9):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={targetIndex}
              onChangeText={setTargetIndex}
              placeholder="e.g. 5"
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
              <Button title="Submit" onPress={scrollToTarget} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 50, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  imageContainer: { alignItems: 'center', marginHorizontal: 10, width: 200 },
  image: { width: 200, height: 300, borderRadius: 15 },
  indexLabel: { marginTop: 10, fontWeight: 'bold' },
  buttonContainer: { padding: 20 },
  // Modal Styles
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: 300, padding: 20, backgroundColor: 'white', borderRadius: 15, elevation: 5 },
  modalTitle: { fontSize: 16, marginBottom: 15, fontWeight: 'bold' },
  input: { borderBottomWidth: 1, borderColor: '#ccc', marginBottom: 20, padding: 5, fontSize: 18 },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between' }
});

export default Task29;