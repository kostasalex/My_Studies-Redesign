import styles from "./NotificationsSection.module.css";

const NotificationsSection = () => {
  return (
    <div className={styles["notifications-section"]}>
      <h3>Ειδοποιήσεις:</h3>
      <ul>
        <li>
          <h5 style={{ color: "blue", textDecoration: "underline" }}>
            Εγκρίθηκε το Πιστοποιητικό Φοιτητικής Ιδιότητας.
          </h5>
        </li>
        <li>
          <h5 style={{ color: "blue", textDecoration: "underline" }}>
            Νέος Βαθμός στην Γραμμική Άλγεβρα!
          </h5>
        </li>
        <li>
          <h5 style={{ color: "blue", textDecoration: "underline" }}>
            Η Περίοδος Δήλωσης Μαθημάτων Ξεκίνησε.
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default NotificationsSection;
