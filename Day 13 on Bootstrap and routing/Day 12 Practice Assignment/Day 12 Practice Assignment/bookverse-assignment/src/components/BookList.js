import React, { useState, useRef, useEffect } from "react";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";
import { fetchBooks } from "../api";
import { motion, AnimatePresence } from "framer-motion";
import withLoadingSpinner from "./withLoadingSpinner";
import RenderStatus from "./RenderStatus";
import { Link } from "react-router-dom";

// We wrap export with HOC at bottom so components remain clean

function BookListBase() {
  const [viewMode, setViewMode] = useState("grid");
  const [selected, setSelected] = useState(null); // local selected for detail slide-in (keeps original UX)
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        // fetch list from json-server
        const data = await fetchBooks();
        if (!cancelled) setBooks(data);
      } catch (err) {
        console.error("Error loading books:", err);
      }
    }
    load();
    return () => (cancelled = true);
  }, []);

  const handleFocus = () => {
    if (searchRef.current) searchRef.current.focus();
  };

  const filteredBooks = books.filter((book) =>
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

      {/* RenderProps component used to show simple loading/greeting UI when desired */}
      <RenderStatus>
        {(status) => (
          <div
            className="mb-3 text-muted"
            style={{
              // background: "#f5e9fdff",
              padding: "10px",
              borderRadius: "8px",
              fontWeight: "bold",
              color: "#1b5e20",
            }}
          >
            {status.isLoading
              ? "Loading books..."
              : `Welcome Reader! — Showing ${filteredBooks.length} books`}
          </div>
        )}
      </RenderStatus>


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
                filteredBooks.map((b) => (
                  // BookCard now links to /book/:id
                  <BookCard
                    key={b.id}
                    id={b.id}
                    title={b.title}
                    author={b.author}
                    price={b.price}
                    image={b.image}
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
                    <hr />
                    <Link to={`/book/${selected.id}`} className="btn btn-sm btn-primary mt-2">
                      Open full page
                    </Link>
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

// wrap the base component with spinner HOC before export
export default withLoadingSpinner(BookListBase);
