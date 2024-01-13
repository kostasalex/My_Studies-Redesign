import React from "react";
import styles from "./RecentGrades.module.css";

// Λίστα πρόσφατων βαθμολογιών
const recentGrades = [
  { title: "Μηχανική Μάθηση", semester: "Χειμερινό Εξάμηνο 2024", students: 237 },
  { title: "Γραμμική Άλγεβρα", semester: "Χειμερινό Εξάμηνο 2024", students: 237 },
  { title: "Διακριτά Μαθηματικά", semester: "Χειμερινό Εξάμηνο 2024", students: 237 },
  { title: "Προγραμματισμός", semester: "Χειμερινό Εξάμηνο 2024", students: 237 },
  // Προσθέστε περισσότερες πληροφορίες αν χρειάζεται
];

const RecentGrades = () => {
  return (
    <div className={styles["current-courses-section"]}>
      <h2>Πρόσφατες Υποβολές Βαθμολογιών :</h2>
      <ul>
        {recentGrades.map((grade, index) => (
          <li key={index}>
            <div className="lesson">
              {grade.title}
              <h6>{`${grade.semester} - ${grade.students} Μαθητές`}</h6>
            </div>
            <div className={styles["buttons"]}>
              <button className="primary">Προβολή</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentGrades;
