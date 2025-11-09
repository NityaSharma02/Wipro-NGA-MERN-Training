import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BookCard({ id, title, author, price, image, viewMode, onSelect }) {
  return (
    <Link to={`/book/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className={`card shadow-sm p-2 mb-2 ${viewMode === "list" ? "d-flex flex-row align-items-center" : ""}`}
        style={{ cursor: "pointer" }}
        // still call onSelect for in-page detail UX
        onClick={(e) => {
          // avoid navigation being prevented; allow onSelect for local detail panel too
          if (onSelect) onSelect({ id, title, author, price, image });
        }}
      >
        <img
          src={image}
          alt={title}
          className="img-fluid rounded"
          style={{
            width: viewMode === "list" ? "100px" : "100%",
            height: viewMode === "list" ? "140px" : "280px",
            objectFit: "cover",
            marginRight: viewMode === "list" ? "15px" : "0"
          }}
        />
        <div className="card-body p-2">
          <h6 className="card-title mb-1">{title}</h6>
          <p className="text-muted mb-1">{author}</p>
          <p style={{ color: "black" }} className="fw-bold mb-0">₹{price}</p>
        </div>
      </div>
    </Link>
  );
}

BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  viewMode: PropTypes.string,
  onSelect: PropTypes.func
};

export default BookCard;
