import BookDispatcher from "./BookDispatcher";

export const BookActions = {
  setBooks(books) {
    BookDispatcher.dispatch({
      type: "SET_BOOKS",
      payload: books,
    });
  },

  addBook(newBook) {
    BookDispatcher.dispatch({
      type: "ADD_BOOK",
      payload: newBook,
    });
  },
};
