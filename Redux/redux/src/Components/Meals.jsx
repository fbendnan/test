import React from "react";
import { useContext } from "react";
import Card from "../Components/Card";
import { MealContext } from "../Context/Context";

function Meals() {
  const { meals } = useContext(MealContext);

  console.log(meals);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-[80px] pt-[50px]">
        {meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Meals;
