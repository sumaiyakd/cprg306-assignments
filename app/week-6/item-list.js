import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json'; // Adjust the import path as needed

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name'); // Initialize state variable

  // Sort the items based on the sortBy state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`mr-2 px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500' : 'bg-gray-500'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-blue-500' : 'bg-gray-500'}`}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id} // Use the item's id as the key
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
