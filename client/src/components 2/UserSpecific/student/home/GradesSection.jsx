import styles from "./GradesSection.module.css";

import DoughnutChart from "./DoughnutChart";

const GradesSection = () => {
  return (
    <div className={styles["grades-section"]}>
      <h2>Βαθμολόγιο: </h2>
      <DoughnutChart passed={10} failed={5} noGrade={3} />
      <div className={styles["ects-container"]}>
        <div className={styles["ects"]}>
          <h5 style={{ textDecoration: "underline" }}>Πιστοτικές Μονάδες :</h5>
          <h5>170/240 ECTS</h5>
        </div>

        <div className={styles["ects"]}>
          <h5 style={{ textDecoration: "underline" }}>Δηλωμένα Μαθήματα :</h5>
          <h5>19 Μαθήματα</h5>
        </div>
      </div>
    </div>
  );
};

export default GradesSection;
