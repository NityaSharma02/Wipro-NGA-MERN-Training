import { EventEmitter } from "events";
import BookDispatcher from "./BookDispatcher";

class BookStoreClass extends EventEmitter {
  constructor() {
    super();
    this.books = [];

    BookDispatcher.register((action) => {
      switch (action.type) {
        case "SET_BOOKS":
          this.books = action.payload;
          this.emit("change");
          break;

        case "ADD_BOOK":
          this.books.push(action.payload);
          this.emit("change");
          break;

        default:
          break;
      }
    });
  }

  getBooks() {
    return this.books;
  }

  addChangeListener(callback) {
    this.on("change", callback);
  }

  removeChangeListener(callback) {
    this.removeListener("change", callback);
  }
}

const BookStore = new BookStoreClass();
export default BookStore;
