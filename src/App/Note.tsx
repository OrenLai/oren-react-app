import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  key: number;
  id: number;
  title: string;
  content: string;
  onDelete: Function;
}

function Note(props: Props) {
  const [editable, setEditable] = useState(false);

  return (
    <div className="note">
      <h1 contentEditable={editable}>{props.title}</h1>
      <p contentEditable={editable}>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
      <button
        onClick={() => {
          setEditable(true);
        }}
      >
        <EditIcon />
      </button>
    </div>
  );
}

export default Note;
