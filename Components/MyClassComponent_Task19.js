import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

// In Java terms: class MyClassComponent extends React.Component
class MyClassComponent_Task19 extends Component {
  render() {
    // Class components MUST have a render() method
    return (
      <View style={styles.container}>
        <Text style={styles.classText}>This is a Class Component</Text>
        <Text style={styles.nameText}>Hashem Hammadeen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginTop: 20, alignItems: 'center' },
  classText: { fontSize: 16, color: '#666' },
  nameText: { fontSize: 24, fontWeight: 'bold', color: '#007AFF' },
});

export default MyClassComponent_Task19;