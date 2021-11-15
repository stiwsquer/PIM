import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { useSavedSuggestionsContext } from '../context/SavedSuggestionsContext';

export default function MyListItem({ item, icon }) {
  const [reverse, setReverse] = useState(false);
  const [, saveOrDeleteSuggestion] = useSavedSuggestionsContext();

  const toggleReverse = () => {
    setReverse((prev) => !prev);
    saveOrDeleteSuggestion(item);
  };

  return (
    <TouchableWithoutFeedback>
      <ListItem key={item.id} bottomDivider style={styles.item}>
        <ListItem.Content style={styles.listContent}>
          <ListItem.Title style={styles.itemTitle}>{item.name}</ListItem.Title>
          {icon ? (
            <Icon
              style={styles.icon}
              raised
              name="heart"
              type="font-awesome"
              color="#DDD"
              reverse={reverse}
              reverseColor="#f50"
              onPress={toggleReverse}
            />
          ) : null}
        </ListItem.Content>
      </ListItem>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  listContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: { flex: 0 },
  item: { padding: 10 },
  itemTitle: { flex: 1, fontSize: 24 },
});
