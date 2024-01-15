import { useState } from "react";
import styles from "./Profile.module.css";
import Path from "../path/path.module.css";
import photoprofile from "./teacher.jpg";

const Profile = () => {
  const [phone, setPhone] = useState(""); // Κατάσταση του τηλεφώνου
  const [email, setEmail] = useState(""); // Κατάσταση του email
  const [landline, setLandline] = useState(""); // Κατάσταση του σταθερού τηλεφώνου

  const [isPhoneModified, setIsPhoneModified] = useState(false); // Κατάσταση αλλαγής του τηλεφώνου
  const [isEmailModified, setIsEmailModified] = useState(false); // Κατάσταση αλλαγής του email
  const [isLandlineModified, setIsLandlineModified] = useState(false); // Κατάσταση αλλαγής του σταθερού τηλεφώνου

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setIsPhoneModified(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailModified(true);
  };

  const handleLandlineChange = (event) => {
    setLandline(event.target.value);
    setIsLandlineModified(true);
  };

  const handleSavePhone = () => {
    // Προσθέστε εδώ λειτουργικότητα αποθήκευσης του τηλεφώνου
    setIsPhoneModified(false); // Επαναφορά της κατάστασης αλλαγής
  };

  const handleSaveEmail = () => {
    // Προσθέστε εδώ λειτουργικότητα αποθήκευσης του email
    setIsEmailModified(false); // Επαναφορά της κατάστασης αλλαγής
  };

  const handleSaveLandline = () => {
    // Προσθέστε εδώ λειτουργικότητα αποθήκευσης του σταθερού τηλεφώνου
    setIsLandlineModified(false); // Επαναφορά της κατάστασης αλλαγής
  };

  return (
    <div>
      <div className={Path["pathh"]}>
        <button>• Αρχική /</button>
        <button>Προφίλ /</button>
      </div>
      <h3 className={styles.profileTitle}>Στοιχεία Καθηγητή</h3>
      <div className={styles.student}>
        <div className={styles.studentlayer1}>
          <img src={photoprofile} alt="Profile" />
          <button className={styles.changeProfileButton}>Αλλαγή Προφίλ</button>
        </div>

        <div className={styles.studentlayer2}>
          <h4>Βασικά Στοιχεία</h4>
          <h6>Αρ. Μητρώου : 1820173928</h6>
          <h6>Όνομα :</h6>
          <h6>Επίθετο :</h6>
          <h6>Ρόλος : Καθηγητής</h6>
          <h6>Ημ. Γέννησης : 25 / 03 / 1821</h6>
        </div>

        <div className={styles.studentlayer4}>
          <h4>Στοιχεία Επικοινωνίας</h4>
          <h6>Αρ. Γραφείου : Α69</h6>
          <h6>Τμήμα : Πληροφορικής</h6>
          <h6>Περιοχή : Ζωγράφου</h6>
          <h6>Τ.Κ. : 10482</h6>
          <h6>Email : raptis@uoa.gr</h6>
        </div>
      </div>
      <h3 className={styles.profileTitle}>Στοιχεία Επικοινωνίας Φοιτητή</h3>
      <div className={styles.student}>
        <div className={styles.studentlayer11}>
          <h5>E-mail :</h5>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Εισαγωγή E-mail"
            value={email}
            onChange={handleEmailChange}
          />
          {isEmailModified && (
            <button className={styles.saveButton} onClick={handleSaveEmail}>
              Αποθήκευση
            </button>
          )}
        </div>

        <div className={styles.studentlayer22}>
          <h5>Κινητό Τηλέφωνο :</h5>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Εισαγωγή Κινητού "
            value={phone}
            onChange={handlePhoneChange}
          />
          {isPhoneModified && (
            <button className={styles.saveButton} onClick={handleSavePhone}>
              Αποθήκευση
            </button>
          )}
        </div>

        <div className={styles.studentlayer33}>
          <h5>Σταθερό Τηλέφωνο :</h5>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Εισαγωγή Σταθερού "
            value={landline}
            onChange={handleLandlineChange}
          />
          {isLandlineModified && (
            <button className={styles.saveButton} onClick={handleSaveLandline}>
              Αποθήκευση
            </button>
          )}
        </div>
      </div>

      <h3 className={styles.profileTitle}>Στοιχεία Εγγραφής Καθηγητή</h3>

      <div className={styles.student}>
        <div className={styles.studentlayer111}>
          <h5>Έτος Εγγραφής :</h5>
          <h6>1999</h6>
        </div>

        <div className={styles.studentlayer222}>
          <h5>Χρόνια Υπηρεσίας :</h5>
          <h6>17</h6>
        </div>

        <div className={styles.studentlayer333}>
          <h5>Μαθήματα που Διδάχτηκαν :</h5>
          <h6>218</h6>
        </div>
      </div>
    </div>
  );
};

export default Profile;
