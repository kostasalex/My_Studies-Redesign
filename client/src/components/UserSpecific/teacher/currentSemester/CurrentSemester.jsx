import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CurrentSemester.module.css";
import Students from "./Table.jsx";


const sampleData = [
  {
    studentID: "Κ12345",
    firstName: "Γιάννης",
    lastName: "Παπαδόπουλος",
    grade: 8.5,
  },
  {
    studentID: "Κ67890",
    firstName: "Μαρία",
    lastName: "Κωνσταντίνου",
    grade: 9.2,
  },
  {
    studentID: "Κ11223",
    firstName: "Νίκος",
    lastName: "Σταυρίδης",
    grade: 7.8,
  },
  {
    studentID: "Κ44556",
    firstName: "Ελένη",
    lastName: "Παπαδοπούλου",
    grade: 6.4,
  },
  {
    studentID: "Κ78901",
    firstName: "Αλέξης",
    lastName: "Παπανικολάου",
    grade: 9.8,
  },
];



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

  const [studentsData, setStudentsData] = useState(sampleData);

  const handleEdit = (index, value) => {
    let numericValue;

    if (value === '') {
      numericValue = 0;
    } else {
      const stringValue = String(value).replace(',', '.');
      numericValue = parseFloat(stringValue);

      if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 10) {
        numericValue = Math.round(numericValue * 10) / 10;
      } else {
        return;
      }
    }

    const updatedData = [...studentsData];
    updatedData[index] = { ...updatedData[index], grade: numericValue, editing: true };
    setStudentsData(updatedData);
  };



  const handleSave = (index) => {
    const updatedData = [...studentsData];
    updatedData[index] = { ...updatedData[index], editing: false };
    setStudentsData(updatedData);
  };

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
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const toggleSuccessModal = () => {
    setIsSuccessModalOpen(!isSuccessModalOpen);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      console.log("Ανεβάζεται το αρχείο:", file);
      setFile(null);
      toggleSuccessModal(); // Open success modal when file is uploaded
    }
  };

  return (
    <div>
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
              className={`btn btn-secondary ${selectedCourse === course ? "btn-green" : ""
                }`}
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
              {selectedOption === "upload-file"
                ? "Ανεβάστε το Αρχείο"
                : "Ανεβαστε Βαθμολόγιο"}
            </button>
            {selectedCourse === course && selectedOption === "upload-file" && (
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
            {isSuccessModalOpen && (
              <div className={styles.successModal}>
                <p>Το αρχείο ανέβηκε με επιτυχία!</p>
                <button onClick={toggleSuccessModal}>OK</button>
              </div>
            )}


          </div>
        </div>
      ))}

      {selectedOption === "grade-online" && selectedCourse && (
        <Students data={studentsData} onEdit={handleEdit} onSave={handleSave} />
      )}
    </div>
  );
};

export default CurrentSemester;
