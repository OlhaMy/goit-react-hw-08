import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);
  return (
    <nav>
      <ul className={s.list}>
        <div className={s.span}>
          <li>
            <NavLink className={addActive} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to="/login">
              Log In
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default AuthNav;
