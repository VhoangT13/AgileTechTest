import styles from "../styles/hero.module.css";

import Button from "./UI/Button";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headline}>
        <h1 className={styles.title}>Save your data storage here.</h1>
        <p className={styles.text}>
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </p>
        <Button className={styles.btn}>Learn more</Button>
      </div>
      <div className={styles.imgBox}>
        <img
          className={styles.img}
          src="/assets/images/hero-img.png"
          alt="Image"
        />
      </div>
    </section>
  );
};

export default Hero;
