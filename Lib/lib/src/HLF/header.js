import { useState } from "react";
import AddBook from "../Components/add";

export default function Header({ onAddBook }) {
  return (
    <header id="add-book" className="bg-red-800 mt-14">
      <nav className="flex ">
        <img
          className="w-[700px] h-[600px] rounded-r-[300px]"
          src="https://media.istockphoto.com/id/1503372066/photo/many-books-stacked-with-blurred-background-of-bookstore-full-of-books-photo-with-copyspace.jpg?s=612x612&w=0&k=20&c=FI9RseCP2ygrGafI-J5yQYpmd1JB1XZcy0kVELu8s1c="
        />
        <div>
          <AddBook onAdd={onAddBook} />
        </div>
      </nav>
    </header>
  );
}
