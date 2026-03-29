import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MyFunctionalComponent_Task18 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Hashem Hammadeen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  nameText: { fontSize: 24, fontWeight: 'bold', color: '#2e7d32' },
});

export default MyFunctionalComponent_Task18;