import styles from "./Registration.module.css";
import CustomButton from "../../../common/buttons/CustomButton.jsx";
const RegistrationSection = () => {
  return (
    <div className={styles["registration-section"]}>
      <h3>Δηλώσεις:</h3>

      <div className={styles["table"]}>
        <h4>Βρέθηκε Προσωρινή Δήλωση Χειμερινού Εξαμήνου 2023</h4>
        <div
          className={`${styles["tableandbutton"]} ${styles["myCustomMargin"]}`}
        >
          <div id="myCharacteristics" className={styles["characteristics"]}>
            <h6>Δημιουργήθηκε στις 20/11/2023 11:23:39 πμ</h6>
            <h6>Τελευταία Τροποποίηση έγινε στις 22/11/2023 10:20:00 μμ</h6>
            <h6>
              Προσοχή: Για να θεωρηθεί μια Δήλωση έγκυρη, πρέπει να γίνει
              οριστική υποβολή!
            </h6>
          </div>
          <div className={`${styles["primaryButtonn"]}`}>
            <CustomButton>Προβολή</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;
