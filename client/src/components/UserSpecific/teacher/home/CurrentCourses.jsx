import React from "react";
import styles from "./CurrentCourses.module.css";

// Λίστα μαθημάτων
const courses = [
  { title: "Μηχανική Μάθηση", semester: "Χειμερινό Εξάμηνο 2024", students: 237 },
  { title: "Γραμμική Άλγεβρα", semester: "Χειμερινό Εξάμηνο 2024", students: 237 },
  { title: "Διακριτά Μαθηματικά", semester: "Χειμερινό Εξάμηνο 2024", students: 237 },
  { title: "Προγραμματισμός", semester: "Χειμερινό Εξάμηνο 2024", students: 237 },
  // Προσθέστε περισσότερα μαθήματα αν χρειάζεται
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
                <button className="primary">Προβολή</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentCourses;
