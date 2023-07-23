import { useState, useEffect } from "react";
import styles from "../styles/testimonials.module.css";
import Slider from "./UI/Slider";

const Testimonials = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://test-react.agiletech.vn/galleries");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setGalleries(data);
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Testimonials</h2>
      {/* Slider */}
      <Slider data={galleries} />
    </div>
  );
};

export default Testimonials;
