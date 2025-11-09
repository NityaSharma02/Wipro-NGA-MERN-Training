import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import { AnimatePresence, motion } from "framer-motion";

// App now contains routing; /home and /book/:id
function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* AnimatePresence + motion for route transitions (fade in/out) */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />
          <Route
            path="/home"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BookList />
              </motion.div>
            }
          />
          <Route
            path="/book/:id"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BookDetail />
              </motion.div>
            }
          />
          {/* fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
