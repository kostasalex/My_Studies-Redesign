import React from "react";
import styles from "./CurrentCourses.module.css";
import CustomButtonTeacher from "../../../common/buttons/CustomButton_Teacher.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {faPerson} from "@fortawesome/free-solid-svg-icons/faPerson";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

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
  // {
  //   title: "Αλγόριθμοι ΙΙ",
  //   semester: "Χειμερινό Εξάμηνο 2024",
  //   students: 220,
  // },
  // {
  //   title: "Τεχνητή Νοημοσύνη",
  //   semester: "Χειμερινό Εξάμηνο 2024",
  //   students: 185,
  // },
  // {
  //   title: "Σχεδίαση Συστημάτων",
  //   semester: "Χειμερινό Εξάμηνο 2024",
  //   students: 200,
  // },
];

const CurrentCourses = () => {
  return (
    <div>
      <div className={styles["current-courses-section"]}>
        <h2 className="headers">Τρέχοντα Μαθήματα :</h2>
        <ul>
          {courses.map((course, index) => (
              <li key={index}>
                <div className="lesson">
                  <FontAwesomeIcon icon={faGraduationCap}/>
                  <span>{`  ${course.title} `}</span>
                  <h1></h1>
                  <h6><FontAwesomeIcon icon={faUser}/>{`   ${course.students} Μαθητές`}</h6>
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
    </div>
  );
};

export default CurrentCourses;
