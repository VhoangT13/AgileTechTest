import styles from "../styles/feature.module.css";

const Feature = ({ imageSrc, color, title, description }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.img}>
        <img src={imageSrc} alt="feature" />
      </div>
      <div className={styles.right}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="427"
          height="353"
          viewBox="0 0 427 353"
          fill="none"
        >
          <path
            opacity="0.1"
            d="M43.733 41.784C47.7703 17.6952 68.6204 0.048645 93.0453 0.048645H376.922C404.536 0.048645 426.922 22.4344 426.922 50.0486V302.608C426.922 330.222 404.536 352.608 376.922 352.608H50.7169C19.8016 352.608 -3.7054 324.833 1.40467 294.343L43.733 41.784Z"
            fill={color}
          />
        </svg>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{description}</p>
          <a className={styles.link} href="/">
            <span>Learn more</span>
            <img src="/assets/images/arr-icon.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;
