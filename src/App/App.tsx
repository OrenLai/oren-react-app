import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import Note from "./Note";
import Footer from "./Footer";
import { NoteT } from "./types";

function App() {
  const [notes, setNotes] = useState<NoteT[]>([]);

  function addNote(newNote: NoteT) {
    setNotes((prevList) => {
      return [...prevList, newNote];
    });
  }

  function deleteNotes(id: number) {
    setNotes((prevList) => {
      return prevList.filter((item: NoteT, index: number) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Input onAdd={addNote} />
      {notes.map((note: NoteT, index: number) => (
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
