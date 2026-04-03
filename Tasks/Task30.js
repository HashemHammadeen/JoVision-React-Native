import React, { useState, useRef } from 'react';
import { 
  View, Text, FlatList, Image, Pressable, 
  Alert, StyleSheet, Modal, TextInput, Button 
} from 'react-native';

const Task30 = () => {
  // 1. Move imageData into STATE so we can modify it (Delete)
  const [images, setImages] = useState([
    { id: '0', src: require('../Resources/img1.jpg') },
    { id: '1', src: require('../Resources/img2.jpg') },
    { id: '2', src: require('../Resources/img3.jpg') },
    { id: '3', src: require('../Resources/img4.jpg') },
    { id: '4', src: require('../Resources/img5.jpg') },
    { id: '5', src: require('../Resources/img6.jpg') },
    { id: '6', src: require('../Resources/img7.jpg') },
    { id: '7', src: require('../Resources/img8.jpg') },
    { id: '8', src: require('../Resources/img9.jpg') },
    { id: '9', src: require('../Resources/img10.jpg') },
  ]);

  const listRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [targetIndex, setTargetIndex] = useState('');

  // 2. DELETE FUNCTION
  const removeItem = (id) => {
    Alert.alert(
      "Remove Image",
      "Are you sure you want to delete this image?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Remove", 
          style: "destructive", 
          onPress: () => {
            // Filter out the item with the matching ID
            const filteredData = images.filter(item => item.id !== id);
            setImages(filteredData);
          } 
        }
      ]
    );
  };

  const handleImagePress = (index) => {
    Alert.alert("Selection", `You have selected image at index: ${index}`);
  };

  const scrollToTarget = () => {
    const idx = parseInt(targetIndex);
    if (isNaN(idx) || idx < 0 || idx >= images.length) {
      Alert.alert("Error", `Please enter a valid index (0-${images.length - 1})`);
      return;
    }
    listRef.current.scrollToIndex({ index: idx, animated: true, viewPosition: 0.5 });
    setModalVisible(false);
    setTargetIndex('');
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.imageWrapper}>
      <Pressable onPress={() => handleImagePress(index)} style={styles.imageContainer}>
        <Image source={item.src} style={styles.image} />
        <Text style={styles.indexLabel}>Index: {index}</Text>
      </Pressable>

      {/* 3. THE DELETE ICON (Pressable) */}
      <Pressable style={styles.deleteBadge} onPress={() => removeItem(item.id)}>
        <Text style={styles.deleteText}>X</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Advanced Gallery [Works Fine on the Phone]</Text>
      
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
        <Button title="Go to Specific Index" onPress={() => setModalVisible(true)} color="#2e7d32" />
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Jump to Index:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={targetIndex}
              onChangeText={setTargetIndex}
            />
            <View style={styles.modalButtons}>
              <Button title="Close" color="gray" onPress={() => setModalVisible(false)} />
              <Button title="Scroll" onPress={scrollToTarget} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, backgroundColor: '#f9f9f9' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  listArea: { height: 380 },
  imageWrapper: { position: 'relative', marginHorizontal: 10 }, // Anchor for the absolute "X"
  imageContainer: { alignItems: 'center', width: 200 },
  image: { width: 200, height: 300, borderRadius: 15, borderWidth: 1, borderColor: '#ddd' },
  indexLabel: { marginTop: 8, color: '#444' },
  // DELETE ICON STYLES
  deleteBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
  },
  deleteText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  buttonContainer: { padding: 30 },
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' },
  modalContent: { width: 280, padding: 25, backgroundColor: 'white', borderRadius: 20 },
  modalTitle: { fontSize: 18, marginBottom: 15, fontWeight: 'bold' },
  input: { borderBottomWidth: 2, borderColor: '#2e7d32', marginBottom: 25, fontSize: 20, textAlign: 'center' },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between' }
});

export default Task30;