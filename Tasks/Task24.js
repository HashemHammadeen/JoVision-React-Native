import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import MyFunctionPage_Task24 from '../Components/MyFunctionPage_Task24';

const Task24 = () => {
  // 1. Create the "Laser Pointer" (Ref)
  const childRef = useRef();

  const handleTextChange = (text) => {
    // 2. Reach into the child and call its 'updateText' function directly
    if (childRef.current) {
      childRef.current.updateText(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parent Input (Using Refs):</Text>
      <TextInput
        style={styles.input}
        placeholder="Type to push to child..."
        onChangeText={handleTextChange}
      />

      {/* 3. Attach the Ref to the Child */}
      <MyFunctionPage_Task24 ref={childRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { marginBottom: 10, fontWeight: 'bold' },
  input: { width: '100%', height: 45, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 }
});

export default Task24;