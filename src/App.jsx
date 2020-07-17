import React, { useState } from "react";
import "./App.css";
import BookList from "./components/BooksList/BookList";
import BookEditor from "./components/BookEditor/BookEditor";

function App() {
  const [isEdit, isEditToggle] = useState(false);

  return (
    <>
      <h1>Книжная полка</h1>
      <button
        type="button"
        onClick={() => {
          isEditToggle(!isEdit);
        }}
      >
        {isEdit ? `Отменить` : `Добавить книгу`}
      </button>
      {isEdit ? <BookEditor /> : <BookList />}
    </>
  );
}

export default App;
