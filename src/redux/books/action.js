import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } from "./types";

export const addBook = (obj) => ({
  type: ADD_BOOK,
  payload: obj,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const editBook = (obj) => ({
  type: EDIT_BOOK,
  payload: obj,
});
