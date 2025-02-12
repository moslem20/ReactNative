import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles';

export default function AddEditItemScreen({ items, setItems }) {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const itemToEdit = items?.find(i => i.id === id);
  const [itemName, setItemName] = useState(itemToEdit ? itemToEdit.name : '');

  const handleSave = () => {
    if (itemName.trim()) {
      if (itemToEdit) {
        setItems(items.map(item => (item.id === id ? { ...item, name: itemName } : item)));
      } else {
        setItems([...items, { id: Date.now().toString(), name: itemName, purchased: false }]);
      }
      router.back(); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{itemToEdit ? 'ערוך פריט' : 'הוסף פריט חדש'}</Text>
      <TextInput style={styles.input} placeholder="שם הפריט" value={itemName} onChangeText={setItemName} />
      <Button title={itemToEdit ? 'שמור שינויים' : 'הוסף'} onPress={handleSave} />
    </View>
  );
}
