import React from "react";

export default function BookCard({ book }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-[260px] h-[570px] hover:shadow-lg transition">
      <img
        src={book.posterURL}
        alt={book.title}
        className="w-full h-82 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{book.description}</p>
        <p className="mt-3 text-yellow-500 font-bold">⭐ {book.rating}</p>
      </div>
    </div>
  );
}