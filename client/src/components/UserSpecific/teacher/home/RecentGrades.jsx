import React from "react";

import styles from "./CurrentCourses.module.css";
import CustomButtonTeacher from "../../../common/buttons/CustomButton_Teacher.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

// Λίστα πρόσφατων βαθμολογιών
const recentGrades = [
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
  }

];

const RecentGrades = () => {
  return (
    <div className={styles["current-courses-section"]}>
      <h2>Πρόσφατες Υποβολές Βαθμολογιών :</h2>
      <ul>
        {recentGrades.map((grade, index) => (
            <li key={index}>
              <div className="lesson">
                <FontAwesomeIcon icon={faGraduationCap}/>
                <span>
                  {`  ${grade.title} `}</span>
                <h1></h1>

                <h6><FontAwesomeIcon icon={faUser}/>{`   ${grade.students} Μαθητές`}</h6>
              </div>
              <div className="buttons">
                <a href="/teacher/current-semester">
                  <CustomButtonTeacher className="primary">Προβολή</CustomButtonTeacher>
                </a>
              </div>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentGrades;
