import styles from "../styles/sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/assets/images/Logo.png" />
      </div>
      <div className={styles.link}>
        <p>Posts</p>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
