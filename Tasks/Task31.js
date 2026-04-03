import React, { useState, useRef } from 'react';
import { 
  View, Text, FlatList, Image, Pressable, 
  Alert, StyleSheet, Modal, TextInput, Button 
} from 'react-native';

const Task31 = () => {
  const [images, setImages] = useState([
    { id: '0', src: require('../Resources/img1.jpg') },
    { id: '1', src: require('../Resources/img2.jpg') },
    { id: '2', src: require('../Resources/img3.jpg') },
    // ... add more if needed
  ]);

  const listRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [targetIndex, setTargetIndex] = useState('');

  // --- TASK 30: DELETE LOGIC ---
  const removeItem = (id) => {
    setImages(prev => prev.filter(item => item.id !== id));
  };

  // --- TASK 31: DUPLICATE LOGIC ---
  const duplicateItem = (index) => {
    const itemToCopy = images[index];
    
    // Create a new object with a UNIQUE ID
    const newItem = {
      ...itemToCopy,
      id: Date.now().toString() + Math.random().toString(), // Guaranteed unique
    };

    // Create new array: [items_before, newItem, items_after]
    const updatedImages = [
      ...images.slice(0, index + 1),
      newItem,
      ...images.slice(index + 1)
    ];

    setImages(updatedImages);
  };

  const scrollToTarget = () => {
    const idx = parseInt(targetIndex);
    if (isNaN(idx) || idx < 0 || idx >= images.length) {
      Alert.alert("Error", "Invalid Index");
      return;
    }
    listRef.current.scrollToIndex({ index: idx, animated: true, viewPosition: 0.5 });
    setModalVisible(false);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.imageWrapper}>
      <Pressable onPress={() => Alert.alert("Selected", `Index: ${index}`)} style={styles.imageContainer}>
        <Image source={item.src} style={styles.image} />
        <Text style={styles.indexLabel}>Index: {index}</Text>
      </Pressable>

      {/* TASK 31: ADD ICON (Left Corner) */}
      <Pressable style={styles.addBadge} onPress={() => duplicateItem(index)}>
        <Text style={styles.badgeText}>+</Text>
      </Pressable>

      {/* TASK 30: DELETE ICON (Right Corner) */}
      <Pressable style={styles.deleteBadge} onPress={() => removeItem(item.id)}>
        <Text style={styles.badgeText}>X</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Image Editor Gallery</Text>
      
      <View style={styles.listArea}>
        <FlatList
          ref={listRef}
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          getItemLayout={(data, index) => ({ length: 220, offset: 220 * index, index })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Jump to Index" onPress={() => setModalVisible(true)} color="#2e7d32" />
      </View>

      <Modal transparent visible={modalVisible} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              onChangeText={setTargetIndex} 
              placeholder="Index #" 
            />
            <Button title="Go" onPress={scrollToTarget} />
            <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, backgroundColor: '#f0f0f0' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  listArea: { height: 380 },
  imageWrapper: { position: 'relative', marginHorizontal: 10 },
  imageContainer: { alignItems: 'center', width: 200 },
  image: { width: 200, height: 300, borderRadius: 15 },
  indexLabel: { marginTop: 8, fontWeight: 'bold' },
  // BADGE STYLES
  addBadge: {
    position: 'absolute', top: 10, left: 10,
    backgroundColor: '#2e7d32', width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', elevation: 5
  },
  deleteBadge: {
    position: 'absolute', top: 10, right: 10,
    backgroundColor: '#c62828', width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', elevation: 5
  },
  badgeText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  buttonContainer: { padding: 30 },
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: 250, padding: 20, backgroundColor: 'white', borderRadius: 15 }
});

export default Task31;