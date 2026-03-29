import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StyleSheet } from 'react-native';
import Task16 from './Tasks/Task16';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Task16 />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});