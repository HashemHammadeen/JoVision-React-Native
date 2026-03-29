    import React, { useState } from 'react';
    import { StyleSheet, View, Button } from 'react-native';
    import MyFunctionalComponent_Task16 from '../Components/MyFunctionalComponent_Task16';

    const Task16 = () => {
    // State to track if the name is hidden or shown
    const [showName, setShowName] = useState(false);

    const handlePress = () => {
        // Toggle the boolean value
        setShowName(!showName);
    };

    return (
        <View style={styles.container}>
        {/* The Button with dynamic title based on state */}
        <Button 
            title={showName ? "Hide" : "Show"} 
            onPress={handlePress} 
        />

        {/* Nesting the Component and passing the state as a prop */}
        <MyFunctionalComponent_Task16 isVisible={showName} />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    });

    export default Task16;