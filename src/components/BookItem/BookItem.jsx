import React from "react";
import PropTypes from "prop-types";
import style from "./BookItem.module.css";

function BookItem({ title, desc, img, date, author }) {
  return (
    <li className={style.book}>
      <div className={style.image_wrapper}>
        <img src={img} alt="Обложка книги" className={style.image} />
      </div>
      <div className={style.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{date}</p>
        <p>{desc}</p>
      </div>
      <div className={style.buttons}>
        <button type="button">Редактировать</button>
        <button type="button">Удалить</button>
      </div>
    </li>
  );
}

export default BookItem;

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  img: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
};

BookItem.defaultProps = {
  desc: "Пока нет описания",
  img: "http://placehold.it/100x150",
  date: "2020",
  author: "Неизвестный автор",
};
