import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyClassComponent_Task19 from '../Components/MyClassComponent_Task19';

const Task19 = () => {
  const [showClassPage, setShowClassPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button 
        title="Show" 
        onPress={() => setShowClassPage(true)} 
      />

      {/* If showClassPage is true, render the Class Component */}
      {showClassPage && <MyClassComponent_Task19 />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Task19;