import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyClassComponent_Task20 from '../Components/MyClassComponent_Task20';

const Task20 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button 
        title={isVisible ? "Hide MyClassPage" : "Show MyClassPage"} 
        onPress={() => setIsVisible(!isVisible)} 
      />

      {/* When isVisible is true, the component 'Mounts'. 
          When false, it 'Unmounts'. */}
      {isVisible && <MyClassComponent_Task20 />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Task20;