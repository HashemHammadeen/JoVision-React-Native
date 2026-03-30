import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class MyClassComponent_Task20 extends Component {
  
  // 1. BIRTH: Runs when the component shows up
  componentDidMount() {
    console.log("MyClassPage: I have LOADED");
  }

  // 2. DEATH: Runs right before the component is removed
  componentWillUnmount() {
    console.log("MyClassPage: I have UNLOADED");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>The Class Component is now Visible! Check the console!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginTop: 20, padding: 20, backgroundColor: '#e8f5e9' },
  text: { fontSize: 18, color: '#2e7d32', fontWeight: 'bold' },
});

export default MyClassComponent_Task20;