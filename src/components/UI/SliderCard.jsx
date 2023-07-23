import React from "react";
import styles from "../../styles/slider-card.module.css";

const SliderCard = ({ imgUrl, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.main}>
        <img className={styles.avatar} src={imgUrl} alt="avatar" />

        <div className={styles.content}>
          <p className={styles.name}>John Doe</p>
          <p className={styles.text}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
