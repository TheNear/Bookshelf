import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./BookItem.module.css";

function BookItem({ title, desc, img, date, author }) {
  const [fullView, setFullView] = useState(false);

  const viewFullHandler = (evt) => {
    if (evt.keyCode === 13) {
      setFullView(!fullView);
    }
  };

  return (
    <li className={style.book}>
      <div className={style.image_wrapper}>
        <img src={img} alt="Обложка книги" className={style.image} />
      </div>
      <div
        tabIndex={0}
        role="button"
        className={style.info}
        onClick={() => setFullView(!fullView)}
        onKeyDown={viewFullHandler}
      >
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{date}</p>
        {fullView && <p>{desc}</p>}
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
