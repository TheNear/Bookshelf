import React from "react";
import { useSelector } from "react-redux";
import style from "./BookList.module.css";
import BookItem from "../BookItem/BookItem";

function BookList() {
  const books = useSelector((state) => state.books);

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
        />
      ))}
    </ul>
  );
}

export default BookList;
