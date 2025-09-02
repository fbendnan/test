import { createContext, useEffect, useState } from "react";
import { getRandomMeals, searchMeals } from "../API/MealApi";

export const MealContext = createContext();

export function MealProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState("");

  const fetchRandomMeals = async () => {
    try {
      const tempMeals = [];
      setLoading(true);

      for (let i = 0; i < 10; i++) {
        const res = await getRandomMeals();
        tempMeals.push(...res.data.meals);
      }

      setMeals(tempMeals);
    } catch (error) {
      console.error("Error loading meals...", error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchMeals = async () => {
    try {
      setLoading(true);

      const res = await searchMeals(search);
      console.log(meals);
      setMeals(res.data.meals || []);
      console.log(res.data.meals);
    } catch (error) {
      console.error("Error loading search meals...", error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search ? fetchSearchMeals() : fetchRandomMeals();
  }, [search]);

  return (
    <MealContext.Provider
      value={{ meals, fetchSearchMeals, search, setSearch, setIsSearching }}
    >
      {children}
    </MealContext.Provider>
  );
}
