import React from "react";
import PropTypes from "prop-types";
import style from "./BookItem.module.css";

function BookItem({ title, img, date, author, removeHandler, editHandler }) {
  return (
    <li className={style.book}>
      <div className={style.image_wrapper}>
        <img
          src={img || "http://placehold.it/100x150"}
          alt="Обложка книги"
          className={style.image}
        />
      </div>
      <div tabIndex={0} role="button" className={style.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{date}</p>
      </div>
      <div className={style.buttons}>
        <button type="button" onClick={editHandler}>
          Редактировать
        </button>
        <button type="button" onClick={removeHandler}>
          Удалить
        </button>
      </div>
    </li>
  );
}

export default BookItem;

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  removeHandler: PropTypes.func.isRequired,
  editHandler: PropTypes.func.isRequired,
};

BookItem.defaultProps = {
  img: "http://placehold.it/100x150",
  date: "2020",
  author: "Неизвестный автор",
};
