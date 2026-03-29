import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyFunctionalComponent_Task16 = ({ isVisible }) => {
  return (
    <View style={styles.container}>
      {/* Conditional Rendering: Only show the name if isVisible is true */}
      {isVisible && <Text style={styles.nameText}>Hashem Hammadeen</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32', // A nice JUST green!
  },
});

export default MyFunctionalComponent_Task16;