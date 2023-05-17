import { useState } from 'react';
import ListItem from './ListItem';

export default function DeleteDataFromMariaDb() {
  const [items, setItems] = useState(['dataset1-1', 'dataset-2']);

  const handleDeleteItem = (item) => {
    const updatedItems = items.filter((i) => i !== item);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>List of Items</h1>
      {items.map((item, index) => (
        <ListItem key={index} item={item} onDelete={handleDeleteItem} />
      ))}
    </div>
  );
}
