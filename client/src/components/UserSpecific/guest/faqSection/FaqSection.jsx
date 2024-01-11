import faqimage from "@/assets/homepage/faq.png";
import styles from "./FaqSection.module.css";

const FaqSection = () => {
  return (
    <div className={styles["faq-section"]}>
      <div className={styles["left-section"]}>
        <img src={faqimage} alt="FAQ" />
      </div>

      <div className={styles["right-section"]}>
        <h1>Χρειάζεσαι Βοήθεια;</h1>
        <div className={styles.newline}>
          <h4>
            Διαβάστε τις Συχνές Ερωτήσεις μας και, αν δεν μπορείτε να βρείτε
            αυτό που ψάχνετε, οι ειδικοί μας θα χαρούν να απαντήσουν στις
            ερωτήσεις σας.
          </h4>
        </div>

        <div className={styles["buttons-container"]}>
          <button className={styles["button"]}>Διαβάστε τα FAQS</button>
          <button className={styles["button"]}>Κάνε μια Ερώτηση</button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
