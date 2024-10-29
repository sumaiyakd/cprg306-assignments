"use client";

import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Fetch data from API
  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  };

  // Load function
  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  // Effect hook to load meal ideas on ingredient change
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-xl font-bold mb-4 text-white">Meal Ideas with {ingredient}</h2>
      <ul className="text-white">
        {meals.map(meal => (
          <li key={meal.idMeal} className="mb-2">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 inline-block mr-4"/>
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
