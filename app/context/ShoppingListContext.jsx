import React, { createContext, useContext, useState } from 'react';

const ShoppingListContext = createContext();

export function ShoppingListProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, { id: Date.now().toString(), name: item, purchased: false }]);
  };

  const editItem = (id, newName) => {
    setItems(items.map(item => (item.id === id ? { ...item, name: newName } : item)));
  };

  const togglePurchased = (id) => {
    setItems(items.map(item => (item.id === id ? { ...item, purchased: !item.purchased } : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <ShoppingListContext.Provider value={{ items, addItem, editItem, togglePurchased, deleteItem }}>
      {children}
    </ShoppingListContext.Provider>
  );
}

export function useShoppingList() {
  return useContext(ShoppingListContext);
}
