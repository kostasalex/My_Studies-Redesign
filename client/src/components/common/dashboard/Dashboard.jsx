import styles from "./Dashboard.module.css";
import { useContext } from "react"
import { StudetTeacherContext } from "../../../context/HeaderButtonContext";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { LanguageContext } from "../../../context/LanguageContext";
import Swal from 'sweetalert2';
import { logoutMessagesEn } from '@/locales/en';
import { logoutMessagesGr } from '@/locales/gr';

const Dashboard = ({ children }) => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const { user, studentColor, teacherColor, setIsUserLogged } =
    useContext(StudetTeacherContext);

  const logoutTitle = language === "en" ? "Logout" : "Αποσύνδεση"
  const logOut = () => {
    const logoutMessages = language === "en" ? logoutMessagesEn : logoutMessagesGr;
    Swal.fire({
      title: logoutMessages.confirmationTitle,
      text: logoutMessages.confirmationText,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: logoutMessages.confirmButtonText,
      cancelButtonText: logoutMessages.cancelButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("isUserLoggedIn", "false");
        setIsUserLogged(false);
        navigate("/");
      }
    });
  };

  return (
    <div
      style={{ background: user === "student" ? studentColor : teacherColor }}
      className={styles.dashboard}>{children}
      <button onClick={logOut}><FaSignOutAlt /> <span>{logoutTitle}</span>
      </button>

    </div>);
};

export default Dashboard;
