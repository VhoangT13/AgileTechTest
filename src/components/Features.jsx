import styles from "../styles/features.module.css";
import Feature from "./Feature";

const features = [
  {
    // imageSrc, color, title, description
    imageSrc: "/assets/images/feature-1.png",
    color: "#68C9BA",
    title: "Search Data",
    description:
      "Don't worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",
  },
  {
    // imageSrc, color, title, description
    imageSrc: "/assets/images/feature-2.png",
    color: "#9C69E2",
    title: "24 Hours Access",
    description:
      "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
  },

  {
    // imageSrc, color, title, description
    imageSrc: "/assets/images/feature-3.png",
    color: "#F063B8",
    title: "Print Out",
    description:
      "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
  },
  {
    // imageSrc, color, title, description
    imageSrc: "/assets/images/feature-4.png",
    color: "#2D9CDB",
    title: "Security Code",
    description:
      "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
  },
];

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Feature</h2>
        <p className={styles.subtitle}>
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </div>
      <div className={styles.content}>
        {features.map((item, index) => (
          <Feature
            key={index}
            color={item.color}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
