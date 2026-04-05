import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const Task36 = () => {
  // 1. Your provided helper function
  function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  // 2. Generate an array of 100 random words
  const wordsArray = [];
  for (let i = 1; i <= 100; i++) {
    // Generate a word with a length between 5 and 12
    const randomLen = Math.floor(Math.random() * 8) + 5;
    wordsArray.push({
      id: i,
      word: generateRandomWord(randomLen)
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>100 Random Words List</Text>
      
      {/* 3. The ScrollView container */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {wordsArray.map((item) => (
          <View key={item.id} style={styles.wordRow}>
            <Text style={styles.indexText}>{item.id}.</Text>
            <Text style={styles.wordText}>{item.word}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1a73e8',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  wordRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  indexText: {
    fontWeight: 'bold',
    marginRight: 15,
    color: '#5f6368',
    width: 35,
  },
  wordText: {
    fontSize: 18,
    color: '#202124',
    textTransform: 'capitalize', // Makes the first letter big
  },
});

export default Task36;