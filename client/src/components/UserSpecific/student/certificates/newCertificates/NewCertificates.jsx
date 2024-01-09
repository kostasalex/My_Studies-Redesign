import Card from "./Card";
import styles from "./NewCertificates.module.css"; // Υποθέτουμε ότι έχετε ένα αρχείο CSS

const NewCertificates = () => {
  return (
    <div className={`${styles.newCertificates} d-flex p-5`}>
      <Card title="Φοιτητικής Ιδιότητας" />
      <Card title="Φορολογικής Χρήσης" />
      <Card title="Αναλυτική Βαθμολογία" />
      <Card title="Στρατολογική Χρήση" />
    </div>
  );
};

export default NewCertificates;
