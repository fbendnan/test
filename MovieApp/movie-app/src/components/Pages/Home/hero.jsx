import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white py-20 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Discover Your Favorite Movie
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Explore thousands of movies, trailers, reviews, and ratings all in one
          place. Dive into the world of cinema and never miss a blockbuster.
        </p>
        <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-md text-lg font-semibold">
          Browse Movies
        </button>
      </div>
    </section>
  );
}
