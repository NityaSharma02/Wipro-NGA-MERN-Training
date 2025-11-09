import React, { useState, useRef } from "react";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";
import booksData from "../booksData";
import { motion, AnimatePresence } from "framer-motion";

function BookList() {
  const [viewMode, setViewMode] = useState("grid");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  const handleFocus = () => {
    if (searchRef.current) searchRef.current.focus();
  };

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const listVariants = {
    enter: { x: 0, opacity: 1 },
    exitLeft: { x: -300, opacity: 0 },
    exitRight: { x: 300, opacity: 0 },
  };

  const detailVariants = {
    enter: { x: 0, opacity: 1 },
    initialLeft: { x: 300, opacity: 0 },
    initialRight: { x: -300, opacity: 0 },
  };

  return (
    <div className="booklist-container container py-4 text-center">
      <h1 className="mb-4">📚 Welcome to BookVerse</h1>

      <div className="d-flex justify-content-center mb-3">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          style={{ width: "60%" }}
        />
        <button className="btn btn-outline-primary ms-2" onClick={handleFocus}>
          Focus
        </button>
      </div>

      <div className="d-flex justify-content-center gap-2 mb-3">
        <div className="btn-group" role="group">
          <button
            className={`btn ${viewMode === "grid" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </button>
          <button
            className={`btn ${viewMode === "list" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setViewMode("list")}
          >
            List
          </button>
        </div>
      </div>

      <div className="main-area">
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key="list"
              className={`booklist ${viewMode}`}
              initial="enter"
              animate="enter"
              exit={viewMode === "grid" ? "exitLeft" : "exitRight"}
              variants={listVariants}
              transition={{ duration: 0.45 }}
            >
              {filteredBooks.length > 0 ? (
                filteredBooks.map((b, i) => (
                  <BookCard
                    key={i}
                    {...b}
                    viewMode={viewMode}
                    onSelect={(book) => setSelected(book)}
                  />
                ))
              ) : (
                <p className="text-center text-muted">No books found.</p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              className="book-detail"
              initial={viewMode === "grid" ? "initialRight" : "initialLeft"}
              animate="enter"
              exit="initialRight"
              variants={detailVariants}
              transition={{ duration: 0.45 }}
            >
              <div className="detail-card card mx-auto shadow-sm p-3">
                <button className="btn btn-sm btn-outline-secondary mb-3" onClick={() => setSelected(null)}>
                  ← Back
                </button>

                <div className="row g-3">
                  <div className="col-md-4 d-flex justify-content-center">
                  <img 
                    src={selected.image} 
                    alt={selected.title} 
                    className="rounded" 
                    style={{ width: "100%", height: "auto", maxHeight: "500px", objectFit: "contain" }}
                  />
                </div>

                  <div className="col-md-8 text-start">
                    <h3>{selected.title}</h3>
                    <p><strong>Author:</strong> {selected.author}</p>
                    <p style={{ color: "black" }}><strong>Price:</strong> ₹{selected.price}</p>
                   

                    <hr />
                    <AuthorInfo author={selected.author} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default BookList;
