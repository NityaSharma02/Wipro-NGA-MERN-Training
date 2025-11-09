import React from "react";
import PropTypes from "prop-types";

function BookCard({ title, author, price, image, viewMode, onSelect }) {
  return (
    <div
      className={`card shadow-sm p-2 mb-2 ${viewMode === "list" ? "d-flex flex-row align-items-center" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={() => onSelect({ title, author, price, image })}
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
  );
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  viewMode: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default BookCard;
