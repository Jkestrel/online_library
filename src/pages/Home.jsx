import { booksData } from "../data/booksData";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

function Home() {
  // Get unique categories
  const categories = [...new Set(booksData.map(book => book.category))];

  // Pick first 3 as "popular"
  const popularBooks = booksData.slice(0, 3);

  return (
    <div style={{ padding: "24px" }}>
      <h1>Welcome to the Online Library 📚</h1>
      <p>Discover books across various categories</p>

      {/* Categories */}
      <h2 style={{ marginTop: "24px" }}>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/books/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>

      {/* Popular Books */}
      <h2 style={{ marginTop: "24px" }}>Popular Books</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {popularBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
