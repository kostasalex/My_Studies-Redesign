import styles from "./NewRegistrationSection.module.css";
import { useNavigate } from "react-router-dom";

const NewRegistrationSection = () => {
  const navigate = useNavigate();
  const navigateToNewRegistration = () => {
    navigate("/student/registration/new-registration")
  };

  return (
    <div className={styles["center"]}>
      <div className={styles["new-registration"]}>
        <div className={styles["text"]}>
          <h5>Δημιουργία Νέας Δήλωσης Μαθημάτων</h5>
          <p>Εξάμηνο : Χειμερινό 2023</p>
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
};

export default NewRegistrationSection;
