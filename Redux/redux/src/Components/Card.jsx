import React from "react";

export default function Card({ meal }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      
      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-56 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
          <h2 className="text-white text-xl font-semibold">{meal.strMeal}</h2>
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-2">
          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
            {meal.strCategory}
          </span>
          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
            {meal.strArea}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          Delicious and tasty {meal.strMeal}, perfect for your next meal.
        </p>
        <a href={meal.strYoutube}
        target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 ">{meal.strYoutube}</a>
      </div>

    </div>
  );
}

