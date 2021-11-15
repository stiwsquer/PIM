import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, View } from 'react-native';
import MyListItem from './MyListItem';
import { useSavedSuggestionsContext } from '../context/SavedSuggestionsContext';

export default function SavedSuggestions() {
  const [savedSuggestions] = useSavedSuggestionsContext();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={savedSuggestions}
          renderItem={({ item }) => <MyListItem item={item} />}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
