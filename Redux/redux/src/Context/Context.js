import { useEffect, useState } from "react";
import Meals_API from "./Meals_API";
import axios from "axios";
import Home from "../pages/Home";

export default function Context() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        const tempMeals = [];

        for (let i = 0; i < 10; i++) {
          const response = await axios.get(url);
          tempMeals.push(...response.data.meals);
        }

        setMeals(tempMeals);
      } catch (error) {
        console.error("Error loading meals...", error);
        setMeals([]);
      }
    };
    fetchMeals();
  }, []);

  const values = { meals };

  return (
    <Meals_API.Provider value={values}>
      <Home />
    </Meals_API.Provider>
  );
}
