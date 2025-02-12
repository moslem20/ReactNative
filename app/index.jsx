import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
import AddEditItemScreen from './screens/AddEditItemScreen';

const Stack = createStackNavigator();

export default function Index() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, { id: Date.now().toString(), name: item, purchased: false }]);
  };

  const editItem = (id, newName) => {
    setItems(items.map(item => item.id === id ? { ...item, name: newName } : item));
  };

  const togglePurchased = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, purchased: !item.purchased } : item));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ShoppingList">
        {props => <ShoppingListScreen {...props} items={items} togglePurchased={togglePurchased} deleteItem={deleteItem} />}
      </Stack.Screen>
      <Stack.Screen name="ItemDetails">
        {props => <ItemDetailsScreen {...props} items={items} />}
      </Stack.Screen>
      <Stack.Screen name="AddEditItem">
        {props => <AddEditItemScreen {...props} items={items} setItems={setItems} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
