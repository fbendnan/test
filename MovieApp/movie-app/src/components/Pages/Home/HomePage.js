import React, { useState } from "react";
import MoviesList from "./MoviesList";
import Hero from "./hero";

export default function Home() {
  return (
    <>
      <Hero />
       <MoviesList />
    </>
  );
}
