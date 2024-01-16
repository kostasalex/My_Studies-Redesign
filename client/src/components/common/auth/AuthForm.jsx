import { useContext, useState } from "react";
import { Form, Field } from "react-final-form";
import { Tab, Tabs, Card } from 'react-bootstrap';
import { loginValidator, validateWithZod } from "./validation.js";
import styles from "./AuthForm.module.css";
import { LoginAuth as LoginAuthTextsEn } from '@/locales/en';
import { LoginAuth as LoginAuthTextsGr } from '@/locales/gr';
import { LanguageContext } from "../../../context/LanguageContext.jsx";
import { StudetTeacherContext } from "../../../context/HeaderButtonContext.jsx";


const AuthForm = () => {
  const [key, setKey] = useState('login');

  const [userinput, setuserinput] = useState("");
  const { language } = useContext(LanguageContext);
  const LoginAuth = language === 'en' ? LoginAuthTextsEn : LoginAuthTextsGr;


  const { user } = useContext(StudetTeacherContext);
  const usermode = user === true ? "My Studies" : "My Studies Professor";


  const handleChangeuser = (event) => {
    setuserinput(event.target.value);
  };
  const [passinput, setpassinput] = useState("");

  const handleChangepass = (event) => {
    setpassinput(event.target.value);
  };


  const handleSubmit = (values) => {
    console.log("Form submitted", values);
  };
  const handleLogin = (values) => {
    // Prevent default form submission
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    const url = "https://mystudies.panosgio.org:4010/loginuser"; // Replace with your Node.js server URL

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          window.location.href = "/student";
        } else if (xhr.status === 401) {
          alert("Wrong Credentials. Please try again");
        } else {
          alert("Login failed: Error occurred");
        }
      }
    };

    const data = JSON.stringify({
      username: userinput.toString(), // Using the name "username" as defined in your Field component
      password: passinput.toString()  // Using the name "password" as defined in your Field component
    });

    xhr.send(data);
  };
  return (
    <Card className="m-3" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Card.Body>


        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="https://res.cloudinary.com/drijmbypg/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702593334/logo-large_uaskki.jpg?_s=public-apps"
            alt="Login"
            className={styles["login-image"]}
          />

          <h4 className="text-black">{usermode}</h4>
        </div>

        <Tabs id="auth-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">

          <Tab eventKey="login" title="Login">
            {/* <div className={styles["login-form"]}> */}

            <>
              {/* <button
                className="register border-0 bg-transparent float-right"
                type="button"
                onClick={handleRegisterClick}
              >
                {LoginAuth.register}
              </button> */}

              <Form
                onSubmit={handleLogin} // Attach handleLogin to the Form's onSubmit
                validate={validateWithZod(loginValidator)}
                render={({ handleSubmit, submitting, form }) => (
                  <form onSubmit={handleSubmit}>
                    <Field name="username">
                      {({ input, meta }) => (
                        <div className={styles["input-group"]}>
                          <label htmlFor="userName">{LoginAuth.username}</label>
                          <input value={userinput} onChange={handleChangeuser} type="text"
                            placeholder="Sdi YYXXXXX" />
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}

                    </Field>
                    <Field name="password">
                      {({ input, meta }) => (
                        <div className={styles["input-group"]}>
                          <label htmlFor="password">{LoginAuth.password}</label>
                          <input value={passinput} onChange={handleChangepass}
                            type="password"
                            placeholder="•••••••••••"
                          />
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <div className="d-flex justify-content-center mt-3">

                      <button
                        className="btn btn-primary  mr-2 text-small"
                        type="submit"
                        disabled={submitting}
                      >
                        {LoginAuth.loginbtn}
                      </button>
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                      {/* <button
                        type="button"
                        onClick={() => console.log("Reset Password clicked")}
                        className="border-0 ml-2 m"
                      >
                        {LoginAuth.resetpsw}
                      </button> */}

                    </div>
                  </form>
                )}
              />
            </>
          </Tab>
          <Tab eventKey="register" title="Register">
            <Form
              onSubmit={handleSubmit}
              render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>


                  <Field name="newUsername">
                    {({ input, meta }) => (
                      <div className={styles["input-group"]}>
                        <label htmlFor="newUsername">{LoginAuth.username}</label>
                        <input {...input} type="text" placeholder="New Username" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field name="newPassword">
                    {({ input, meta }) => (
                      <div className={styles["input-group"]}>
                        <label htmlFor="newPassword">Password</label>
                        <input
                          {...input}
                          type="password"
                          placeholder="New Password"
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field name="confirmPassword">
                    {({ input, meta }) => (
                      <div className={styles["input-group"]}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                          {...input}
                          type="password"
                          placeholder="Confirm Password"
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>

                  <div className="d-flex justify-content-center mt-3">

                    <button
                      className="btn btn-primary  mr-2"
                      type="submit"
                      disabled={submitting}
                    >
                      Register
                    </button>
                  </div>
                </form>
              )}
            />

          </Tab>
        </Tabs>
      </Card.Body>
    </Card >
  );
};

export default AuthForm;
