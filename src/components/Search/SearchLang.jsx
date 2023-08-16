import React, { useState } from "react";
import { useTranslation } from "./TranslationContext";

const SearchLang = ({ onSearch }) => {
  const { translate } = useTranslation();
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onSearch(input);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder={translate("placeholder")}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchLang;