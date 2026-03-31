import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage_Task25 extends Component {
  // 1. Internal state to hold the text
  state = {
    displayText: "Waiting for Parent..."
  };

  // 2. A Public Method: The Parent will call this directly!
  updateMyText = (newText) => {
    this.setState({ displayText: newText });
  }

  render() {
    return (
      <View style={styles.childBox}>
        <Text style={styles.label}>Class Child (Controlled by Ref):</Text>
        <Text style={styles.content}>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  childBox: { padding: 20, backgroundColor: '#f3e5f5', borderRadius: 10, marginTop: 20 },
  label: { fontSize: 12, color: '#7b1fa2' },
  content: { fontSize: 18, fontWeight: 'bold' }
});

export default MyClassPage_Task25;