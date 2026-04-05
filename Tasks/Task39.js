import React, { useState } from 'react';
// These come from react-native
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'; 
// These come from react-redux
import { Provider, useDispatch, useSelector } from 'react-redux'; 
import { store, updateText } from '../Store/textSlice';
// --- COMPONENT ONE ---
const ComponentOne = () => {
  // Pull data from the Redux "Vault"
  const reduxValue = useSelector((state) => state.appText.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.c1Box}>
      <Text style={styles.label}>Component One (Redux Linked):</Text>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={reduxValue}
        // Dispatch the change to the Redux Store
        onChangeText={(text) => dispatch(updateText(text))}
      />
    </View>
  );
};

// --- MAIN COMPONENT ---
const Task39Main = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Redux Persistence Task</Text>
      
      <Button 
        title={isVisible ? "Unmount Component" : "Mount Component"} 
        onPress={() => setIsVisible(!isVisible)} 
        color={isVisible ? "#f44336" : "#2e7d32"}
      />

      <View style={styles.divider} />

      {/* When isVisible is false, ComponentOne is DELETED from memory */}
      {isVisible && <ComponentOne />}

      {!isVisible && (
        <Text style={styles.status}>
          Component is currently unmounted. But the data is safe in Redux!
        </Text>
      )}
    </View>
  );
};

// Wrap with Provider to give Redux access
export default function Task39() {
  return (
    <Provider store={store}>
      <Task39Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, justifyContent: 'center', backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  divider: { height: 20 },
  c1Box: { padding: 20, backgroundColor: '#e8f5e9', borderRadius: 15, elevation: 4 },
  label: { fontSize: 12, color: '#2e7d32', marginBottom: 5 },
  input: { borderBottomWidth: 1, borderColor: '#2e7d32', fontSize: 18, padding: 5 },
  status: { textAlign: 'center', color: '#888', fontStyle: 'italic', marginTop: 20 }
});