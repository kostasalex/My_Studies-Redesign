import styles from "./Card.module.css";

const Card = ({ title, text }) => {
  return (
    <div className={styles["card"]}>
      <h2>{title}</h2>

      <p>{text}</p>
    </div>
  );
};

export default Card;
