import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --- THE SCREENS ---
// We can define these simply as small functional components
const ScreenOne = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>1</Text>
  </View>
);

const ScreenTwo = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>2</Text>
  </View>
);

const ScreenThree = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>3</Text>
  </View>
);

const ScreenFour = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>4</Text>
  </View>
);

// --- THE NAVIGATOR ---
const Tab = createBottomTabNavigator();

const Task41 = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#2e7d32', // Your JUST green!
          tabBarInactiveTintColor: 'gray',
          headerTitleAlign: 'center',
        }}
      >
        <Tab.Screen name="Home" component={ScreenOne} />
        <Tab.Screen name="Explore" component={ScreenTwo} />
        <Tab.Screen name="History" component={ScreenThree} />
        <Tab.Screen name="Profile" component={ScreenFour} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
});

export default Task41;