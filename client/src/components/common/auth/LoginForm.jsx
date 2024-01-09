import { Form, Field } from "react-final-form";
import { loginValidator, validateWithZod } from "./validation";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log("Login submitted", values);
  };

  return (
    <div className={styles["login-form"]}>
      <button
        className="register border-0 bg-transparent float-right"
        type="button"
      >
        Register →
      </button>

      <img
        src="https://res.cloudinary.com/drijmbypg/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702593334/logo-large_uaskki.jpg?_s=public-apps"
        alt="Login"
        className={styles["login-image"]}
      />
      <h1>My - Studies</h1>
      <Form
        onSubmit={handleSubmit}
        validate={validateWithZod(loginValidator)}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="userName">
              {({ input, meta }) => (
                <div className={styles["input-group"]}>
                  <label htmlFor="userName">Username</label>
                  <input {...input} type="text" placeholder="Sdi YYXXXXX" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div className={styles["input-group"]}>
                  <label htmlFor="password">Password</label>
                  <input {...input} type="password" placeholder="•••••••••••" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="d-flex justify-content-center mt-3">
              <button
                type="button"
                onClick={() => console.log("Reset Password clicked")}
                className="border-0 ml-2"
              >
                Reset Password
              </button>

              <button
                className="btn btn-primary btn-lg mr-2"
                type="submit"
                disabled={submitting}
              >
                Login
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default LoginForm;
