import { useId, useState } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value.toLowerCase());
  };

  const labelId = useId();
  const inputId = useId();

  return (
    <div className={s.card}>
      <label htmlFor={labelId}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        id={inputId}
        value={value}
        onChange={handleChange}
      />
      <p>{value}</p>
    </div>
  );
};

export default SearchBox;
