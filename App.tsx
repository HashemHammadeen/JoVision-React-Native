import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Task from './Tasks/Task24';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* This SafeAreaView is now the "modern" version */}
      <SafeAreaView style={styles.container}>
        <Task />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});