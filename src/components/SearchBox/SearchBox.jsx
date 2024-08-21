import { useId } from "react";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../redux/selectors";
import { changeFilter } from "../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const inputId = useId();

  return (
    <div className={s.card}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        id={inputId}
        value={filterValue}
        placeholder="Search..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
