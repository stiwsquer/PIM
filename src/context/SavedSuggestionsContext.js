import React, { useState, createContext, useContext } from 'react';

const SavedSuggestionsContext = createContext();

export const useSavedSuggestionsContext = () =>
  useContext(SavedSuggestionsContext);

export const SavedSuggestionsContextProvider = ({ children }) => {
  const [savedSuggestions, setSavedSuggestions] = useState([]);

  const saveOrDeleteSuggestion = (suggestion) => {
    if (savedSuggestions.includes(suggestion)) {
      const suggestions = savedSuggestions.filter(
        (savedSuggestion) => savedSuggestion.id !== suggestion.id
      );
      setSavedSuggestions([...suggestions]);
      return;
    }
    setSavedSuggestions((prev) => [...prev, suggestion]);
  };

  return (
    <SavedSuggestionsContext.Provider
      value={[savedSuggestions, saveOrDeleteSuggestion]}
    >
      {children}
    </SavedSuggestionsContext.Provider>
  );
};
