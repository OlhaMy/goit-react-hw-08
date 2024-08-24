import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

export const Navigation = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};
