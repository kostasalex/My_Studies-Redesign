import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  const handleUserChange = (userType) => {
    switch (userType) {
      case "student":
        navigate("/student");
        break;
      case "teacher":
        navigate("/teacher");
        break;
      default:
        navigate("/");
        break;
    }
  };

  const handleLoginStudent = () => {
    // Προσθέστε τον κώδικα για τη σύνδεση του φοιτητή
    console.log("Σύνδεση Φοιτητή");
  };

  const handleImageClick = () => {
    // Προσθέστε τον κώδικα για την εικόνα που λειτουργεί ως κουμπί
    console.log("Κλικ στην εικόνα");
  };

  return (
    <div className={`${styles.header} p-2`}>
      <div className={`${styles.headerContainer} m-2`}>
        <img src="LOGO_UOA COL2.jpg" alt="UOA Logo" className={styles.logo} />
        <button
          type="button"
          className={`${styles.button} btn btn-primary m-2`}
          onClick={() => handleUserChange("guest")}
        >
          Αρχικη
        </button>
        <button
          type="button"
          className={`${styles.button} btn btn-primary m-2`}
          onClick={() => handleUserChange("student")}
        >
          Ανακοινώσεις
        </button>
        <button
          type="button"
          className={`${styles.button} btn btn-primary m-2`}
          onClick={() => handleUserChange("teacher")}
        >
          Βοήθεια
        </button>
        <button
          type="button"
          className={`${styles.button} btn btn-primary m-2`}
          onClick={handleLoginStudent}
        >
          Σύνδεση Φοιτητή
        </button>
        <button
          type="button"
          className={`${styles.roundButton} m-2`}
          onClick={handleImageClick}
        >
          <img src="/greek-flag.jpg" alt="Greek Flag" />
        </button>
      </div>
    </div>
  );
}
