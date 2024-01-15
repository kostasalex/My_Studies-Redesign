import React from "react";
import styles from "./OpenGrades.module.css";
import CustomButton from "../../../common/buttons/CustomButton.jsx";
// Λίστα μαθημάτων
const grades = [
  { title: "Μηχανική Μάθηση", semester: "Εαρινό Εξάμηνο 2023", students: 237 },
  { title: "Γραμμική Άλγεβρα", semester: "Εαρινό Εξάμηνο 2023", students: 237 },
  {
    title: "Διακριτά Μαθηματικά",
    semester: "Εαρινό Εξάμηνο 2023",
    students: 237,
  },
  { title: "Προγραμματισμός", semester: "Εαρινό Εξάμηνο 2023", students: 237 },
  // Προσθέστε περισσότερα μαθήματα αν χρειάζεται
];

const OpenGrades = () => {
  return (
    <div className={styles["current-courses-section"]}>
      <h2>Ανοιχτές Βαθμολογίες :</h2>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>
            <div className="lesson">
              {grade.title}
              <h6>{`${grade.semester} - ${grade.students} Μαθητές`}</h6>
            </div>
            <div className={styles["buttons"]}>
              <CustomButton className="primary">Προβολή</CustomButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenGrades;
