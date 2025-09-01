import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-yellow-400 p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Meal Menu</h1>
        <nav>
          <ul className="flex gap-6 text-white font-semibold">
            <Link to='/home'><li className="cursor-pointer">Home</li></Link>
            <li className="cursor-pointer">Search</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
