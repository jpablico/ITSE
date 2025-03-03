import { useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList'
import ShoppingForm from './components/ShoppingForm'

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemText, priority = 'normal') => {
    if (itemText.trim()) {
      setItems([...items, { 
        id: Date.now(), 
        text: itemText,
        priority, // Add priority field
        completed: false 
      }]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const editItem = (id, newText) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, text: newText } : item
    ));
  };

  return (
    <div className="app-container">
      <h1>Shopping List</h1>
      <ShoppingForm addItem={addItem} />
      <ShoppingList 
        items={items}
        deleteItem={deleteItem}
        toggleComplete={toggleComplete}
        editItem={editItem}
      />
    </div>
  )
}

export default App
