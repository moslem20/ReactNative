import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

export default function ItemDetailsScreen({ route, navigation, items }) {
  const { id } = route.params;
  const item = items.find(i => i.id === id);

  if (!item) {
    return <Text style={styles.title}>הפריט לא נמצא</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.itemText}>{item.purchased ? 'נרכש' : 'לא נרכש'}</Text>
      <Button title="ערוך פריט" onPress={() => navigation.navigate('AddEditItem', { id })} />
    </View>
  );
}
