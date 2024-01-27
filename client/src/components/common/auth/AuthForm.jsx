
import { useContext, useState } from "react";
import { Form, Field } from "react-final-form";
import { Tab, Tabs, Button, Row, Col } from 'react-bootstrap';
import { LoginAuth as LoginAuthTextsEn } from '@/locales/en';
import { LoginAuth as LoginAuthTextsGr } from '@/locales/gr';
import { LanguageContext } from "../../../context/LanguageContext.jsx";
import { StudetTeacherContext } from "../../../context/HeaderButtonContext.jsx";
import { validateWithZod, loginSchema, registerSchema } from "./validation.js";
import styles from "./AuthForm.module.css";
import Swal from 'sweetalert2';
import { authform as TextsEn } from '@/locales/en';
import { authform as TextsGr } from '@/locales/gr';

const AuthForm = ({ redirectUrl, opacity, bgcolor }) => {
  console.log(opacity)
  const [key, setKey] = useState('login');
  const { language } = useContext(LanguageContext);
  const LoginAuth = language === 'en' ? LoginAuthTextsEn : LoginAuthTextsGr;

  const { user, changeUser } = useContext(StudetTeacherContext);
  const usermodeStudent = language === "en" ? "Student Authentication" : "Πιστοποίηση Φοιτητή";
  const usermodeTeacher = language === "en" ? "Professor Authentication" : "Πιστοποίηση Καθηγητή";
  const usermode = user === "student" ? usermodeStudent : usermodeTeacher;

  const authform = language === 'en' ? TextsEn : TextsGr;


  const handleLogin = (values) => {
    event.preventDefault();



    const xhr = new XMLHttpRequest();
    const url = "https://mystudies.panosgio.org:4010/loginuser";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('user', 'student');
          console.log("student")
          changeUser("student")
          window.location.href = redirectUrl ? redirectUrl : "/";
        } else if (xhr.status === 201) {
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('user', 'teacher');
          console.log("teacher")
          changeUser("teacher")
          window.location.href = redirectUrl ? redirectUrl : "/";
        } else if (xhr.status === 401) {
          alert("Wrong Credentials. Please try again");
        } else {
          alert("Login failed: Error occurred");
        }
      }
    };

    const data = JSON.stringify({
      username: values.username,
      password: values.password
    });

    xhr.send(data);
  };

  const usermoderegister = user === true ? true : false;
  const handleRegister = async (values) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    const url = "https://mystudies.panosgio.org:4010/adduser";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {

          Swal.fire({
            text: authform.signintext,
            icon: 'success',
            title: authform.accountcreated,
            confirmButtonColor: "#007fff",
            confirmButtonText: authform.signin,
            reverseButtons: true
          });
        } else if (xhr.status === 201) {
          Swal.fire({
            text: authform.signintext,
            icon: 'success',
            title: authform.accountcreated,
            confirmButtonColor: "#007fff",
            confirmButtonText: authform.signin,
            reverseButtons: true
          });
        } else {
          alert("Login failed: Error occurred");
        }
      }
    };

    const data = JSON.stringify({
      username: values.newUsername,
      password: values.newPassword,
      registrationNumber: values.studentId,
      firstName: values.firstName,
      lastName: values.lastName,
      role: usermoderegister
    });

    xhr.send(data);
  };


  return (
    <div style={{ opacity: opacity, background: bgcolor }} className={styles.authform}>
      <div className="mb-2 d-flex justify-content-center flex-column text-center align-items-center ">
        <h4 className="text-black mt-1 mb-1">{usermode}</h4>
      </div>
      <Tabs id="auth-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-2" >
        <Tab eventKey="login" title={<span className={styles.tab}>Login</span>}>
          <Form
            validate={validateWithZod(loginSchema, language)}
            onSubmit={handleLogin}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit}>
                <Field name="username">
                  {({ input, meta }) => (
                    <div className="form-floating mb-2 ">
                      <input {...input} id="usernameLogin" placeholder=" " type="text" className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                      <label htmlFor="usernameLogin">{LoginAuth.username}</label>
                      {meta.error && meta.touched && <p>{meta.error}</p>}
                    </div>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <div className="form-floating mb-2">
                      <input {...input} id="passwordLogin" placeholder=" " type="password" className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                      <label htmlFor="passwordLogin">{LoginAuth.password}</label>
                      {meta.error && meta.touched && <p>{meta.error}</p>}
                    </div>
                  )}
                </Field>
                <Button variant="primary" type="submit" disabled={submitting}>Login</Button>
              </form>
            )}
          />
        </Tab>
        <Tab eventKey="register" title={<span className={styles.tab}>Register</span>}>
          <Form
            validate={validateWithZod(registerSchema, language)}
            onSubmit={handleRegister}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={6}>
                    <Field name="newUsername">
                      {({ input, meta }) => (
                        <div className="form-floating mb-2">
                          <input {...input} id="newUsername" placeholder=" " className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          <label htmlFor="newUsername">{LoginAuth.username}</label>
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                  <Col xs={6}>
                    <Field name="studentId">
                      {({ input, meta }) => (
                        <div className="form-floating mb-2">
                          <input {...input} id="studentId" placeholder=" " className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          <label htmlFor="studentId">{LoginAuth.studentId}</label>
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Field name="firstName">
                      {({ input, meta }) => (
                        <div className="form-floating mb-2">
                          <input {...input} id="firstName" placeholder=" " className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          <label htmlFor="firstName">{LoginAuth.firstName}</label>
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>

                  <Col xs={6}>
                    <Field name="lastName">
                      {({ input, meta }) => (
                        <div className="form-floating mb-2">
                          <input {...input} id="lastName" placeholder=" " className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          <label htmlFor="lastName">{LoginAuth.lastName}</label>
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Field name="newPassword">
                      {({ input, meta }) => (
                        <div className="form-floating">
                          <input {...input} id="newPassword" type="password" placeholder=" " className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          <label htmlFor="newPassword">{LoginAuth.password}</label>
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                  <Col xs={6}>
                    <Field name="confirmPassword">
                      {({ input, meta }) => (
                        <div className="form-floating mb-3">
                          <input {...input} id="confirmPassword" type="password" placeholder=" " className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          <label htmlFor="confirmPassword">{LoginAuth.passwordConfirmation}</label>
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                </Row>

                <Button variant="primary" type="submit" disabled={submitting}>Register</Button>
              </form>
            )}
          />
        </Tab>
      </Tabs>
    </div >
  );
};

export default AuthForm;