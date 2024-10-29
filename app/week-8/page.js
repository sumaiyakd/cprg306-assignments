import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);

  // Function to handle adding a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Function to handle item selection and clean up the name
  const handleItemSelect = (name) => {
    const cleanedName = name.replace(/,.*|\s[^\w\s]/g, '').trim();
    setSelectedItemName(cleanedName);
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
