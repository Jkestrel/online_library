import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="not-found">
    <div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>404 - Page Not Found</h1>

      <p>
        The page <strong>{location.pathname}</strong> does not exist.
      </p>

      <br />

      <Link to="/">Go back to Home</Link>
    </div>
  </div>
  );
}

export default NotFound;
