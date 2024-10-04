'use client'; // Ensure client-side component

import { useState } from 'react';

export default function NewItem() {
  // Initialize state for quantity
  const [quantity, setQuantity] = useState(1);

  // Function to increment quantity (max 20)
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  // Function to decrement quantity (min 1)
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      {/* Display Current Quantity */}
      <span className="text-xl font-medium">{quantity}</span>

      {/* Decrement Button */}
      <button
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
        className={`px-4 py-2 rounded-md ${
          quantity === 20 ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
        } text-white font-semibold focus:outline-none disabled:opacity-50`}
        onClick={increment}
        disabled={quantity === 20}
      >
        +
      </button>
    </div>
  );
}
