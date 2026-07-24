import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    rating,
    tags,
  } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition duration-300 hover:scale-[1.02]">

        {/* Book Image */}
        <figure className="bg-gray-100 rounded-xl py-8">
          <img
            src={image}
            alt={bookName}
            className="h-56 object-contain"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body px-0">

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Name */}
          <h2 className="text-2xl font-bold mt-4">
            {bookName}
          </h2>

          {/* Author */}
          <p className="text-gray-500 font-medium">
            By : {author}
          </p>

          <hr className="my-4 border-dashed" />

          {/* Bottom */}
          <div className="flex justify-between items-center">

            <span className="font-medium text-gray-600">
              {category}
            </span>

            <div className="flex items-center gap-2">
              <span className="font-semibold">{rating}</span>
              <FaStar className="text-yellow-500" />
            </div>

          </div>

        </div>

      </div>
    </Link>
  );
};

export default BookCard;