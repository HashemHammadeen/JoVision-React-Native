import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyFunctionPage_Task22 from '../Components/MyFunctionPage_Task22';

const Task22 = () => {
  // 1. The state lives in the Parent
  const [sharedText, setSharedText] = useState("Waiting for input...");

  return (
    <View style={styles.container}>
      {/* 2. Text component showing the state */}
      <Text style={styles.parentTextTitle}>Parent Component Display:</Text>
      <Text style={styles.displayText}>{sharedText}</Text>

      <View style={styles.divider} />

      {/* 3. Passing the 'setSharedText' function as a prop called 'onTextChange' */}
      <MyFunctionPage_Task22 onTextChange={setSharedText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  parentTextTitle: {
    fontSize: 14,
    color: '#888',
  },
  displayText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2e7d32',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
});

export default Task22;