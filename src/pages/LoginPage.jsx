import { useContext, useState } from "react";
import Button from "../components/UI/Button";
import styles from "../styles/login-page.module.css";
import AuthContext from "../context/AuthContext";
import RouteContext from "../context/RouteContext";

const LoginPage = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const { login } = useContext(AuthContext);
  const { setRoute } = useContext(RouteContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await login(text);
    if (status) {
      setRoute("/");
    } else {
      setIsError(true);
      return;
    }
  };
  return (
    <div>
      <nav className={styles.nav}>
        <a
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            setRoute("/");
          }}
          href="/"
        >
          <img src="/assets/images/Logo.png" />
        </a>
      </nav>
      <h1 className={styles.heading}>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          id="username"
          value={text}
          onChange={(e) => {
            setIsError(false);
            setText(e.target.value);
          }}
          type="text"
        />
        <Button className={styles.btn} type="submit">
          Sign In
        </Button>
      </form>
      {isError && (
        <p className={styles.error}>Login failed. Please try again !</p>
      )}
    </div>
  );
};

export default LoginPage;
