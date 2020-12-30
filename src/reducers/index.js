import {combineReducers} from "redux";

const booksReducer =()=> {
  return [
      {title: "The Long Earth", author: "Terry Pratchett, Stephen Baxter"},
      {title: "The Long War", author: "Terry Pratchett, Stephen Baxter"},
      {title: "Good Omen", author: "Neil Gaiman, Terry Pratchett"},
      {title: "Nineteen Eighty-Four: A Novel", author: "George Orwell"}
  ];
};

const selectedBookReducer = (selectedBook=null, action) => {
    if (action.type === 'BOOK_SELECTED') {
        return action.payload;
    }
    return selectedBook;
};

export default combineReducers({
    books: booksReducer,
    selectedBook: selectedBookReducer
});