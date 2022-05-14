import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

export interface NoteType {
  title: string;
  content: string;
}

function Input(props) {
  const [noteItem, setNoteItem] = useState<NoteType>({
    title: "",
    content: "",
  });

  const [expend, setExpend] = useState<boolean>(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteItem((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleExpend() {
    setExpend(true);
  }

  return (
    <div>
      <form className="create-note">
        {expend ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="title"
            value={noteItem.title}
          />
        ) : null}

        <textarea
          onClick={handleExpend}
          onChange={handleChange}
          name="content"
          placeholder="content"
          value={noteItem.content}
          rows={expend ? 3 : 1}
        />
        <Zoom in={expend}>
          <Fab
            onClick={(e) => {
              props.onAdd(noteItem);
              setNoteItem({ title: "", content: "" });
              e.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Input;
