import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AppBar.module.css";

export const AppBar = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <NavLink className={addActive} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to="register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to="login">
              Log In
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
