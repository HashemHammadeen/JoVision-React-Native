import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

class MyClassPage_Task23 extends Component {
  render() {
    return (
      <View style={styles.childContainer}>
        <Text style={styles.label}>Class Input (Updates Parent):</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          // We call the function received from props
          onChangeText={(value) => this.props.onTextUpdate(value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  childContainer: {
    padding: 15,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#2196f3',
  },
  label: { marginBottom: 5, fontWeight: 'bold' },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default MyClassPage_Task23;