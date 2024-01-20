import styles from "./LoginSection.module.css";
import AuthForm from "../../../common/auth/AuthForm";
import { useContext } from 'react';
import { StudetTeacherContext } from "@/context/HeaderButtonContext.jsx";
import studentbg from "@/assets/homepage/studentbg.png"
import teacherbg from "@/assets/homepage/teacherbg.png"

const LoginSection = ({ isModalOpen }) => {

  const { user } = useContext(StudetTeacherContext);
  const imagebg = user === "student" ? studentbg : teacherbg;

  console.log("user from loginsection: ", user)
  return (
    <div className={styles["login-section"]}>
      <div className={styles["image-container"]}>
        <img src={imagebg} />
      </div>
      <AuthForm opacity={isModalOpen ? 0 : 100} />
    </div>
  );
};

export default LoginSection;
