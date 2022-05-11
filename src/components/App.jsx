import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevList) => {
      return [...prevList, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Input onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
