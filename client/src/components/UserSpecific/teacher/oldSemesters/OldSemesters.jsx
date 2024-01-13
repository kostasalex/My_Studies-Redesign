import React from "react";
import styles from "./OldSemesters.module.css";
import CustomButton from "../../../common/buttons/CustomButton.jsx";
import CustomPagination from "../../../common/buttons/CustomPagination.jsx";
import Path from "../path/path.module.css";



  const courses = [
    { title: "Χειμερινό 2023", summary: "Σύνοψη : 4 Μάθημα, 234 Μαθητές" },
    { title: "Καλοκαιρινό 2023", summary: "Σύνοψη : 3 Μάθημα, 200 Μαθητές" },
    { title: "Φθινοπωρινό 2023", summary: "Σύνοψη : 5 Μάθημα, 300 Μαθητές" },
    { title: "Άνοιξη 2023", summary: "Σύνοψη : 4 Μάθημα, 220 Μαθητές" },
    { title: "Χειμερινό 2022", summary: "Σύνοψη : 3 Μάθημα, 180 Μαθητές" },
    { title: "Καλοκαιρινό 2022", summary: "Σύνοψη : 5 Μάθημα, 250 Μαθητές" },
    { title: "Φθινοπωρινό 2022", summary: "Σύνοψη : 4 Μάθημα, 210 Μαθητές" },
    { title: "Άνοιξη 2022", summary: "Σύνοψη : 3 Μάθημα, 190 Μαθητές" },
    { title: "Χειμερινό 2021", summary: "Σύνοψη : 5 Μάθημα, 260 Μαθητές" },
    { title: "Καλοκαιρινό 2021", summary: "Σύνοψη : 4 Μάθημα, 220 Μαθητές" },
    
  ];


const handleButtonClick = () => {
  // Handle button click logic
  console.log("Button clicked!");
};

const OldSemesters = () => {
  return (
    <div>
      <div className={Path["pathh"]}>
        <button>• Αρχική /</button>
        <button>Παλιά Εξάμηνα /</button>
      </div>
      <center>
        <h5>
          Eπιλέξτε το εξάμηνο που επιθυμείτε για να δείτε περισσότερες
          πληροφορίες σχετικά με αυτό
        </h5>
      </center>
      <div className={`${styles.btnGroup} m-5`}>
        <h5> Φίλτρα Αναζήτησης : </h5>
        {/* Προσθέστε κώδικα για τα φίλτρα αναζήτησης */}
      </div>

      <div className={styles.Semesters}>
        {courses.map((course, index) => (
          <div key={index} className={styles.cardd}>
            <h5>{course.title}</h5>
            <h7>{course.summary}</h7>
            <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
          </div>
        ))}
      </div>

      <CustomPagination>
        <h1>Εδώ το pagination</h1>
      </CustomPagination>
      <h1>aek</h1>
    </div>
  );
};

export default OldSemesters;
