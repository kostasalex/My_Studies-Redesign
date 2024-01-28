import React, {useContext, useState} from "react";
import styles from "./OldSemesters.module.css";
import CustomButtonTeacher from "../../../common/buttons/CustomButton_Teacher.jsx";
import file from "../../../../../public/test_doc.pdf";

import {LanguageContext} from "../../../../context/LanguageContext";
import { oldCertificatesTexts as TextsEn } from '@/locales/en';
import { oldCertificatesTexts as TextsGr } from '@/locales/gr';

const OldSemesters = () => {
  const {language} = useContext(LanguageContext);
  const oldCertificatesTexts = language === 'en' ? TextsEn : TextsGr;
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = "old_semester.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpen = () => {
    const link = document.createElement('a');
    link.href = file;
    link.target = '_blank'; // Open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const Semesters = [
    {
      semester: oldCertificatesTexts.periodMapping[1],
      year: "2024",
      lessons: "5 ",
      students: "280 ",
    },
    {
      semester: oldCertificatesTexts.periodMapping[2],
      year: "2023",
      lessons: "4 ",
      students: "220 ",
    },
    {
      semester: oldCertificatesTexts.periodMapping[1],
      year: "2022",
      lessons: "3 ",
      students: "190 ",
    },
    {
      semester: oldCertificatesTexts.periodMapping[2],
      year: "2021",
      lessons: "5 ",
      students: "300 ",
    },
    {
      semester: oldCertificatesTexts.periodMapping[1],
      year: "2020",
      lessons: "4 ",
      students: "234 ",
    },
    {
      semester: oldCertificatesTexts.periodMapping[2],
      year: "2019",
      lessons: "3 ",
      students: "200 ",
    },
    {
      semester: oldCertificatesTexts.periodMapping[1],
      year: "2018",
      lessons: "4 ",
      students: "220 ",
    },
    {
      semester: oldCertificatesTexts.periodMapping[1],
      year: "2017",
      lessons: "5 ",
      students: "260 ",
    },
    {
      semester: oldCertificatesTexts.periodMapping[2],
      year: "2016",
      lessons: "3 ",
      students: "180 ",
    },
    {
      semester: oldCertificatesTexts.periodMapping[2],
      year: "2015",
      lessons: "5 ",
      students: "250 ",
    },
  ];

  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showRandomCourses, setShowRandomCourses] = useState(false);

  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
  };


  const handleViewClick = () => {
    setShowRandomCourses(true);
  };


  const handleBackClick = () => {
    setShowRandomCourses(false);
  };

  const getRandomCourses = () => {
    // Εδώ μπορείτε να υλοποιήσετε λογική για τη λήψη τυχαίων μαθημάτων.
    // Για τους σκοπούς του παραδείγματος, απλά δημιουργούμε μερικά σταθερά.
    return [
      {
        code: "Τ123",
        title: "Γραμμική Άλγεβρα",
        semester: "1ο",
        period: oldCertificatesTexts.periodMapping[1],
        year: "2024",
      },
      {
        code: "Τ456",
        title: "Διακριτά Μαθηματικά",
        semester: "3ο",
        period: oldCertificatesTexts.periodMapping[1],
        year: "2023",
      },
      {
        code: "Τ789",
        title: "Μαθηματικά Ι",
        semester: "5ο",
        period: oldCertificatesTexts.periodMapping[2],
        year: "2022",
      },
      {
        code: "Τ101",
        title: "Γεωμετρία",
        semester: "8ο",
        period: oldCertificatesTexts.periodMapping[2],
        year: "2021",
      },
      {
        code: "Τ202",
        title: "Τσοπανολογία",
        semester: "2ο",
        period: oldCertificatesTexts.periodMapping[2],
        year: "2020",
      },
    ];
  };

  return (
    <div className={styles["background"]}>
      <h3>{oldCertificatesTexts.oldcerts}</h3>

      {showRandomCourses ? (
        <div>
          <CustomButtonTeacher
            className="ml-auto"
            onClick={handleBackClick}
            style={{ marginLeft: "auto", textAlign: "right" }}
          >
            {oldCertificatesTexts.btnback}
          </CustomButtonTeacher>

          <h4>{oldCertificatesTexts.courses}</h4>
          <table className={`table table-striped ${styles["Semesters-table"]}`}>
            <thead>
              <tr>
                <th scope="col">{oldCertificatesTexts.code}</th>
                <th scope="col">{oldCertificatesTexts.course}</th>
                <th scope="col">{oldCertificatesTexts.semester}</th>
                <th scope="col">{oldCertificatesTexts.period}</th>
                <th scope="col">{oldCertificatesTexts.year}</th>
                <th scope="col">{oldCertificatesTexts.btnshow}</th>
                <th scope="col">{oldCertificatesTexts.btndownload}</th>
              </tr>
            </thead>
            <tbody>
              {getRandomCourses().map((course, index) => (
                <tr key={index}>
                  <td>{course.code}</td>
                  <td>{course.title}</td>
                  <td>{course.semester }</td>
                  <td>{course.period}</td>
                  <td>{course.year}</td>
                  <td>

                    <CustomButtonTeacher
                        onClick={handleOpen}

                    >
                      {oldCertificatesTexts.btnshow}
                    </CustomButtonTeacher>

                  </td>
                  <td>
                    <CustomButtonTeacher
                        onClick={handleDownload}

                    >
                      {oldCertificatesTexts.btndownload}
                    </CustomButtonTeacher>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <table className={`table table-striped ${styles["Semesters-table"]}`}>
          <thead>
            <tr>
              <th scope="col">{oldCertificatesTexts.period}</th>
              <th scope="col">{oldCertificatesTexts.year}</th>
              <th scope="col">{oldCertificatesTexts.courses}</th>
              <th scope="col">{oldCertificatesTexts.students}</th>
              <th scope="col">{oldCertificatesTexts.btnshow}</th>
            </tr>
          </thead>
          <tbody>
            {Semesters.map((semester, index) => (
              <tr
                key={index}
                className={`${
                  selectedSemester === semester ? styles["selected"] : ""
                }`}
                onClick={() => handleSemesterClick(semester)}
              >
                <td>{semester.semester}</td>
                <td>{semester.year}</td>
                <td>{semester.lessons + oldCertificatesTexts.courses}</td>
                <td>{semester.students+ oldCertificatesTexts.students}</td>
                <td>

                  <CustomButtonTeacher
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewClick();
                      }}
                  >
                    {oldCertificatesTexts.btnshow}
                  </CustomButtonTeacher>



                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OldSemesters;
