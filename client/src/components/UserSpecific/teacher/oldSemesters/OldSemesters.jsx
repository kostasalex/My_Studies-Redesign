import React, { useContext, useState } from "react";
import styles from "./OldSemesters.module.css";
import CustomButtonTeacher from "../../../common/buttons/CustomButton_Teacher.jsx";
import file from "../../../../../public/test_doc.pdf";

import { LanguageContext } from "../../../../context/LanguageContext";
import { oldCertificatesTexts as TextsEn } from "@/locales/en";
import { oldCertificatesTexts as TextsGr } from "@/locales/gr";

const OldSemesters = () => {
  const { language } = useContext(LanguageContext);
  const oldCertificatesTexts = language === "en" ? TextsEn : TextsGr;
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "old_semester.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpen = () => {
    const link = document.createElement("a");
    link.href = file;
    link.target = "_blank"; // Open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const Semesters = [
    {
      semester: "Χειμερινό",
      year: "2024",
      lessons: "5 Μάθημα",
      students: "280 Μαθητές",
    },
    {
      semester: "Σεμπτέμβριος",
      year: "2023",
      lessons: "4 Μάθημα",
      students: "220 Μαθητές",
    },
    {
      semester: "Εαρινό",
      year: "2022",
      lessons: "3 Μάθημα",
      students: "190 Μαθητές",
    },
    {
      semester: "Χειμερινό",
      year: "2021",
      lessons: "5 Μάθημα",
      students: "300 Μαθητές",
    },
    {
      semester: "Σεμπτέμβριος",
      year: "2020",
      lessons: "4 Μάθημα",
      students: "234 Μαθητές",
    },
    {
      semester: "Εαρινό",
      year: "2019",
      lessons: "3 Μάθημα",
      students: "200 Μαθητές",
    },
    {
      semester: "Χειμερινό",
      year: "2018",
      lessons: "4 Μάθημα",
      students: "220 Μαθητές",
    },
    {
      semester: "Σεμπτέμβριος",
      year: "2017",
      lessons: "5 Μάθημα",
      students: "260 Μαθητές",
    },
    {
      semester: "Εαρινό",
      year: "2016",
      lessons: "3 Μάθημα",
      students: "180 Μαθητές",
    },
    {
      semester: "Χειμερινό",
      year: "2015",
      lessons: "5 Μάθημα",
      students: "250 Μαθητές",
    },
  ];

  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showRandomCourses, setShowRandomCourses] = useState(false);

  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
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
        period: "Χειμερινό",
        year: "2024",
      },
      {
        code: "Τ456",
        title: "Διακριτά Μαθηματικά",
        semester: "3ο",
        period: "Χειμερινό",
        year: "2023",
      },
      {
        code: "Τ789",
        title: "Μαθηματικά Ι",
        semester: "5ο",
        period: "Εαρινό",
        year: "2022",
      },
      {
        code: "Τ101",
        title: "Γεωμετρία",
        semester: "8ο",
        period: "Χειμερινό",
        year: "2021",
      },
      {
        code: "Τ202",
        title: "Τσοπανολογία",
        semester: "2ο",
        period: "Σεμπτέμβριος",
        year: "2020",
      },
    ];
  };

  return (
    <div className={styles["background"]}>
      <h3>Ιστορικό Παλαιότερων Δηλώσεων</h3>

      {showRandomCourses ? (
        <div>
          <CustomButtonTeacher
            className="ml-auto"
            onClick={handleBackClick}
            style={{ marginLeft: "auto", textAlign: "right" }}
          >
            Πίσω
          </CustomButtonTeacher>

          <h4>Τυχαία Μαθήματα</h4>
          <table className={`table table-striped ${styles["Semesters-table"]}`}>
            <thead>
              <tr>
                <th scope="col">Κωδικός</th>
                <th scope="col">Μάθημα</th>
                <th scope="col">Εξάμηνο</th>
                <th scope="col">Περίοδος</th>
                <th scope="col">Έτος</th>
                <th scope="col">Προβολή</th>
                <th scope="col">Κατέβασμα</th>
              </tr>
            </thead>
            <tbody>
              {getRandomCourses().map((course, index) => (
                <tr key={index}>
                  <td>{course.code}</td>
                  <td>{course.title}</td>
                  <td>{course.semester}</td>
                  <td>{course.period}</td>
                  <td>{course.year}</td>
                  <td>
                    <CustomButtonTeacher onClick={handleOpen}>
                      {oldCertificatesTexts.btnshow}
                    </CustomButtonTeacher>
                    <CustomButtonTeacher onClick={handleDownload}>
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
              <th scope="col">Περίοδος</th>
              <th scope="col">Έτος</th>
              <th scope="col">Μαθήματα</th>
              <th scope="col">Μαθητές</th>
              <th scope="col"></th>
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
                <td>{semester.lessons}</td>
                <td>{semester.students}</td>
                <td>
                  <CustomButtonTeacher onClick={handleOpen}>
                    {oldCertificatesTexts.btnshow}
                  </CustomButtonTeacher>
                  <CustomButtonTeacher onClick={handleDownload}>
                    {oldCertificatesTexts.btndownload}
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
