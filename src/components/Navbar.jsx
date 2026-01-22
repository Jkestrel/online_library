import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "16px", background: "#222", color: "white" }}>
      <Link to="/" style={{ marginRight: "16px" }}>Home</Link>
      <Link to="/books/all" style={{ marginRight: "16px" }}>Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
}

export default Navbar;
