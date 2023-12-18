import styles from "./Registration.module.css"

const RegistrationSection = () => {
  return (
    <div className={styles["registration-section"]}>
        <h3>Δηλώσεις:</h3>
        <div className = {styles["table"]}>
        <h4>Βρέθηκε Προσωρινή Δήλωση Χειμερινού Εξαμήνου 2023</h4>
        </div>
    </div>
  )
}

export default RegistrationSection