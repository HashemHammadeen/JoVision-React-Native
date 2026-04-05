import React, { Component, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { TextContext, TextProvider } from '../Context/TextContext';

// --- COMPONENT ONE: CLASS COMPONENT ---
class ComponentOne extends Component {
  // Tell the class to listen to our specific context
  static contextType = TextContext;

  render() {
    // Access data via this.context
    const { sharedText } = this.context;
    return (
      <View style={styles.c1Box}>
        <Text style={styles.c1Text}>Class Display: {sharedText}</Text>
      </View>
    );
  }
}

// --- COMPONENT TWO: FUNCTIONAL COMPONENT ---
const ComponentTwo = ({ id }) => {
  const { sharedText, setSharedText } = useContext(TextContext);

  return (
    <View style={styles.c2Box}>
      <Text style={styles.c2Title}>Component Two (Instance {id})</Text>
      <TextInput
        style={styles.input}
        placeholder="Type to update ALL..."
        value={sharedText}
        onChangeText={setSharedText}
      />
      {/* Renders a version of Component One inside */}
      <ComponentOne />
    </View>
  );
};

// --- MAIN COMPONENT ---
const Task38 = () => {
  return (
    <TextProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Global Context Sharing</Text>
        
        {/* Create 4 versions of Component Two */}
        <ComponentTwo id="1" />
        <ComponentTwo id="2" />
        <ComponentTwo id="3" />
        <ComponentTwo id="4" />

        <Text style={styles.footer}>
          Notice: Changing ANY input updates ALL displays instantly.
        </Text>
      </ScrollView>
    </TextProvider>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f0f4f8' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 20, color: '#2c3e50' },
  c2Box: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 20,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db'
  },
  c2Title: { fontSize: 14, fontWeight: '600', color: '#7f8c8d', marginBottom: 10 },
  input: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    padding: 10, 
    borderRadius: 8, 
    marginBottom: 10,
    backgroundColor: '#fafafa'
  },
  c1Box: { padding: 10, backgroundColor: '#e8f4fd', borderRadius: 5 },
  c1Text: { fontWeight: 'bold', color: '#2980b9' },
  footer: { textAlign: 'center', marginTop: 20, color: '#95a5a6', fontStyle: 'italic' }
});

export default Task38;