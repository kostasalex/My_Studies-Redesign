import styles from "./CurrentSemester.module.css";
import { useNavigate } from "react-router-dom";

const CurrentSemester = () => {
  const navigate = useNavigate();

  const navigateToNewRegistration = () => {
    // Κάποιος κώδικας για την πλοήγηση στη σελίδα δημιουργίας νέας δήλωσης
    navigate("/path-to-new-registration");
  };

  return (
    <div>
      <div className={styles.mylessons}> Τα Μαθήματα μου :</div>

      <div className={styles["new-registration"]}>
        <div className={styles["text"]}>
          <h4>Γραμμική Άλγεβρα</h4>
          <p>Κωδικός Μαθήματος : Κ23</p>
          <p>Προθεσμία Υποβολής : 1/12/2023 23:59:59 μμ</p>
        </div>
        <div>
          <button
            className="btn btn-secondary"
            onClick={navigateToNewRegistration}
          >
            Βαθμολόγηση
          </button>
        </div>
      </div>

      <div className={styles["new-registration"]}>
        <div className={styles["text"]}>
          <h4>Γραμμική Άλγεβρα</h4>
          <p>Κωδικός Μαθήματος : Κ23</p>
          <p>Προθεσμία Υποβολής : 1/12/2023 23:59:59 μμ</p>
        </div>
        <div>
          <button
            className="btn btn-secondary"
            onClick={navigateToNewRegistration}
          >
            Βαθμολόγηση
          </button>
        </div>
      </div>

      <div className={styles["new-registration"]}>
        <div className={styles["text"]}>
          <h4>Γραμμική Άλγεβρα</h4>
          <p>Κωδικός Μαθήματος : Κ23</p>
          <p>Προθεσμία Υποβολής : 1/12/2023 23:59:59 μμ</p>
        </div>
        <div>
          <button
            className="btn btn-secondary"
            onClick={navigateToNewRegistration}
          >
            Βαθμολόγηση
          </button>
        </div>
      </div>

      <div className={styles["new-registration"]}>
        <div className={styles["text"]}>
          <h4>Γραμμική Άλγεβρα</h4>
          <p>Κωδικός Μαθήματος : Κ23</p>
          <p>Προθεσμία Υποβολής : 1/12/2023 23:59:59 μμ</p>
        </div>
        <div>
          <button
            className="btn btn-secondary"
            onClick={navigateToNewRegistration}
          >
            Βαθμολόγηση
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentSemester;
