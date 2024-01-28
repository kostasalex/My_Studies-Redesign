import styles from "./RegistrationStatus.module.css";
import { useNavigate } from "react-router-dom";

const RegistrationStatus = () => {
  const navigate = useNavigate();
  const savedCourses =
    JSON.parse(localStorage.getItem("selectedCourses")) || [];
  const finalSubmission = JSON.parse(localStorage.getItem("finalSubmission"));

  const navigateToNewRegistration = () => {
    navigate("/registration/new-registration");
  };

  const handleOpenTemporarySavedCourses = () => {
    navigate(`/registration/new-registration?step=1`);
  };

  const handleDeleteFinalSubmission = () => {
    localStorage.removeItem("finalSubmission");
    navigate("/");
  };

  // Case 1: Final Submission
  if (finalSubmission) {
    return (
      <div className={styles["center"]}>
        <div className={styles["registration-status"]}>
          <div className={styles["text"]}>
            <h5>Τελική Υποβολή</h5>
            <p>Δηλώσατε επιτυχώς Μαθήματα για το τρέχον εξάμηνο!</p>
          </div>
          <button
            className="btn btn-danger"
            onClick={handleDeleteFinalSubmission}
          >
            Διαγραφή
          </button>
        </div>
      </div>
    );
  }

  // Case 2: Temporary Submission
  else if (savedCourses.length > 0) {
    return (
      <div className={styles["center"]}>
        <div className={styles["registration-status"]}>
          <div className={styles["text"]}>
            <h5>Αποθηκευμένη Δήλωση</h5>
            <p>Έχετε αποθηκευμένη δήλωση με {savedCourses.length} μαθήματα.</p>
            <p>
              Προσοχή! Για να θεωρηθεί μια Δήλωση Έγκυρη πρέπει να γίνει
              Οριστική Υποβολή!
            </p>
          </div>
          <button
            className="btn btn-primary"
            onClick={handleOpenTemporarySavedCourses}
          >
            Προβολή
          </button>
        </div>
      </div>
    );
  }

  // Case 3: New Registration
  else {
    return (
      <div className={styles["center"]}>
        <div className={styles["registration-status"]}>
          <div className={styles["text"]}>
            <h5>Δημιουργία Νέας Δήλωσης Μαθημάτων</h5>
            <p>Προθεσμία Υποβολής : 1/12/2023 23:59:59 μμ</p>
          </div>
          <div>
            <button
              className="btn btn-secondary"
              onClick={navigateToNewRegistration}
            >
              Δημιουργία
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default RegistrationStatus;
