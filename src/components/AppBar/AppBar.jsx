import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const pathsWithAppBar = ["/", "/login", "/register", "/contacts"];

  const shouldShowAppBar = pathsWithAppBar.includes(location.pathname);

  return (
    <>
      {shouldShowAppBar && (
        <header className={s.header}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
      )}
    </>
  );
};

export default AppBar;
