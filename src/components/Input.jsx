import React, { useState } from "react";

function Input(props) {
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteItem((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="title"
          value={noteItem.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="content"
          value={noteItem.content}
          rows="3"
        />
        <button
          onClick={(e) => {
            props.onAdd(noteItem);
            setNoteItem({ title: "", content: "" });
            e.preventDefault();
          }}
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Input;
