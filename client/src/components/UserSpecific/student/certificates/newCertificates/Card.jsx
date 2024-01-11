import styles from "./Card.module.css";

const Card = ({ title }) => {
  return (
    <div className={styles.cardd}>
      <h5 className={styles["cardd h5"]}>{title}</h5>
      <button className={styles["cardd button"]}>Αίτηση</button>
    </div>
  );
};

export default Card;
