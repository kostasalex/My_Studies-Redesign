import styles from './OpenGrades.module.css'

const OpenGrades = () => {
    return (
        <div className={styles["open-grades-section"]}>
            <h4>Ανοιχτές Βαθμολογίες :</h4>
            <div>
                <ul>
                    <li> Μηχανική Μάθηση</li>
                    <li> Γραμμμική Άλγεβρα</li>
                    <li> Διακριτά Μαθηματικά</li>
                    <li> Προγραμματισμός</li>
                </ul>
            </div>
        </div>
    )
}

export default OpenGrades