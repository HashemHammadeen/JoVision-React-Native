import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 1. We wrap the component in forwardRef
const MyFunctionPage_Task24 = forwardRef((props, ref) => {
  const [internalText, setInternalText] = useState("Waiting for Parent...");

  // 2. We define what the Parent is allowed to do through the Ref
  useImperativeHandle(ref, () => ({
    // This is the function the Parent will call
    updateText: (newText) => {
      setInternalText(newText);
    },
  }));

  return (
    <View style={styles.childBox}>
      <Text style={styles.label}>Child Component Text:</Text>
      <Text style={styles.content}>{internalText}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  childBox: { padding: 20, backgroundColor: '#fff3e0', borderRadius: 10, marginTop: 20 },
  label: { fontSize: 12, color: '#e65100' },
  content: { fontSize: 18, fontWeight: 'bold' }
});

export default MyFunctionPage_Task24;