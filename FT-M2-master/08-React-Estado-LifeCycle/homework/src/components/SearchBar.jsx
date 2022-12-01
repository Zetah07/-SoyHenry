import React, { useState } from "react";

export default function SearchBar(props) {
  const [userInput, setUserInput] =useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  };
  return (
    <div>
      <input type='search' value={userInput} onChange={handleChange} />
      <button onClick={() => props.onSearch(userInput)}>Search</button>
      </div>
  );
}
