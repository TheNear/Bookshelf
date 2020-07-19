import React from "react";
import style from "./BookEditor.module.css";
import CustomInput from "../../componentsHelper/CustomInput/CustomInput";

function BookEditor() {
  return (
    <div className={style.wrapper}>
      <h2>Редактирование книги</h2>
      <form>
        <CustomInput title="Наименование" id="input__book-title" type="text" />
        <CustomInput title="Автор" id="input__book-author" type="text" />
        <CustomInput title="Год выпуска" id="input__book-date" type="text" />
        <CustomInput title="Изображение" id="input__book-image" type="text" />
        <div>
          
        </div>
      </form>
    </div>
  );
}

export default BookEditor;
