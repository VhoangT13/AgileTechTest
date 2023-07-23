import styles from "../../styles/button.module.css";

const Button = ({ children, className, type, onClick }) => {
  return (
    <button
      type={type}
      className={`${className} ${styles.btn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
