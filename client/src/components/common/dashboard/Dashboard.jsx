import styles from "./Dashboard.module.css";
import { useContext } from "react"
import { StudetTeacherContext } from "../../../context/HeaderButtonContext";

const Dashboard = ({ children }) => {
  const { studentColor, teacherColor, user } = useContext(StudetTeacherContext);
  return <div style={{ background: user === "student" ? studentColor : teacherColor }} className={styles.dashboard}>{children}</div>;
};

export default Dashboard;
