import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.divider}></div>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.name}>
            <img src="/assets/images/Logo.png" />
            <span>DataWarehouse </span>
          </h3>
          <p className={styles.text}>
            Warehouse Society, 234 Bahagia Ave Street PRBW 29281
          </p>
          <p className={styles.contact}>
            info@warehouse.project <br /> 1-232-3434 (Main)
          </p>
        </div>
        <div className={styles.col}>
          <h3>About</h3>
          <ul>
            <li>
              <a href="/">Profile</a>{" "}
            </li>
            <li>
              <a href="/">Features</a>{" "}
            </li>
            <li>Careers</li>
            <li>
              <a href="/"> DW News</a>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Help</h3>
          <ul>
            <li>
              <a href="/">Support</a>{" "}
            </li>
            <li>
              <a href="/">Sign up</a>{" "}
            </li>
            <li>
              <a href="/">Guide</a>{" "}
            </li>
            <li>
              <a href="/">Reports</a>{" "}
            </li>
            <li>
              <a href="/">Q&A</a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media</h3>
          <div className={styles.group}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="52"
              viewBox="0 0 51 52"
              fill="none"
            >
              <circle
                opacity="0.1"
                cx="25.8474"
                cy="25.9612"
                r="25.0671"
                fill="#212353"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="52"
              viewBox="0 0 51 52"
              fill="none"
            >
              <circle
                opacity="0.1"
                cx="25.8474"
                cy="25.9612"
                r="25.0671"
                fill="#212353"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="52"
              viewBox="0 0 51 52"
              fill="none"
            >
              <circle
                opacity="0.1"
                cx="25.8474"
                cy="25.9612"
                r="25.0671"
                fill="#212353"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          © Datawarehouse™, 2020. All rights reserved. <br /> Company
          Registration Number: 21479524.
        </p>
        <img src="/assets/images/msg-icon.svg" alt="message icon" />
      </div>
    </footer>
  );
};

export default Footer;
