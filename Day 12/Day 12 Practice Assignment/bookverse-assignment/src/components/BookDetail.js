import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AuthorInfo from "./AuthorInfo";
import "./BookDetail.css";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-detail">
      <Link to="/home" className="back-btn">
        ← Back
      </Link>
      <img src={book.image} alt={book.title} className="detail-image" />
      <div className="detail-info">
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <AuthorInfo author={book.author} />
      </div>
    </div>
  );
}

export default BookDetail;
