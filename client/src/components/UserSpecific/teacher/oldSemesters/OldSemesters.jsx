import React from "react";
import styles from "./OldSemesters.module.css";
import CustomButton from "../../../common/buttons/CustomButton.jsx";
import CustomPagination from "../../../common/buttons/CustomPagination.jsx";
const handleButtonClick = () => {
  // Handle button click logic
  console.log("Button clicked!");
};

const OldSemesters = () => {
  return (
    <div>
      <center>
        <h5>
          Eπιλέξτε το εξάμηνο που επιθυμείτε για να δείτε περισσότερες
          πληροφορίες σχετικά με αυτό
        </h5>
      </center>
      <div className={`${styles.btnGroup} m-5`}>
        <h5> Φίλτρα Αναζήτησης : </h5>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Μάθημα
        </button>

        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Περίοδος
        </button>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Εξάμηνο
        </button>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Έτος
        </button>
      </div>

      <div className={styles.Semesters}>
        <div className={styles.cardd}>
          <h5> Χειμερινό 2023</h5>
          <h7> Σύνοψη :</h7>
          <h7> 4 Μάθημα</h7>
          <h7> 234 Μαθητές</h7>
          <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
        </div>
        <div className={styles.cardd}>
          <h5> Χειμερινό 2023</h5>
          <h7> Σύνοψη :</h7>
          <h7> 4 Μάθημα</h7>
          <h7> 234 Μαθητές</h7>
          <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
        </div>
        <div className={styles.cardd}>
          <h5> Χειμερινό 2023</h5>
          <h7> Σύνοψη :</h7>
          <h7> 4 Μάθημα</h7>
          <h7> 234 Μαθητές</h7>
          <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
        </div>
        <div className={styles.cardd}>
          <h5> Χειμερινό 2023</h5>
          <h7> Σύνοψη :</h7>
          <h7> 4 Μάθημα</h7>
          <h7> 234 Μαθητές</h7>
          <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
        </div>
        <div className={styles.cardd}>
          <h5> Χειμερινό 2023</h5>
          <h7> Σύνοψη :</h7>
          <h7> 4 Μάθημα</h7>
          <h7> 234 Μαθητές</h7>
          <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
        </div>
        <div className={styles.cardd}>
          <h5> Χειμερινό 2023</h5>
          <h7> Σύνοψη :</h7>
          <h7> 4 Μάθημα</h7>
          <h7> 234 Μαθητές</h7>
          <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
        </div>
        <div className={styles.cardd}>
          <h5> Χειμερινό 2023</h5>
          <h7> Σύνοψη :</h7>
          <h7> 4 Μάθημα</h7>
          <h7> 234 Μαθητές</h7>
          <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
        </div>
        <div className={styles.cardd}>
          <h5> Χειμερινό 2023</h5>
          <h7> Σύνοψη :</h7>
          <h7> 4 Μάθημα</h7>
          <h7> 234 Μαθητές</h7>
          <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
        </div>
        <div className={styles.cardd}>
          <h5> Χειμερινό 2023</h5>
          <h7> Σύνοψη :</h7>
          <h7> 4 Μάθημα</h7>
          <h7> 234 Μαθητές</h7>
          <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
        </div>
        <div className={styles.cardd}>
          <h5> Χειμερινό 2023</h5>
          <h7> Σύνοψη :</h7>
          <h7> 4 Μάθημα</h7>
          <h7> 234 Μαθητές</h7>
          <CustomButton onClick={handleButtonClick}>Apply Now</CustomButton>
        </div>
      </div>

      <CustomPagination>
      <h1>ftiakse edw to pagination xD</h1>
        </CustomPagination>
        <h1>aek</h1>
    </div>
  );
};

export default OldSemesters;
