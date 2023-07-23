import { useContext } from "react";
import styles from "../styles/header.module.css";
import Button from "./UI/Button";
import RouteContext from "../context/RouteContext";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { setRoute } = useContext(RouteContext);
  const { accessToken, logout } = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      <a
        onClick={(e) => {
          e.preventDefault();
          setRoute("/");
        }}
        href="/"
      >
        <img src="/assets/images/Logo.png" alt="logo" />
      </a>
      {accessToken ? (
        <div className={styles["nav-right"]}>
          <Button
            onClick={() => setRoute("/profile")}
            className={styles.btn}
            type="button"
          >
            Profile
          </Button>
          <Button onClick={logout} className={styles.btn} type="button">
            Logout
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setRoute("/login")}
          className={styles.btn}
          type="button"
        >
          Sign In
        </Button>
      )}
    </nav>
  );
};

export default Header;
