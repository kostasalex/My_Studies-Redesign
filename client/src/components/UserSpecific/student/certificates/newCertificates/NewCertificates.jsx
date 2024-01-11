import Card from "./Card";
import styles from "./NewCertificates.module.css";

const NewCertificates = () => {
  return (
    <div
      className={`${styles.newCertificates} d-flex flex-column align-items-center`}
      style={{ marginBottom: "20px" }}
    >
      <h3 className="mb-4">Αίτηση Για Νέο Πιστοποιητικό :</h3>
      <div className="d-flex">
        <Card title="Φοιτητικής Ιδιότητας" />
        <Card title="Φορολογικής Χρήσης" />
        <Card title="Αναλυτική Βαθμολογία" />
        <Card title="Στρατολογική Χρήση" />
      </div>
    </div>
  );
};

export default NewCertificates;
