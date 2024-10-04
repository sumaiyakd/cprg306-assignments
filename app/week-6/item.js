import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-md mb-4 shadow-lg">
      <div>
        <span className="font-bold text-lg">{name}</span>
        <p className="text-sm text-gray-400">Buy {quantity} in {category}</p>
      </div>
    </li>
  );
};

export default Item;
