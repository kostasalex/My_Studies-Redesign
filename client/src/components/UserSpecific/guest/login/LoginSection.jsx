import styles from "./LoginSection.module.css";
import AuthForm from "../../../common/auth/AuthForm";
import { useContext } from 'react';
import { StudetTeacherContext } from "@/context/HeaderButtonContext.jsx";
import studentbgImage from "@/assets/homepage/studentbg.png"
import teacherbgImage from "@/assets/homepage/teacherbg.png"

const LoginSection = ({ isModalOpen }) => {

  const { user, studentColor, teacherColor } = useContext(StudetTeacherContext);
  const imagebg = user === "student" ? studentbgImage : teacherbgImage;
  const colorbg = user === "student" ? studentColor : teacherColor;

  return (
    <div className={styles["login-section"]}>
      <div className={styles["image-container"]}>
        <img src={imagebg} />
      </div>
      <div style={{ background: colorbg }} className={styles["authform-container"]}>
        <AuthForm opacity={isModalOpen ? 0 : 100} />
      </div>
    </div >
  );
};

export default LoginSection;
