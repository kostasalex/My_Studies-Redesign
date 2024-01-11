import styles from './RecentGrades.module.css'

const RecentGrades = () => {
    return (
        <div className={styles["recent-grades-section"]}>
            <h4>Πρόσφατες Υποβολες Βαθμολογιών:</h4>
            <div>
                <ul>
                    <li> Μηχανική Μάθηση</li>
                    <li> Γραμμμική Άλγεβρα</li>
                    <li> Διακριτά Μαθηματικά</li>
                </ul>
            </div>
        </div>
    )
}

export default RecentGrades