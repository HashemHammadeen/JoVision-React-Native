import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import MyClassPage_Task25 from '../Components/MyClassPage_Task25';

const Task25 = () => {
  // 1. Create the Pointer
  const classComponentRef = useRef();

  const handleTyping = (text) => {
    // 2. Reach into the Class Instance and call its method
    if (classComponentRef.current) {
      classComponentRef.current.updateMyText(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parent Input (Ref to Class):</Text>
      <TextInput
        style={styles.input}
        placeholder="Type to reach into Class..."
        onChangeText={handleTyping}
      />

      {/* 3. Attach the pointer to the Class Component */}
      <MyClassPage_Task25 ref={classComponentRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { marginBottom: 10, fontWeight: 'bold' },
  input: { width: '100%', height: 45, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 }
});

export default Task25;