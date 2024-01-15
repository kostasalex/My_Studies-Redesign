import React, { useState } from "react";
import styles from "./Profile.module.css";
import Path from "../path/path.module.css";
import photoprofile from "./photoprofile.png";

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
      <h3 className={styles.profileTitle}>Στοιχεία Φοιτητή</h3>
      <div className={styles.student}>
        <div className={styles.studentlayer1}>
          <img src={photoprofile} alt="Profile" />
          <button className={styles.changeProfileButton}>Αλλαγή Προφίλ</button>
        </div>

        <div className={styles.studentlayer2}>
          <h4>Βασικά Στοιχεία</h4>
          <h6>Αρ. Μητρώου : </h6>
          <h6>Όνομα :</h6>
          <h6>Επίθετο :</h6>
          <h6>Όνομα Πατέρα : Δημήτριος</h6>
          <h6>Όνομα Μητέρας : Παναγιώτα</h6>
          <h6>Ημ. Γέννησης : 02/12/2002</h6>
        </div>
        <div className={styles.studentlayer3}>
          <h4>Στοιχεία Ταυτοποίησης</h4>
          <h6>Αρ. Πάσου : 1115202000283</h6>
          <h6>Αρ. Ταυτότητας : ΑΙ-235135</h6>
          <h6>Εκδούσα Αρχή Α.Τ : Χίου</h6>
          <h6>Ημ. Έκδοσης Α.Τ : 05/12/2014</h6>
          <h6>ΑΜΚΑ : 015204927582</h6>
        </div>
        <div className={styles.studentlayer4}>
          <h4>Στοιχεία Οικίας</h4>
          <h6>Διεύθ. Κατοικίας : Μιχαλακοπούλου </h6>
          <h6>Αρ. Κατοικίας : 21</h6>
          <h6>Περιοχή : Νέα Φιλαδέλφεια</h6>
          <h6>Τ.Κ. : 21021</h6>
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

      <h3 className={styles.profileTitle}>Στοιχεία Σπουδών Φοιτητή</h3>

      <div className={styles.student}>
        <div className={styles.studentlayer111}>
          <h5>Εξάμηνο Πρώτης Εγγραφής :</h5>
          <h6>1ο Εξάμηνο</h6>
        </div>

        <div className={styles.studentlayer222}>
          <h5>Ακαδημαϊκό Έτος Εγγραφής :</h5>
          <h6>2018</h6>
        </div>

        <div className={styles.studentlayer333}>
          <h5>Ημερομηνία Εγγραφής :</h5>
          <h6>30/9/2018</h6>
        </div>
        <div className={styles.studentlayer444}>
          <h5>Εξάμηνο Φοίτησης :</h5>
          <h6>2018</h6>
        </div>
      </div>
    </div>
  );
};

export default Profile;
