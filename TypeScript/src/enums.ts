// In src/enums.ts:

// Create an enum MealType with values: Breakfast, Lunch, Dinner.

// Create a variable todayMeal of type MealType and assign it Lunch.

// Print it.

enum MealType {
  Breakfast ="Breakfast",
  Lunch = "Lunch",
  Dinner = "Dinner",
}

let todayMeal:MealType = MealType.Breakfast;

console.log(todayMeal);
