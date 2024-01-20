import styles from "./LoginSection.module.css";
import LoginForm from "../../../common/auth/AuthForm";
import { useContext } from 'react';
import { StudetTeacherContext } from "@/context/HeaderButtonContext.jsx";
import studentbg from "@/assets/homepage/studentbg.png"
import teacherbg from "@/assets/homepage/teacherbg.png"

const LoginSection = () => {
  const { user } = useContext(StudetTeacherContext);
  const imagebg = user === "student" ? studentbg : teacherbg;

  console.log("user from loginsection: ", user)
  return (
    <div className={styles["login-section"]}>
      <div className={styles["image-container"]}>
        <img src={imagebg} />
      </div>


      {/* <h1>
        Ιστορία που διαφωτίζει, <br /> Γνώση που εξελίσεται...
      </h1> */}

      <LoginForm />


    </div>
  );
};

export default LoginSection;
