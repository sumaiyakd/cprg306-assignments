'use client'; // Ensure client-side component

import { useState } from 'react';

export default function NewItem() {
  // Initialize state variables for name, quantity, and category
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Increment function (max 20)
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Decrement function (min 1)
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset form
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-gray-900 p-6 rounded-lg flex flex-col items-center space-y-4"
    >
      {/* Name Field */}
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 rounded-md text-gray-900"
      />

      <div className="flex items-center space-x-4">
        {/* Quantity Field */}
        <span className="text-xl font-medium text-white">{quantity}</span>

        {/* Decrement Button */}
        <button
          type="button"
          className={`px-4 py-2 rounded-md ${
            quantity === 1 ? 'bg-gray-400' : 'bg-gray-300 hover:bg-gray-400'
          } text-white font-semibold focus:outline-none disabled:opacity-50`}
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>

        {/* Increment Button */}
        <button
          type="button"
          className={`px-4 py-2 rounded-md ${
            quantity === 20 ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
          } text-white font-semibold focus:outline-none disabled:opacity-50`}
          onClick={increment}
          disabled={quantity === 20}
        >
          +
        </button>

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600"
      >
        +
      </button>
    </form>
  );
}
