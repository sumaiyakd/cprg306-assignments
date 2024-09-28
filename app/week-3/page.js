import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
