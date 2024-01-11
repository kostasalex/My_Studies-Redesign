

import CurrentCourses from "./CurrentCourses"
import styles from "./Home.module.css"
import OpenGrades from "./OpenGrades"
import RecentGrades from "./RecentGrades"

const Home = () => {
    return (
        <div className="d-flex flex-column">
            <div className="align-self-center">
                Εξεταστική Περίοδος: Χειμερινό 2023 <br />
                Περίοδος Δηλώσεων : 1/2/2023 εως 28/2/2023
            </div>
            <div className={styles["section-wrapper"]}>
                <CurrentCourses />
                <RecentGrades />
                <OpenGrades />
            </div>

        </div >
    )
}

export default Home