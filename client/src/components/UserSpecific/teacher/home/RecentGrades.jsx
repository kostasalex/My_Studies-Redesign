import styles from "./RecentGrades.module.css";

const RecentGrades = () => {
  return (
    <div className={styles["current-courses-section"]}>
      <h2>Πρόσφατες Υποβολές Βαθμολογιών :</h2>
      <ul>
        <li>
          <div className="lesson">
            Μηχανική Μάθηση
            <h6>Χειμερινό Εξάμηνο 2024- 237 Μαθητές</h6>
          </div>
          <div className={styles["buttons"]}>
            <button className="primary">Προβολή</button>
          </div>
        </li>
        <li>
          <div className="lesson">
            Γραμμμική Άλγεβρα
            <h6>Χειμερινό Εξάμηνο 2024- 237 Μαθητές</h6>
          </div>

          <div className={styles["buttons"]}>
            <button className="primary">Προβολή</button>
          </div>
        </li>
        <li>
          <div className="lesson">
            Διακριτά Μαθηματικά
            <h6>Χειμερινό Εξάμηνο 2024- 237 Μαθητές</h6>
          </div>
          <div className={styles["buttons"]}>
            <button className="primary">Προβολή</button>
          </div>
        </li>
        <li>
          <div className="lesson">
            Προγραμματισμός
            <h6>Χειμερινό Εξάμηνο 2024- 237 Μαθητές</h6>
          </div>
          <div className={styles["buttons"]}>
            <button className="primary">Προβολή</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecentGrades;
