import styles from "./LoginSection.module.css";
import LoginForm from "../../../common/auth/AuthForm";

const LoginSection = () => {
  return (
    <div className={styles["login-section"]}>
      <h1>
        Ιστορία που διαφωτίζει, <br /> Γνώση που εξελίσεται...
      </h1>
      <LoginForm />
    </div>
  );
};

export default LoginSection;
