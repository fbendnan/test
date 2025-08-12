import React from "react";
import { MdMovieFilter } from "react-icons/md";


export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">

      <div className=" flex gap-1 text-2xl font-bold cursor-pointer">
        <MdMovieFilter className="text-3xl" />
        MovieZone
      </div>

      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-red-500 transition">Home</a>
        <a href="#" className="hover:text-red-500 transition">Movies</a>
        <a href="#" className="hover:text-red-500 transition">About</a>
      </nav>

      
      
    </header>
  );
}
