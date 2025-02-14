import GradesSection from "./GradesSection";
import LatestGrades from "./LatestGradesSection";
import NotificationsSection from "./NotificationsSection";
import RegistrationStatus from "../RegistrationStatus";
import App from "./GraduationBar";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <h4>Τρέχων Εξάμηνο:</h4>
      <App />
      <RegistrationStatus />
      <div className={styles["section-wrapper"]}>
        <GradesSection />
        <div className="wrapper">
          <NotificationsSection />
          <LatestGrades />
        </div>
      </div>
    </div>
  );
};

export default Home;
