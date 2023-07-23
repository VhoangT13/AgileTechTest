import { useState } from "react";
import SliderCard from "./SliderCard";
import styles from "../../styles/slider.module.css";

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className={styles.slider}>
      <button onClick={handlePrev} className={styles.btn}>
        <img src="/assets/images/arr-left.svg" />
      </button>
      <SliderCard
        imgUrl={data[currentIndex]?.imageUrl}
        description={data[currentIndex]?.desctiption}
      />
      <button onClick={handleNext} className={styles.btn}>
        <img src="/assets/images/arr-right.svg" />
      </button>
    </div>
  );
};

export default Slider;
