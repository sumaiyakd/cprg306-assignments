"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData); // Load initial items from items.json
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to clean item names by removing extra text and emojis
  const cleanItemName = (itemName) => {
    return itemName.split(',')[0].replace(/[^a-zA-Z ]/g, "").trim();
  };

  // Handle adding a new item to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Handle selecting an item and clean up the name for API
  const handleItemSelect = (itemName) => {
    const cleanName = cleanItemName(itemName);
    setSelectedItemName(cleanName);
  };

  return (
    <main className="bg-gray-900 min-h-screen p-5">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-white text-3xl font-bold mb-5">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-full md:w-1/2 p-4">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
