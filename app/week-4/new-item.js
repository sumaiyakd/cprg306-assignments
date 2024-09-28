// /app/week-4/new-item.js

"use client"; // Directive to indicate this is a client component

import { useState } from 'react';

export default function NewItem() {
  const [item, setItem] = useState('');

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission of the item (e.g., send it to an API)
    console.log('New item submitted:', item);
    setItem(''); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={handleChange}
        placeholder="Enter new item"
        className="border rounded p-2"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Add Item
      </button>
    </form>
  );
}
