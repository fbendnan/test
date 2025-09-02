import Hero from "../Components/Hero";
import Meals from "../Components/Meals";
import { MealProvider } from "../Context/Context";

export default function Home() {
  return (
    <>
      <MealProvider>
        <Hero/>
        <Meals />
      </MealProvider>
    </>
  );
}
