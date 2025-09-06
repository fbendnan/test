"use strict";
// In src/enums.ts:
Object.defineProperty(exports, "__esModule", { value: true });
// Create an enum MealType with values: Breakfast, Lunch, Dinner.
// Create a variable todayMeal of type MealType and assign it Lunch.
// Print it.
var MealType;
(function (MealType) {
    MealType["Breakfast"] = "Breakfast";
    MealType["Lunch"] = "Lunch";
    MealType["Dinner"] = "Dinner";
})(MealType || (MealType = {}));
let todayMeal = MealType.Breakfast;
console.log(todayMeal);
