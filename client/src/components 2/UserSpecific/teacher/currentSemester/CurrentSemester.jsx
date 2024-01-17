import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CurrentSemester.module.css";
import Path from "../path/path.module.css";
import Students from "./Table.jsx";

const CurrentSemester = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [file, setFile] = useState(null);
  const [disabledUpload, setDisabledUpload] = useState(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedCourses, setDisplayedCourses] = useState([
    {
      title: "Γραμμική Άλγεβρα",
      code: "Κ23",
      deadline: "1/12/2023 23:59:59 μμ",
    },
    {
      title: "Ανάλυση Αλγορίθμων",
      code: "Α45",
      deadline: "15/12/2023 23:59:59 μμ",
    },
    {
      title: "Βάσεις Δεδομένων",
      code: "Β78",
      deadline: "5/1/2024 23:59:59 μμ",
    },
    {
      title: "Εξελικτική Βιολογία",
      code: "Ε12",
      deadline: "20/1/2024 23:59:59 μμ",
    },
  ]);

  const navigateToNewRegistration = (course) => {
    setSelectedCourse(course);
    setSelectedOption("grade-online");
    setDisplayedCourses([course]);
    setDisabledUpload(new Set());
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
    setSelectedOption(null);
    setFile(null);
    setDisplayedCourses([
      {
        title: "Γραμμική Άλγεβρα",
        code: "Κ23",
        deadline: "1/12/2023 23:59:59 μμ",
      },
      {
        title: "Ανάλυση Αλγορίθμων",
        code: "Α45",
        deadline: "15/12/2023 23:59:59 μμ",
      },
      {
        title: "Βάσεις Δεδομένων",
        code: "Β78",
        deadline: "5/1/2024 23:59:59 μμ",
      },
      {
        title: "Εξελικτική Βιολογία",
        code: "Ε12",
        deadline: "20/1/2024 23:59:59 μμ",
      },
    ]);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      console.log("Ανεβάζεται το αρχείο:", file);
      setFile(null);
    }
  };

  return (
    <div>
      <div className={Path["pathh"]}>
        <button onClick={() => navigate("/")}>• Αρχική /</button>
        <button>Τρέχων Εξάμηνο /</button>
      </div>

      <div className={styles.mylessons}>
        Τα Μαθήματα μου :
        {selectedOption === "grade-online" && (
          <button className={styles.backButton} onClick={() => closeModal()}>
            Πίσω
          </button>
        )}
      </div>

      {displayedCourses.map((course, index) => (
        <div key={index} className={styles["new-registration"]}>
          <div className={styles["text"]}>
            <h4>{course.title}</h4>
            <p>Κωδικός Μαθήματος: {course.code}</p>
            <p>Προθεσμία Υποβολής: {course.deadline}</p>
          </div>
          <div>
            <button
              className={`btn btn-secondary ${selectedCourse === course ? "btn-green" : ""}`}
              onClick={() => navigateToNewRegistration(course)}
            >
              Βαθμολόγηση Online
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setSelectedOption("upload-file");
                setSelectedCourse(course);
              }}
              disabled={disabledUpload.has(course.code)}
            >
              Ανεβάστε Βαθμολόγιο
            </button>
            {selectedCourse === course && selectedOption === "grade-online" && (
              <div>
                <input type="file" id="gradeFile" onChange={handleFileChange} />
                <button
                  className="btn btn-secondary"
                  onClick={handleUpload}
                  disabled={!file}
                >
                  Ανεβάστε το Αρχείο
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
      
      {/* Προσθήκη του LocalOnline component */}
      {selectedOption === "grade-online" && selectedCourse && (
        <Students/>
      )}
    </div>
  );
};

export default CurrentSemester;
