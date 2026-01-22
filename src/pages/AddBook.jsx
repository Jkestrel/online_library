import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    description: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.rating ||
      !formData.description
    ) {
      setError("All fields are required");
      return;
    }

    const newBook = {
      id: Date.now(),
      ...formData,
      rating: Number(formData.rating),
    };

    dispatch(addBook(newBook));
    navigate("/books/all");
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1>Add New Book</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <br /><br />

        <input name="author" placeholder="Author" onChange={handleChange} />
        <br /><br />

        <input name="category" placeholder="Category" onChange={handleChange} />
        <br /><br />

        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
