import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const book = books.find((book) => book.bookId === parseInt(id));

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const {
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">

      {/* Left Side */}
      <div className="bg-gray-100 rounded-2xl flex justify-center items-center p-10">
        <img
          src={image}
          alt={bookName}
          className="h-[500px] object-contain"
        />
      </div>

      {/* Right Side */}
      <div>

        <h1 className="text-5xl font-bold">
          {bookName}
        </h1>

        <p className="text-xl text-gray-500 mt-4">
          By : {author}
        </p>

        <hr className="my-6" />

        <p className="font-semibold">
          {category}
        </p>

        <hr className="my-6" />

        <p>
          <span className="font-bold">
            Review :
          </span>{" "}
          {review}
        </p>

        <div className="flex gap-3 mt-6 flex-wrap">

          <span className="font-bold">
            Tag
          </span>

          {tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-success badge-outline"
            >
              #{tag}
            </span>
          ))}

        </div>

        <hr className="my-6" />

        <div className="space-y-3">

          <p>
            <span className="font-semibold">
              Number of Pages :
            </span>{" "}
            {totalPages}
          </p>

          <p>
            <span className="font-semibold">
              Publisher :
            </span>{" "}
            {publisher}
          </p>

          <p>
            <span className="font-semibold">
              Year of Publishing :
            </span>{" "}
            {yearOfPublishing}
          </p>

          <p>
            <span className="font-semibold">
              Rating :
            </span>{" "}
            {rating}
          </p>

        </div>

        <div className="mt-8 flex gap-4">

          <button className="btn btn-outline">
            Read
          </button>

          <button className="btn btn-info text-white">
            Wishlist
          </button>

        </div>

      </div>

    </div>
  );
};

export default BookDetails;