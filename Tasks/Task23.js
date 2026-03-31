import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyClassPage_Task23 from '../Components/MyClassPage_Task23';

const Task23 = () => {
  const [inputText, setInputText] = useState("No Input Yet");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task 23: Class Component Props</Text>
      <Text style={styles.display}>Value: {inputText}</Text>

      {/* We pass the 'setInputText' function into the 'onTextUpdate' prop */}
      <MyClassPage_Task23 onTextUpdate={setInputText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 14, color: '#888' },
  display: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: '#1565c0' },
});

export default Task23;