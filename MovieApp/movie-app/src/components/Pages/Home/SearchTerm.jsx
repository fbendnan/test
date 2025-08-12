import React, { useState } from "react";

export default function Search({onSearch}) {
  const [search, setSearch] = useState("");

   const handleClick = () => {
    onSearch(search.trim());
  };

  return (
    <div className="flex justify-center mt-10 ">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pr-[160px] pl-10 py-4 bg-gray-300 rounded-l-xl text-gray-900 focus:outline-gray-400 "
      />
      <button className="border border-xl bg-gray-300 hover:bg-gray-400 text-black/70  font-semibold px-3 rounded-r-xl"
      onClick={handleClick}>
        search
      </button>
    </div>
  );
}
