
import { createContext, useEffect, useState } from "react";
import { getRandomMeals, searchMeals } from "../API/MealApi";

export const MealContext = createContext();

export function MealProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

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

  const fetchSearchMeals = async (query) => {
    try {
      setLoading(true);

      const res = await searchMeals(query);
      setMeals(res.data.meals || []); 
    } catch (error) {
      console.error("Error loading search meals...", error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isSearching) {
      fetchRandomMeals();
    }
  }, [isSearching]);

  return (
    <MealContext.Provider
      value={{ meals, loading, fetchSearchMeals, setIsSearching }}
    >
      {children}
    </MealContext.Provider>
  );
}
