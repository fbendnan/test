import { useContext, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MealContext } from "../Context/Context";
export default function Hero() {
  const { setIsSearching, setQuery } = useContext(MealContext); 
  return (
    <div className="flex justify-center mt-10 border rounded-md mx-[460px] bg-gray-100">
      <div className="flex items-center text-gray-500 text-md ">
        <IoSearchOutline />
      </div>
      <input
        name="Search"
        type="text"
        className="rounded-l-md pl-2 pr-14 py-3 focus:outline-none focus:ring-0 bg-gray-100"
        placeholder=" Keyword, Meal"
        onChange={(e) => {
          setQuery(e.target.value); 
        }}
      />
      <button
        className="bg-rose-700 px-3 my-1 rounded-md hover:bg-rose-600"
        onClick={() => {
          setIsSearching(true);
        }}
      >
        Search
      </button>
    </div>
  );
}
