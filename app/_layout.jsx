import { ShoppingListProvider } from './context/ShoppingListContext';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <ShoppingListProvider>
      <Stack />
    </ShoppingListProvider>
  );
}
