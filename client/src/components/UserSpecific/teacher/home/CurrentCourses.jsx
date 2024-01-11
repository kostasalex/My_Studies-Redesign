import styles from './CurrentCourses.module.css'

const CurrentCourses = () => {
    return (
        <div className={styles["current-courses-section"]}>
            <h4>Τρέχοντα Μαθήματα :</h4>

            <ul>
                <li> Μηχανική Μάθηση</li>
                <li> Γραμμμική Άλγεβρα</li>
                <li> Διακριτά Μαθηματικά</li>
                <li> Προγραμματισμός</li>
                <button>Προβολή Περισσότερων</button>
            </ul>


        </div>
    )
}

export default CurrentCourses