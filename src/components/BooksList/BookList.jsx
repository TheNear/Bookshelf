import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./BookList.module.css";
import BookItem from "../BookItem/BookItem";
import { removeBook } from "../../redux/books/action";

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // const removeBookHandler = (id) => {
  //   dispatch(removeBook(id));
  // };

  return (
    <ul className={style.book_list}>
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          desc={book.desc}
          date={book.date}
          author={book.author}
          img={book.imgUrl}
          removeHandler={() => dispatch(removeBook(book.id))}
        />
      ))}
    </ul>
  );
}

export default BookList;
