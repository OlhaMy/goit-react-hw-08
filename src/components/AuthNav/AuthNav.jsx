import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export const AuthNav = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <div className={s.span}>
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
          </div>
        </ul>
      </nav>
    </header>
  );
};
