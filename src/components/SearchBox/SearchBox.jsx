import { useId } from "react";

const SearchBox = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value.toLowerCase());
  };

  const labelId = useId();
  const inputId = useId();

  return (
    <div>
      <label htmlFor={labelId}>Find contacts by name</label>
      <input type="text" id={inputId} value={value} onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
};

export default SearchBox;
