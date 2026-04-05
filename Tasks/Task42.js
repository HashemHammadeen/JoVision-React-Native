import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --- A REUSABLE COMPONENT FOR ALL SCREENS ---
const BaseScreen = ({ navigation, route }) => {
  const screenNumber = route.name.replace('Screen', '');
  const allScreens = ['Screen1', 'Screen2', 'Screen3', 'Screen4'];
  
  // Filter out the current screen so we only show buttons for OTHER screens
  const otherScreens = allScreens.filter(s => s !== route.name);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>You are on Page {screenNumber}</Text>
      
      <View style={styles.buttonContainer}>
        {otherScreens.map((target) => (
          <TouchableOpacity 
            key={target}
            style={styles.button}
            onPress={() => navigation.navigate(target)}
          >
            <Text style={styles.buttonText}>Go to {target.replace('Screen', ' Page ')}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const Task42 = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarActiveTintColor: '#2e7d32',
        }}
      >
        {/* We use the same component but give them different 'name' props */}
        <Tab.Screen name="Screen1" component={BaseScreen} options={{ title: 'Page 1' }} />
        <Tab.Screen name="Screen2" component={BaseScreen} options={{ title: 'Page 2' }} />
        <Tab.Screen name="Screen3" component={BaseScreen} options={{ title: 'Page 3' }} />
        <Tab.Screen name="Screen4" component={BaseScreen} options={{ title: 'Page 4' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: '#333' },
  buttonContainer: { width: '80%' },
  button: {
    backgroundColor: '#2e7d32',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: { color: '#white', fontWeight: 'bold', fontSize: 16 },
});

export default Task42;