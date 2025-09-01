import { useContext } from "react";
import Meals_API from "../Context/Meals_API";
import Card from "../Components/Card";
import Hero from "../Components/Hero";

export default function Home() {
  const { meals } = useContext(Meals_API);

  // useEffect(() => {
  //   fetchMeals();
  // }, []);

  return (
    <>
    <Hero />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-[80px] pt-[50px]">
      {meals.map((meal) => (
        <Card key={meal.idMeal} meal={meal} />
      ))}
    </div>
    </>
  );
}
