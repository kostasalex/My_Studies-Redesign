import React, { useContext } from 'react';
import styles from "./CurrentCourses.module.css";
import CustomButtonTeacher from "../../../common/buttons/CustomButton_Teacher.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import { LanguageContext } from "@/context/LanguageContext";
import { OpenGradesTexts as OpenGradesTextsEn } from '@/locales/en';
import { OpenGradesTexts as OpenGradesTextsGr } from '@/locales/gr';

// Λίστα μαθημάτων
const grades = [
    {
        title: "Δίκτυα Υπολογιστών",
        semester: "Χειμερινό Εξάμηνο 2024",
        students: 180,
    },
   { title: "Προγραμματισμός", semester: "Εαρινό Εξάμηνο 2023", students: 250 },

];

const OpenGrades = () => {
    const { language } = useContext(LanguageContext);
    const OpenGradesTexts = language === 'en'
        ? OpenGradesTextsEn
        : OpenGradesTextsGr;

    return (
        <div className={styles["current-courses-section"]}>
            <h2>{OpenGradesTexts.heading}:</h2>
            <ul>
                {grades.map((grade, index) => (
                    <li key={index}>
                        <div className="lesson">
                            <FontAwesomeIcon icon={faGraduationCap}/>
                            <span>{`  ${grade.title} `}</span>
                            <h6><FontAwesomeIcon icon={faUser}/>{`   ${grade.students} ${OpenGradesTexts.studentsLabel}`}</h6>
                        </div>
                        <div className="buttons">
                            <a href="/current-semester">
                                <CustomButtonTeacher className="primary">{OpenGradesTexts.viewButton}</CustomButtonTeacher>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OpenGrades;


