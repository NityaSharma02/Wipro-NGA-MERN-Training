import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBookById } from "../api";
import withLoadingSpinner from "./withLoadingSpinner";
import AuthorInfo from "./AuthorInfo";

function BookDetailBase() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const data = await fetchBookById(id);
        if (!cancelled) setBook(data);
      } catch (err) {
        console.error("Failed to load book:", err);
      }
    }
    load();
    return () => (cancelled = true);
  }, [id]);

  if (!book) {
    // while loading, the HOC will display spinner (HOC receives loading via its own fetch state)
    return null;
  }

  return (
    <div className="container py-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-card card mx-auto shadow-sm p-3">
        <div className="row g-3">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={book.image}
              alt={book.title}
              className="rounded"
              style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-8 text-start">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p style={{ color: "black" }}><strong>Price:</strong> ₹{book.price}</p>

            <hr />
            <AuthorInfo author={book.author} />
          </div>
        </div>
      </div>
    </div>
  );
}

// export wrapped with spinner HOC to show loader while fetching
export default withLoadingSpinner(BookDetailBase);
