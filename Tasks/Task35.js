import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  // 1. READ DATA ON STARTUP
  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@user_data');
        if (jsonValue != null) {
          const savedObject = JSON.parse(jsonValue);
          const savedTime = new Date(savedObject.timestamp).getTime();
          const currentTime = new Date().getTime();

          // Check if data is less than 60 seconds old
          if (currentTime - savedTime < 60000) {
            setName(savedObject.name);
            setAge(savedObject.age);
            setCountry(savedObject.country);
            console.log("Data restored from storage! ✅");
          } else {
            console.log("Data found but it's too old (>1 min). ⏳");
          }
        }
      } catch (e) {
        console.error("Error reading data:", e);
      }
    };

    loadData();
  }, []);

  // 2. SAVE DATA ON SUBMIT
  const handleSubmit = async () => {
    if (!name || !age || !country) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const userData = {
      name,
      age,
      country,
      timestamp: new Date().toISOString(), // Standard format for saving dates
    };

    try {
      const jsonValue = JSON.stringify(userData);
      await AsyncStorage.setItem('@user_data', jsonValue);
      Alert.alert("Success", "Data saved to device storage!");
    } catch (e) {
      Alert.alert("Error", "Failed to save data");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile Storage</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Name" 
        value={name} 
        onChangeText={setName} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Age" 
        keyboardType="numeric"
        value={age} 
        onChangeText={setAge} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Country" 
        value={country} 
        onChangeText={setCountry} 
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit & Save" onPress={handleSubmit} color="#2e7d32" />
      </View>

      <Text style={styles.hint}>
        Data stays for 1 minute. Try submitting, closing the app, and reopening quickly!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, justifyContent: 'center', backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 15,
    fontSize: 16 
  },
  buttonContainer: { marginTop: 10 },
  hint: { marginTop: 20, fontSize: 12, color: '#888', textAlign: 'center' }
});

export default Task35;