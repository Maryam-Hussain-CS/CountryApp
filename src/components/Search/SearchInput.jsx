import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      setErrorMessage("Please enter a search term.");
    } else {
      onSearch(input);
      setErrorMessage("");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setErrorMessage(""); // Clear error message when input changes
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search a Country..."
        value={input}
        onChange={handleInputChange}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default SearchInput;
