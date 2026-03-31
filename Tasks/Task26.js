import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState("Press a button to get IP");
  const [loading, setLoading] = useState(false);

  // --- METHOD 1: NON-BLOCKING (Standard) ---
  const getIpNonBlocking = async () => {
    setLoading(true);
    setIp("Fetching (Non-Blocking)...");
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      setIp("Error fetching IP");
    } finally {
      setLoading(false);
    }
  };

  // --- METHOD 2: BLOCKING (Simulation) ---
  const getIpBlocking = () => {
    setIp("Fetching (Blocking UI)...");
    
    // In JS, we simulate blocking by staying in a 'Sync' execution context
    // We use a Promise but don't 'await' it properly to let the UI breathe, 
    // OR we use a 'Busy-Wait' loop to freeze the thread.
    
    const start = Date.now();
    // This "While" loop freezes the JS thread for 3 seconds
    while (Date.now() - start < 3000) {
      // The UI is now frozen. You can't click anything!
    }

    // Now that the 'freeze' is over, we fetch the data
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIp(data.ip + " (After Freeze)"))
      .catch(() => setIp("Error"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your IP Address:</Text>
      <Text style={styles.ipText}>{ip}</Text>

      {loading && <ActivityIndicator size="small" color="#0000ff" />}

      <View style={styles.buttonGap}>
        <Button title="Get IP (Non-Blocking)" onPress={getIpNonBlocking} color="#4CAF50" />
      </View>
      
      <View style={styles.buttonGap}>
        <Button title="Get IP (Blocking - 3s Freeze)" onPress={getIpBlocking} color="#F44336" />
      </View>
      
      <Text style={styles.note}>Note: Try to click the other button while 'Blocking' is running. You'll see it's frozen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 16, color: '#888' },
  ipText: { fontSize: 22, fontWeight: 'bold', marginVertical: 20 },
  buttonGap: { marginVertical: 10, width: '80%' },
  note: { marginTop: 30, fontSize: 12, color: '#999', textAlign: 'center' }
});

export default Task26;