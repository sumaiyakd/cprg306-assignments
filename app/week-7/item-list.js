import React from 'react';
import Item from './item';

const ItemList = ({ items }) => { // Add items prop
  // Rendering the list of items using the Item component
  return (
    <ul className="max-w-xl mx-auto">
      {items.map((item) => ( // No need for index as key anymore
        <Item 
          key={item.id} // Use id from item
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
};

export default ItemList;
