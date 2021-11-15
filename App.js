import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WordList from './src/components/WordList';
import SavedSuggestions from './src/components/SavedSuggestions';
import { SavedSuggestionsContextProvider } from './src/context/SavedSuggestionsContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <SavedSuggestionsContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Startup Name Generator">
            <Stack.Screen name="Startup Name Generator">
              {(props) => <WordList {...props} />}
            </Stack.Screen>

            <Stack.Screen name="Saved Suggestions">
              {(props) => <SavedSuggestions />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SavedSuggestionsContextProvider>
    </>
  );
}
