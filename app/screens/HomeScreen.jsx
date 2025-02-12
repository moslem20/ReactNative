import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ברוך הבא לאפליקציית רשימת הקניות!</Text>
      <Button title="לרשימת הקניות" onPress={() => navigation.navigate('ShoppingList')} />
    </View>
  );
}
