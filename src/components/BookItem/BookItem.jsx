import React from "react";
import PropTypes from "prop-types";
import style from "./BookItem.module.css";
import CustomButton from "../../componentsHelper/CustomButton/CustomButton";
import { ReactComponent as EditPic } from "../../assets/img/pencil.svg";
import { ReactComponent as DeletePic } from "../../assets/img/garbage.svg";

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
      <div className={style.info}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{author}</p>
        <p className={style.text}>{date && `${date} г.`}</p>
      </div>
      <div className={style.buttons}>
        <CustomButton
          Icon={EditPic}
          onClick={editHandler}
          className={style.button_edit}
        >
          Редактировать
        </CustomButton>
        <CustomButton
          Icon={DeletePic}
          onClick={removeHandler}
          className={style.button_delete}
        >
          Удалить
        </CustomButton>
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
