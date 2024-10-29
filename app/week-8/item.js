import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(name)}
      className="bg-gray-800 text-white p-3 mb-4 rounded shadow-lg cursor-pointer"
    >
      <div className="text-xl font-bold">{name}</div>
      <div className="text-sm opacity-75">Buy {quantity} in {category}</div>
    </div>
  );
};

export default Item;
