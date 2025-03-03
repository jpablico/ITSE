import { useState } from 'react';

function ShoppingItem({ item, deleteItem, toggleComplete, editItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleEdit = () => {
    if (isEditing) {
      editItem(item.id, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editItem(item.id, editText);
    setIsEditing(false);
  };

  return (
    <li className={`shopping-item priority-${item.priority} ${item.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
          />
          <button type="submit" className="save-button">Save</button>
        </form>
      ) : (
        <>
          <div className="item-info">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            <span className="item-text">{item.text}</span>
          </div>
          <div className="item-actions">
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
            <button 
              onClick={() => deleteItem(item.id)} 
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ShoppingItem;