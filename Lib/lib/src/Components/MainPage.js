import BookList from "./BookList";
import Filter from "./filter";
import Books from "./Books";
import { useState } from "react";
import Header from "../HLF/header";

export default function MainPage() {
  const [bookss, setBookss] = useState(BookList);
  const [titleSearch, setTitleSearch] = useState("");

  const handleAddBook = (newBook) => {
    setBookss([...bookss, newBook]);
  };

  const filteredBooks = bookss.filter((book) =>
    book.title.toLowerCase().includes(titleSearch.toLowerCase())
  );

  return (
    <>
      <Header onAddBook={handleAddBook} />
      <Filter setTitleSearch={setTitleSearch} />
      <Books books={filteredBooks} />
    </>
  );
}
