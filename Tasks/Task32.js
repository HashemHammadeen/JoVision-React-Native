import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

// Get screen width for a responsive look
const { width } = Dimensions.get('window');

const Task32 = () => {
  // 1. Initialize the Video Player
  const player = useVideoPlayer(require('../Resources/video1.mp4'), (player) => {
    player.loop = true; // Loop the video
    player.play();      // Auto-play
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Video with Poster</Text>

      <View style={styles.videoWrapper}>
        {/* 2. The VideoView is the "Screen" for the player */}
        <VideoView
          style={styles.video}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
          // 3. The Poster is handled here (usually as a separate Image in modern Expo
          // or via the native 'poster' prop in older versions)
        />
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          The poster displays while the video streams. 
          Tap to toggle controls!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000', // Black background like a cinema
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  header: { 
    color: '#fff', 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  videoWrapper: {
    width: width * 0.95, // 95% of screen width
    height: 250,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#333',
    // Border style
    borderWidth: 2,
    borderColor: '#2e7d32' // JOVISION Green
  },
  video: {
    width: '100%',
    height: '100%',
  },
  infoBox: {
    padding: 20,
    marginTop: 20,
  },
  infoText: {
    color: '#aaa',
    textAlign: 'center',
    fontSize: 14,
  }
});

export default Task32;