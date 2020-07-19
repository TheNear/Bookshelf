import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } from "./types";

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    id: Date.now(),
    title: book.book_title,
    imgUrl: book.book_img,
    author: book.book_author,
    date: book.book_date,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const editBook = (obj) => ({
  type: EDIT_BOOK,
  payload: obj,
});
