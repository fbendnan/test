import React, { useState } from "react";

export default function AddBook({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || rating <= 0) {
      alert("Please fill all fields correctly!");
      return;
    }
    onAdd({ title, description, posterURL, rating });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-4 justify-center mt-[200px] mx-20"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 px-3 py-2 bg-white/80 border rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="flex-1 px-3 py-2 bg-white/80 border rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        className="flex-1 px-3 py-2 bg-white/80 border rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
      />
      <input
        type="Number"
        min="1"
        max="5"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-32 px-3 py-2 bg-white/80 border rounded-lg focus:ring-2 focus:ring-white/20 outline-none"
      />
      <button
        type="submit"
        className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
      >
        Add Book
      </button>
    </form>
  );
}
