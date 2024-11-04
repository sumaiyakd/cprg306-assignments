"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // Redirect to landing page if not logged in
    }
  }, [user, router]);

  if (!user) return null; // Don't render if the user isn't logged in

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const cleanItemName = (itemName) => {
    return itemName.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

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
