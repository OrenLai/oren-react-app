import React, { useState } from "react";

function NumberApi() {
  const [num, setNum] = useState<string>("");
  const [info, setInfo] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  function handleQuery() {
    fetch("http://numbersapi.com/" + num)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setInfo(data);
      });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setNum(value);
  }

  return (
    <div className="quote">
      <input
        type="text"
        placeholder="number to check"
        value={num}
        onChange={handleChange}
      />
      <button onClick={handleQuery}>Check</button>
      <p>{info}</p>
    </div>
  );
}

export default NumberApi;
