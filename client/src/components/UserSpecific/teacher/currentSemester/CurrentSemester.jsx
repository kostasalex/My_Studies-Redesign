import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocalOnline from "./LocalOnline";
import styles from "./CurrentSemester.module.css";
import Path from "../path/path.module.css";

const CurrentSemester = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedCourses, setDisplayedCourses] = useState([
    { title: "Γραμμική Άλγεβρα", code: "Κ23", deadline: "1/12/2023 23:59:59 μμ" },
    { title: "Ανάλυση Αλγορίθμων", code: "Α45", deadline: "15/12/2023 23:59:59 μμ" },
    { title: "Βάσεις Δεδομένων", code: "Β78", deadline: "5/1/2024 23:59:59 μμ" },
    { title: "Εξελικτική Βιολογία", code: "Ε12", deadline: "20/1/2024 23:59:59 μμ" },
  ]);
  const [selectedOption, setSelectedOption] = useState(null);

  const navigateToNewRegistration = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    setDisplayedCourses([course]);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
    setDisplayedCourses([
      { title: "Γραμμική Άλγεβρα", code: "Κ23", deadline: "1/12/2023 23:59:59 μμ" },
      { title: "Ανάλυση Αλγορίθμων", code: "Α45", deadline: "15/12/2023 23:59:59 μμ" },
      { title: "Βάσεις Δεδομένων", code: "Β78", deadline: "5/1/2024 23:59:59 μμ" },
      { title: "Εξελικτική Βιολογία", code: "Ε12", deadline: "20/1/2024 23:59:59 μμ" },
    ]);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className={Path["pathh"]}>
        <button>• Αρχική /</button>
        <button>Τρέχων Εξάμηνο /</button>
      </div>

      <div className={styles.mylessons}> Τα Μαθήματα μου :</div>

      {displayedCourses.map((course, index) => (
        <div key={index} className={styles["new-registration"]}>
          <div className={styles["text"]}>
            <h4>{course.title}</h4>
            <p>Κωδικός Μαθήματος : {course.code}</p>
            <p>Προθεσμία Υποβολής : {course.deadline}</p>
          </div>
          <div>
            <button
              className={`btn btn-secondary ${selectedCourse === course ? "btn-green" : ""}`}
              onClick={() => navigateToNewRegistration(course)}
            >
              Βαθμολόγηση
            </button>
          </div>
        </div>
      ))}

      {isModalOpen && selectedCourse && (
        <div className="modal">
          <LocalOnline course={selectedCourse} closeModal={closeModal} />
        </div>
      )}

<div className={styles["dropdown-container"]}>
  <select className="form-select" onChange={handleDropdownChange}>
    <option value="" disabled selected>
      Επιλέξτε μια επιλογή
    </option>
    <option value="new-grade">Δημιουργία Νέου Βαθμολογίου Online</option>
    <option value="upload-file">Ανεβάστε Έτοιμο Αρχείο Βαθμολογιών</option>
  </select>
</div>

{/* Εμφάνιση πλαισίων και κουμπιών */}
{selectedOption === "new-grade" && (
  <div className={styles["action-box"]}>
    <div>Κατεβάστε απο εδώ το βαθμολόγιο</div>
    <button className="btn btn-download">Κατεβάστε</button>
  </div>
)}

{selectedOption === "upload-file" && (
  <div className={styles["action-box"]}>
    <div>Ανεβάστε το εδώ</div>
    <button className="btn btn-upload">Ανεβάστε</button>
  </div>
)}
    </div>
  );
};

export default CurrentSemester;





