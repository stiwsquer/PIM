import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View, FlatList } from 'react-native';
import { words } from 'popular-english-words';
import MyListItem from './MyListItem';
import { Button } from 'react-native-elements';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const generateRandomWords = (quantity) => {
  const min = 0;
  const max = words.getWordCount() - 1;
  let arr = [];
  for (let i = 0; i < quantity; i++) {
    const firstWord = capitalizeFirstLetter(
      words.getWordAtPosition(Math.floor(Math.random() * (max - min + 1)) + min)
    );
    const secondWord = capitalizeFirstLetter(
      words.getWordAtPosition(Math.floor(Math.random() * (max - min + 1)) + min)
    );
    arr.push({
      name: `${firstWord}${secondWord}`,
      id: `${firstWord}${secondWord}${new Date() + i}`,
    });
  }
  return arr;
};

export default function WordList({ navigation }) {
  const [randomWords, setRandomWords] = useState(generateRandomWords(20));

  const generateMoreWords = () => {
    setRandomWords((prev) => [...prev, ...generateRandomWords(20)]);
  };
  useEffect(() => {
    if (randomWords.length > 100) setRandomWords(generateRandomWords(20));
  }, [randomWords]);

  return (
    <>
      <Button
        title="Go to Saved Suggestions"
        onPress={() => navigation.navigate('Saved Suggestions')}
      />
      <SafeAreaProvider>
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item) => item.id}
            onEndReachedThreshold={1}
            onEndReached={generateMoreWords}
            data={randomWords}
            renderItem={({ item }) => <MyListItem item={item} icon />}
          />
        </View>
      </SafeAreaProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
