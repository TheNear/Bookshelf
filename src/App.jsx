import React, { useState } from "react";
import BookList from "./components/BooksList/BookList";
import BookEditor from "./components/BookEditor/BookEditor";
import CustomButton from "./componentsHelper/CustomButton/CustomButton";
import { ReactComponent as Book } from "./assets/img/book.svg";
import style from "./App.module.css";

function App() {
  const [isEdit, isEditToggle] = useState(false);

  const toggleEditor = () => {
    isEditToggle(!isEdit);
  };

  return (
    <>
      <h1 className={style.title}>Книжная полка</h1>
      <CustomButton
        Icon={Book}
        onClick={toggleEditor}
        className={style.main_button}
      >
        {isEdit ? `Отменить` : `Добавить книгу`}
      </CustomButton>

      {isEdit ? (
        <BookEditor toggleEditor={toggleEditor} />
      ) : (
        <BookList toggleEditor={toggleEditor} />
      )}
    </>
  );
}

export default App;
