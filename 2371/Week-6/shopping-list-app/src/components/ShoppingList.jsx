import ShoppingItem from './ShoppingItem';

function ShoppingList({ items, deleteItem, toggleComplete, editItem }) {
  return (
    <div className="shopping-list">
      {items.length === 0 ? (
        <p className="empty-message">Your shopping list is empty</p>
      ) : (
        <ul>
          {items.map(item => (
            <ShoppingItem
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              toggleComplete={toggleComplete}
              editItem={editItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;