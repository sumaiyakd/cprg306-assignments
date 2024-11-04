"use client";
import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  // Fetch meals from the API based on ingredient
  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  };

  // Load meals when the ingredient changes
  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Fetch detailed meal info when a meal is clicked
  const handleMealClick = async (mealId) => {
    if (selectedMeal && selectedMeal.idMeal === mealId) {
      setSelectedMeal(null); // Close the ingredients if clicking the same meal again
    } else {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      setSelectedMeal(data.meals[0]); // Set the selected meal's details
    }
  };

  return (
    <div className="meal-ideas">
      <h2 className="text-2xl font-bold text-white mb-4">Meal Ideas</h2>

      {meals.length === 0 ? (
        <p className="text-white">No meal ideas found for {ingredient}</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li 
              key={meal.idMeal} 
              className={`cursor-pointer p-4 mb-2 rounded-md ${
                selectedMeal && selectedMeal.idMeal === meal.idMeal ? 'bg-orange-700 text-white' : 'bg-gray-800 text-white'
              } hover:bg-orange-500 transition-all`}
              onClick={() => handleMealClick(meal.idMeal)}
            >
              <p>{meal.strMeal}</p>
              {selectedMeal && selectedMeal.idMeal === meal.idMeal && (
                <div className="mt-2 bg-orange-700 p-4 rounded-md">
                  <p className="font-bold mb-2">Ingredients needed:</p>
                  <ul className="list-disc ml-5">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map(index => {
                      const ingredient = selectedMeal[`strIngredient${index}`];
                      const measure = selectedMeal[`strMeasure${index}`];
                      return ingredient && ingredient.trim() !== '' ? (
                        <li key={index}>{`${ingredient} (${measure})`}</li>
                      ) : null;
                    })}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealIdeas;
