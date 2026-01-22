import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        background: "white",
      }}
    >
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>

      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
