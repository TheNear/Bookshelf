import React, { useState } from "react";
import "./App.css";
import BookList from "./components/BooksList/BookList";

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
      <BookList />
    </>
  );
}

export default App;
