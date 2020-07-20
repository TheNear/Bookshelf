import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import style from "./BookEditor.module.css";
import CustomInput from "../../componentsHelper/CustomInput/CustomInput";
import CustomButton from "../../componentsHelper/CustomButton/CustomButton";
import { useForm } from "../../hooks/useForm";
import { addBook } from "../../redux/books/action";
import { bookValidation } from "../../assets/js/validation";
import { resetEditor } from "../../redux/editor/action";

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

function BookEditor({ toggleEditor }) {
  const editor = useSelector((state) => state.editor);
  const dispatch = useDispatch();

  const formHandleSubmit = (values) => {
    dispatch(addBook(values));
    toggleEditor();
  };

  const { values, errors, setValues, handleChange, handleSubmit } = useForm(
    formHandleSubmit,
    bookValidation
  );

  useEffect(() => {
    setValues(editor);

    return () => {
      dispatch(resetEditor());
    };
  }, [dispatch, editor, setValues]);

  return (
    <div className={style.wrapper}>
      <h2>Редактирование книги</h2>
      <form onSubmit={handleSubmit}>
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
          <CustomButton type="button" onClick={toggleEditor}>
            Отменить
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

BookEditor.propTypes = {
  toggleEditor: PropTypes.func,
};

BookEditor.defaultProps = {
  toggleEditor: () => {},
};

export default BookEditor;
