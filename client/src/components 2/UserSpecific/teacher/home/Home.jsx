

import CurrentCourses from "./CurrentCourses"
import styles from "./Home.module.css"
import OpenGrades from "./OpenGrades"
import RecentGrades from "./RecentGrades"
import Path from "../path/path.module.css";
const Home = () => {
    return (
        <div className="d-flex flex-column">
            <div className={Path["pathh"]}>
        <button>• Αρχική /</button>
    
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