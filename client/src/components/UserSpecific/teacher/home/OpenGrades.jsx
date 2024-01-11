import styles from "./OpenGrades.module.css";

const OpenGrades = () => {
  return (
    <div className={styles["current-courses-section"]}>
      <h2>Ανοιχτές Βαθμολογίες :</h2>
      <ul>
        <li>
          <div className="lesson">
            Μηχανική Μάθηση
            <h6>Εαρινό Εξάμηνο 2023- 237 Μαθητές</h6>
          </div>
          <div className={styles["buttons"]}>
            <button className="primary">Προβολή</button>
          </div>
        </li>
        <li>
          <div className="lesson">
            Γραμμμική Άλγεβρα
            <h6>Εαρινό Εξάμηνο 2023- 237 Μαθητές</h6>
          </div>

          <div className={styles["buttons"]}>
            <button className="primary">Προβολή</button>
          </div>
        </li>
        <li>
          <div className="lesson">
            Διακριτά Μαθηματικά
            <h6>Εαρινό Εξάμηνο 2023- 237 Μαθητές</h6>
          </div>
          <div className={styles["buttons"]}>
            <button className="primary">Προβολή</button>
          </div>
        </li>
        <li>
          <div className="lesson">
            Προγραμματισμός
            <h6>Εαρινό Εξάμηνο 2023- 237 Μαθητές</h6>
          </div>
          <div className={styles["buttons"]}>
            <button className="primary">Προβολή</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OpenGrades;
