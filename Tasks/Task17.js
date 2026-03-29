import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyFunctionalComponent_Task17 from '../Components/MyFunctionalComponent_Task17';

const Task17 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button 
        title={isVisible ? "Hide" : "Show"} 
        onPress={() => setIsVisible(!isVisible)} 
      />
      {isVisible && <MyFunctionalComponent_Task17 />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Task17;