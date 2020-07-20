import { RESET_EDITED_BOOK, SET_EDITED_BOOK } from "./types";

export const resetEditor = () => ({
  type: RESET_EDITED_BOOK,
  payload: {
    id: Date.now(),
    book_title: "Заголовок книги",
    book_img: "",
    book_author: "Автор книги",
    book_date: "",
  },
});

export const setEditor = (book) => ({
  type: SET_EDITED_BOOK,
  payload: book,
});
