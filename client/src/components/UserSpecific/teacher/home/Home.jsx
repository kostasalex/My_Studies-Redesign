

import CurrentCourses from "./CurrentCourses"
import styles from "./Home.module.css"
import OpenGrades from "./OpenGrades"
import RecentGrades from "./RecentGrades"

const Home = () => {
    return (
        <div className="d-flex flex-column">
            <div className={styles["section-wrapper"]}>
                <CurrentCourses />
                <RecentGrades />
                <OpenGrades />
            </div>

        </div >
    )
}

export default Home