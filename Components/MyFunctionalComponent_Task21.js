import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MyFunctionPage = () => {

  useEffect(() => {
    // 1. Everything here is "componentDidMount"
    console.log("MyFunctionPage: I have LOADED!");

    // 2. The RETURN function is "componentWillUnmount"
    return () => {
      console.log("MyFunctionPage: I have UNLOADED!");
    };
  }, []); // The empty [] is CRITICAL. It means "Only do this once."

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Functional Component is Visible!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 20, padding: 20, backgroundColor: '#e3f2fd' },
  text: { fontSize: 18, color: '#1565c0', fontWeight: 'bold' },
});

export default MyFunctionPage;