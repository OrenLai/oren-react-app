import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import Note from "./Note";
import Footer from "./Footer";

import { NoteType } from "./Input";

function App() {
  const [notes, setNotes] = useState<NoteType[] | null>([]);

  function addNote(newNote: NoteType) {
    setNotes((prevList) => {
      return [...prevList, newNote];
    });
  }

  function deleteNotes(id: number) {
    setNotes((prevList) => {
      return prevList.filter((item: NoteType, index: number) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Input onAdd={addNote} />
      {notes.map((note: NoteType, index: number) => (
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
