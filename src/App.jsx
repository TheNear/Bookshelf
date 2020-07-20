import React, { useState } from "react";
import "./App.css";
import BookList from "./components/BooksList/BookList";
import BookEditor from "./components/BookEditor/BookEditor";

function App() {
  const [isEdit, isEditToggle] = useState(false);

  const toggleEditor = () => {
    console.log(isEdit);
    isEditToggle(!isEdit);
  };

  return (
    <>
      <h1>Книжная полка</h1>
      <button type="button" onClick={toggleEditor}>
        {isEdit ? `Отменить` : `Добавить книгу`}
      </button>
      {isEdit ? (
        <BookEditor toggleEditor={toggleEditor} />
      ) : (
        <BookList toggleEditor={toggleEditor} />
      )}
    </>
  );
}

export default App;
