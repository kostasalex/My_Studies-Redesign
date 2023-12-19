
import styles from "./NewRegistration.module.css"

const NewRegistration = () => {
  return (
    <div className={styles['new-registration']}>
        <div className={styles['text']}>
            <h5>Δημιουργία Νέας Δήλωσης Μαθημάτων</h5>
            <p>Εξάμηνο : Χειμερινό 2023</p>
            <p>Προθεσμία Υποβολής : 1/12/2023 23:59:59 μμ</p>
            {/* <p>Προσοχή : Για να θεωρηθεί μια Δήλωση έγκυρη, πρέπει να γίνει οριστική υποβολή !</p> */}
        </div>
        <div>
            <button className = "btn btn-secondary">Δημιουργία</button>
        </div>
    </div>
  )
}

export default NewRegistration