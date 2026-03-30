import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyFunctionPage from '../Components/MyFunctionalComponent_Task21';

const Task21 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button 
        title={isVisible ? "Hide MyFunctionPage" : "Show MyFunctionPage"} 
        onPress={() => setIsVisible(!isVisible)} 
      />

      {isVisible && <MyFunctionPage />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Task21;