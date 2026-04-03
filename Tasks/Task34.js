import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useCurrentTime } from '../hooks/useCurrentTime';

// A sub-component to show the "Toggle" effect
const TimeDisplay = () => {
  const currentTime = useCurrentTime();

  return (
    <View style={styles.displayBox}>
      <Text style={styles.timeText}>
        {currentTime.toLocaleTimeString()}
      </Text>
      <Text style={styles.dateText}>
        {currentTime.toLocaleDateString()}
      </Text>
    </View>
  );
};

const Task34 = () => {
  const [showTime, setShowTime] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Custom Hook: Clock</Text>
      
      {showTime && <TimeDisplay />}

      <View style={styles.buttonContainer}>
        <Button 
          title={showTime ? "Stop Clock (Unmount)" : "Start Clock (Mount)"} 
          onPress={() => setShowTime(!showTime)} 
          color={showTime ? "#f44336" : "#2e7d32"}
        />
      </View>

      <Text style={styles.note}>
        Check your VS Code Console. When you "Stop" the clock, the 'Tick' logs should stop immediately.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 30 },
  displayBox: { padding: 30, backgroundColor: '#fff', borderRadius: 20, elevation: 5, alignItems: 'center' },
  timeText: { fontSize: 40, fontWeight: 'bold', color: '#2e7d32' },
  dateText: { fontSize: 18, color: '#666', marginTop: 10 },
  buttonContainer: { marginTop: 40, width: '80%' },
  note: { marginTop: 20, fontSize: 12, color: '#999', textAlign: 'center', paddingHorizontal: 40 }
});

export default Task34;