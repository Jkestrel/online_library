import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { useState } from "react";

function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const books = useSelector((state) => state.books.list);

  // Filter by category
  const filteredByCategory =
    category === "all"
      ? books
      : books.filter(
          (book) =>
            book.category.toLowerCase() === category.toLowerCase()
        );

  // Filter by search (title OR author)
  const filteredBooks = filteredByCategory.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "24px" }}>
      <h1>Browse Books</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          margin: "16px 0",
          width: "100%",
          maxWidth: "400px",
        }}
      />

      {/* Books List */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
