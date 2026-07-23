const BookCard = ({ book }) => {

  return (
    <div className="card bg-base-100 shadow-xl">

      <figure className="p-5">
        <img
          src={book.image}
          alt={book.bookName}
          className="h-64 object-contain"
        />
      </figure>

      <div className="card-body">

        <h2 className="card-title">
          {book.bookName}
        </h2>

        <p>
          By : {book.author}
        </p>

      </div>

    </div>
  );
};

export default BookCard;