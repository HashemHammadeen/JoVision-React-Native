import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

const { width } = Dimensions.get('window');

const Task33 = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  // 1. Initialize the player with a local file and poster
  const player = useVideoPlayer(require('../Resources/sample.mp4'), (player) => {
    player.loop = true;
    player.play();
  });

  // 2. Custom Function to handle the Middle-Screen Tap
  const handlePress = () => {
    if (isPlaying) {
      player.pause();
      setIsPlaying(false);
    } else {
      player.play();
      setIsPlaying(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Custom Video Controls</Text>

      {/* 3. Wrap VideoView in a Pressable to capture the tap */}
      <Pressable onPress={handlePress} style={styles.videoWrapper}>
        <VideoView
          style={styles.video}
          player={player}
          // 4. DISABLE NATIVE CONTROLS
          useNativeControls={false} 
          contentFit="cover"
        />
        
        {/* Visual Overlay: Show an icon or text when paused */}
        {!isPlaying && (
          <View style={styles.overlay}>
            <Text style={styles.playIcon}>▶</Text>
          </View>
        )}
      </Pressable>

      <Text style={styles.instruction}>Tap the video to Play/Pause</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  header: { color: '#fff', fontSize: 20, marginBottom: 20, fontWeight: 'bold' },
  videoWrapper: {
    width: width * 0.9,
    height: 250,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative', // Necessary for the overlay
    backgroundColor: '#000',
  },
  video: { width: '100%', height: '100%' },
  // 5. THE OVERLAY (Centered on screen)
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fill the whole video area
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: { color: 'white', fontSize: 60 },
  instruction: { color: '#888', marginTop: 20, fontSize: 14 }
});

export default Task33;