import React, {useContext} from "react";
import styles from "./CurrentCourses.module.css";
import CustomButtonTeacher from "../../../common/buttons/CustomButton_Teacher.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {faPerson} from "@fortawesome/free-solid-svg-icons/faPerson";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import { LanguageContext } from "@/context/LanguageContext";
import { CurrentCoursesTexts as CurrentCoursesTextsEn } from '@/locales/en';
import { CurrentCoursesTexts as CurrentCoursesTextsGr } from '@/locales/gr';

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
  const { language } = useContext(LanguageContext);
  const CurrentCoursesTexts = language === 'en'
      ? CurrentCoursesTextsEn
      : CurrentCoursesTextsGr;

  return (
      <div>
        <div className={styles["current-courses-section"]}>
          <h2 className="headers">{CurrentCoursesTexts.heading}:</h2>
          <ul>
            {courses.map((course, index) => (
                <li key={index}>
                  <div className="lesson">
                    <FontAwesomeIcon icon={faGraduationCap}/>
                    <span>{`  ${course.title} `}</span>
                    <h6><FontAwesomeIcon icon={faUser}/>{` ${course.students} ${CurrentCoursesTexts.studentsLabel}`}</h6>
                  </div>
                  <div className="buttons">
                    <a href="/current-semester">
                      <CustomButtonTeacher className="primary">{CurrentCoursesTexts.viewButton}</CustomButtonTeacher>
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