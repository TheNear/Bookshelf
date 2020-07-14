import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } from "./types";

const initialState = [
  {
    name: "JS BOOK",
    author: "me",
    date: "13.01.1992",
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state;
    case REMOVE_BOOK:
      return state;
    case EDIT_BOOK:
      return state;
    default:
      return state;
  }
};

export default booksReducer;
