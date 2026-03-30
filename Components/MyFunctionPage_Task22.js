import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

// We extract 'onTextChange' from the props envelope
const MyFunctionPage_Task22 = ({ onTextChange }) => {
  return (
    <View style={styles.childContainer}>
      <Text style={styles.label}>Type here to update Parent:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text..."
        // This is the magic: Every change calls the Parent's function
        onChangeText={(value) => onTextChange(value)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '90%',
  },
  label: {
    marginBottom: 5,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default MyFunctionPage_Task22;