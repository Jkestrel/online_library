import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();


  const books = useSelector((state) => state.books.list);
  const book = books.find((b) => b.id === Number(id));

  // If book not found
  if (!book) {
    return (
      <div style={{ padding: "24px" }}>
        <h2>Book not found</h2>
        <Link to="/books/all">Back to Browse Books</Link>
      </div>
    );
  }
  
  return (
    <div style={{ padding: "24px" }}>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <p><strong>Description:</strong> {book.description}</p>

      <br />
      <Link to="/books/all">← Back to Browse Books</Link>
    </div>
  );
}

export default BookDetails;
