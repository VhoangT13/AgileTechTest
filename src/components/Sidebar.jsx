import { useContext } from "react";
import RouteContext from "../context/RouteContext";
import styles from "../styles/sidebar.module.css";
import AuthContext from "../context/AuthContext";
const Sidebar = () => {
  const { setRoute } = useContext(RouteContext);
  const { logout } = useContext(AuthContext);

  return (
    <div className={styles.sidebar}>
      <div
        onClick={() => {
          setRoute("/");
        }}
        className={styles.logo}
      >
        <img src="/assets/images/Logo.png" />
      </div>
      <div className={styles.link}>
        <p>Posts</p>
        <p
          onClick={() => {
            logout();
            setRoute("/");
          }}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
