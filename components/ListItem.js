import { useState, useEffect } from 'react';

export default function ListItem({ item, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      onDelete(item);
    }
    setShowConfirmation(false);
  };

  return (
    <div>
      {item}
      <button onClick={handleDelete}>Delete</button>
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg">
            <p>Do you want to remove the dataset?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2"
                onClick={() => handleConfirmation(true)}
              >
                OK
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                onClick={() => handleConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ParentComponent() {
  const [items, setItems] = useState([]);

  const handleDeleteItem = (item) => {
    const updatedItems = items.filter((i) => i !== item);
    setItems(updatedItems);

    // Update localStorage with the updated items
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  useEffect(() => {
    // Load items from localStorage on component mount
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <div>
      <h1>List of Items</h1>
      {items.map((item, index) => (
        <ListItem key={index} item={item} onDelete={handleDeleteItem} />
      ))}
    </div>
  );
}
