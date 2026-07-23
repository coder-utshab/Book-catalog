import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="my-20">

      <h2 className="text-5xl font-bold text-center mb-10">
        Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          books.map(book => (
            <BookCard
              key={book.bookId}
              book={book}
            />
          ))
        }

      </div>

    </div>
  );
};

export default Books;