import React, { useState, useCallback } from 'react';
import { 
  ScrollView, 
  Text, 
  StyleSheet, 
  View, 
  RefreshControl 
} from 'react-native';

const Task37 = () => {
  // 1. Helper function for random words
  function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  // 2. State for our words list and the refreshing spinner
  const [words, setWords] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      word: generateRandomWord(7)
    }))
  );
  const [refreshing, setRefreshing] = useState(false);

  // 3. The logic that runs when you pull down
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("Refreshing started... 🔄");

    // Simulate an API call or data update (2 seconds delay)
    setTimeout(() => {
      // Create a brand new list of words to prove it refreshed
      const newWords = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        word: generateRandomWord(7)
      }));
      
      setWords(newWords);
      setRefreshing(false); // Stop the spinner
      console.log("Refreshing finished! ✅");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pull to Refresh List</Text>
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        // 4. ATTACH THE REFRESH CONTROL
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            colors={['#2e7d32']} // Spinner color for Android
            tintColor={'#2e7d32'} // Spinner color for iOS
          />
        }
      >
        {words.map((item) => (
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
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 50 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  wordRow: { 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee'
  },
  indexText: { fontWeight: 'bold', width: 40, color: '#888' },
  wordText: { fontSize: 16, textTransform: 'lowercase' },
});

export default Task37;