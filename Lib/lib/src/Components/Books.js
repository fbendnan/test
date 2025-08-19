import React from "react";
import BookCard from "./bookCard";

export default function Books({ books }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10 mb-10">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}