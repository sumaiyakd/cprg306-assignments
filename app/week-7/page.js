'use client'; // Ensure client-side component

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json'; // Import items.json as itemsData

const Page = () => {
  // Initialize state variable with data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler function to add new items
  const handleAddItem = (item) => {
    // Add a random ID to the item object
    const newItem = { ...item, id: Math.random().toString(36).substring(2, 15) };
    // Update the state with the new item added
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Shopping List</h1>
      {/* Pass handleAddItem to NewItem and items to ItemList */}
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
};

export default Page;
