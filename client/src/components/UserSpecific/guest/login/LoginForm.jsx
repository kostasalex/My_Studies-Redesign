import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles["login-form"]}>
      <img src="/src/assets/logo-large.png" alt="Login" className={styles["login-image"]} />
      <form>
      <h1>My - Studies</h1>
        <div className={styles["input-group"]}>
          <input type="text" id="username" name="username" placeholder="---username---" required />
        </div>
        <div className={styles["input-group"]}>
          <input type="password" id="password" name="password" placeholder="---password---" required />
        </div>
        <button type="submit" className={styles["login-button"]}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
