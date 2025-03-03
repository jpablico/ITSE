import { useState } from 'react';

function ShoppingForm({ addItem }) {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(input, priority);
    setInput('');
  };

  return (
    <form className="shopping-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add an item to your list..."
        className="item-input"
      />
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}
        className="priority-select"
      >
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>
      <button 
        type="submit" 
        className={`add-button ${!input.trim() ? 'disabled' : ''}`}
        disabled={!input.trim()}
      >
        Add Item
      </button>
    </form>
  );
}

export default ShoppingForm;