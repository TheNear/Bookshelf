import React from "react";
import style from "./BookEditor.module.css";
import CustomInput from "../../componentsHelper/CustomInput/CustomInput";
import CustomButton from "../../componentsHelper/CustomButton/CustomButton";
import { useForm } from "../../hooks/useForm";

const editorInputs = [
  {
    name: "book_title",
    title: "Наименование",
    id: "input__book-title",
    type: "text",
  },
  {
    name: "book_author",
    title: "Автор",
    id: "input__book-author",
    type: "text",
  },
  {
    name: "book_date",
    title: "Год выпуска",
    id: "input__book-date",
    type: "text",
  },
  {
    name: "book_img",
    title: "Изображение",
    id: "input__book-image",
    type: "text",
  },
];

function BookEditor() {
  const { values, errors, handleChange, handleSubmit } = useForm();

  const formHandleSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit();
  };

  const formHandleCancel = () => {
    // evt.preventDefault();
  };

  return (
    <div className={style.wrapper}>
      <h2>Редактирование книги</h2>
      <form onSubmit={formHandleSubmit}>
        {editorInputs.map((input) => (
          <CustomInput
            key={input.id}
            name={input.name}
            title={input.title}
            id={input.id}
            type={input.type}
            value={values[input.name] || ""}
            errors={errors[input.name] || ""}
            onChange={handleChange}
          />
        ))}
        <div>
          <CustomButton type="submit">Сохранить</CustomButton>
          <CustomButton type="reset" onClick={formHandleCancel}>
            Отменить
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default BookEditor;
