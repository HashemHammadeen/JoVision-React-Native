import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import MyFunctionalComponent_Task18 from '../Components/MyFunctionalComponent_Task18';

const Task18 = () => {
  // 1. State: Are we loading? (Starts as true)
  const [isLoading, setIsLoading] = useState(true);

  // 2. Lifecycle: Run this code once when the app launches
  useEffect(() => {
    // Set a timer for 5000 milliseconds (5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // Switch the state to stop loading
    }, 5000);

    // Cleanup function (Good CS practice to prevent memory leaks)
    return () => clearTimeout(timer);
  }, []); // The empty [] means "only run once on mount"

  return (
    <View style={styles.container}>
      {isLoading ? (
        // Show this while isLoading is true
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#2e7d32" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        // Show this after 5 seconds when isLoading becomes false
        <MyFunctionalComponent_Task18 />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loaderContainer: { alignItems: 'center' },
  loadingText: { marginTop: 10, fontSize: 18, color: '#666' },
});

export default Task18;