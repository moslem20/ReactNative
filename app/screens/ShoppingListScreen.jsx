import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import styles from '../styles';

export default function ShoppingListScreen({ navigation, items, togglePurchased, deleteItem }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>רשימת קניות</Text>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ItemDetails', { id: item.id })}>
            <View style={styles.listItem}>
              <Text style={item.purchased ? styles.purchased : styles.itemText}>{item.name}</Text>
              <Button title="✔" onPress={() => togglePurchased(item.id)} />
              <Button title="🗑" onPress={() => deleteItem(item.id)} />
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title="הוסף פריט חדש" onPress={() => navigation.navigate('AddEditItem')} />
    </View>
  );
}
