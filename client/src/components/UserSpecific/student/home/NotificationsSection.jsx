import styles from "./NotificationsSection.module.css";

const NotificationsSection = () => {
  return (
    <div className={styles["notifications-section"]}>
      <h3>Ειδοποιήσεις:</h3>
      <ul>
        <li>

          <a href="/certificates" style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}>
            Εγκρίθηκε το Πιστοποιητικό Φοιτητικής Ιδιότητας.
          </a>

        </li>
        <li>
          <a href="/grades" style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}>
            Νέος Βαθμός στην Γραμμική Άλγεβρα!
          </a>
        </li>
        <li>
          <a href="/registration" style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}>
            Η Περίοδος Δήλωσης Μαθημάτων Ξεκίνησε.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NotificationsSection;
