import { useId } from "react";
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
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
