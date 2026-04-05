import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// Note: We import 'connect' instead of hooks
import { connect, Provider } from 'react-redux'; 
import { store, updateText } from '../Store/textSlice';

// --- COMPONENT ONE: CLASS VERSION ---
class ComponentOneClass extends Component {
  render() {
    // Data and Actions now arrive via PROPS
    const { reduxValue, triggerUpdate } = this.props;

    return (
      <View style={styles.c1Box}>
        <Text style={styles.label}>Class Component (Redux Connected):</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={reduxValue}
          onChangeText={(text) => triggerUpdate(text)}
        />
      </View>
    );
  }
}

// 1. Map State to Props: (Reading from the Vault)
const mapStateToProps = (state) => ({
  reduxValue: state.appText.value,
});

// 2. Map Dispatch to Props: (Sending to the Vault)
const mapDispatchToProps = (dispatch) => ({
  triggerUpdate: (text) => dispatch(updateText(text)),
});

// 3. Connect the Component
const ConnectedComponentOne = connect(mapStateToProps, mapDispatchToProps)(ComponentOneClass);


// --- MAIN COMPONENT ---
class Task40Main extends Component {
  state = { isVisible: true };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Redux Class Component Task</Text>
        
        <Button 
          title={this.state.isVisible ? "Unmount Class" : "Mount Class"} 
          onPress={() => this.setState({ isVisible: !this.state.isVisible })} 
          color={this.state.isVisible ? "#f44336" : "#2e7d32"}
        />

        <View style={styles.divider} />

        {this.state.isVisible && <ConnectedComponentOne />}
      </View>
    );
  }
}

// Wrap with Provider
export default function Task40() {
  return (
    <Provider store={store}>
      <Task40Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, justifyContent: 'center', backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  divider: { height: 20 },
  c1Box: { padding: 20, backgroundColor: '#e3f2fd', borderRadius: 15, elevation: 4 },
  label: { fontSize: 12, color: '#1565c0', marginBottom: 5 },
  input: { borderBottomWidth: 1, borderColor: '#1565c0', fontSize: 18, padding: 5 },
});