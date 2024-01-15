import GradesSection from "./GradesSection";
import LatestGrades from "./LatestGradesSection";
import NotificationsSection from "./NotificationsSection";
import RegistrationSection from "./RegistrationSection";
import GraduationBar from "./GraduationBar";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <GraduationBar />
      <div className={styles["section-wrapper"]}>
        <GradesSection />
        <NotificationsSection />
        <LatestGrades />
        <RegistrationSection />
      </div>
    </div>
  );
};

export default Home;
