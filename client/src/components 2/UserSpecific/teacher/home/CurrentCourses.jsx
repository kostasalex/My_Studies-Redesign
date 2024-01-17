import React from "react";
import styles from "./CurrentCourses.module.css";
import CustomButton from "../../../common/buttons/CustomButton.jsx";
// Λίστα μαθημάτων
const courses = [
  {
    title: "Μηχανική Μάθηση",
    semester: "Χειμερινό Εξάμηνο 2024",
    students: 237,
  },
  {
    title: "Γραμμική Άλγεβρα",
    semester: "Χειμερινό Εξάμηνο 2024",
    students: 237,
  },
  {
    title: "Διακριτά Μαθηματικά",
    semester: "Χειμερινό Εξάμηνο 2024",
    students: 237,
  },
  {
    title: "Προγραμματισμός",
    semester: "Χειμερινό Εξάμηνο 2024",
    students: 237,
  },
  {
    title: "Δίκτυα Υπολογιστών",
    semester: "Χειμερινό Εξάμηνο 2024",
    students: 180,
  },
  {
    title: "Βάσεις Δεδομένων",
    semester: "Χειμερινό Εξάμηνο 2024",
    students: 195,
  },
  {
    title: "Αλγόριθμοι ΙΙ",
    semester: "Χειμερινό Εξάμηνο 2024",
    students: 220,
  },
  {
    title: "Τεχνητή Νοημοσύνη",
    semester: "Χειμερινό Εξάμηνο 2024",
    students: 185,
  },
  {
    title: "Σχεδίαση Συστημάτων",
    semester: "Χειμερινό Εξάμηνο 2024",
    students: 200,
  },
];

const CurrentCourses = () => {
  return (
    <div>
      <div className={styles["current-courses-section"]}>
        <h2>Τρέχοντα Μαθήματα :</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              <div className="lesson">
                {course.title}
                <h6>{`${course.semester} - ${course.students} Μαθητές`}</h6>
              </div>
              <div className={styles["buttons"]}>
                <CustomButton className="primary">Προβολή</CustomButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentCourses;
