
import { useContext, useState } from "react";
import { Form, Field } from "react-final-form";
import { Tab, Tabs, Card, Button, Row, Col } from 'react-bootstrap';
import { LoginAuth as LoginAuthTextsEn } from '@/locales/en';
import { LoginAuth as LoginAuthTextsGr } from '@/locales/gr';
import { LanguageContext } from "../../../context/LanguageContext.jsx";
import { StudetTeacherContext } from "../../../context/HeaderButtonContext.jsx";
import { createRoutesFromChildren, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { user } = useContext(StudetTeacherContext);
  const usermode = user === "student" ? "My Studies Student" : "My Studies Professor";
  const authform = language === 'en' ? TextsEn : TextsGr;
  console.log("auth: ", localStorage.getItem("isUserLoggedIn") === "true")



  const handleLogin = (values) => {
    event.preventDefault();



    const xhr = new XMLHttpRequest();
    const url = "https://mystudies.panosgio.org:4010/loginuser"; // Replace with your Node.js server URL

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          localStorage.setItem('isUserLoggedIn', 'true');
          window.location.href = "/student";
        } else if (xhr.status === 201) {
          localStorage.setItem('isUserLoggedIn', 'true');
          window.location.href = "/teacher";
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

    // Prevent default form submission
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    const url = "https://mystudies.panosgio.org:4010/adduser"; // Replace with your Node.js server URL

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
        {/* <img
          src="https://res.cloudinary.com/drijmbypg/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702593334/logo-large_uaskki.jpg?_s=public-apps"
          alt="Login"

        /> */}
        <h4 className="text-black mt-1 mb-2">{usermode}</h4>
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
                    <div>
                      <label>{LoginAuth.username}</label>
                      <input {...input} className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                      {meta.error && meta.touched && <p>{meta.error}</p>}
                    </div>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <div>
                      <label>{LoginAuth.password}</label>
                      <input {...input} type="password" className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                      {meta.error && meta.touched && <p>{meta.error}</p>}
                    </div>
                  )}
                </Field>
                <Button className="mt-3" variant="primary" type="submit" disabled={submitting}>Login</Button>
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
                    <Field name="newUsername" component="input">
                      {({ input, meta }) => (
                        <div>
                          <label>{LoginAuth.username}</label>
                          <input {...input} className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                  <Col xs={6}>
                    <Field name="studentId" component="input">
                      {({ input, meta }) => (
                        <div>
                          <label>{LoginAuth.studentId}</label>
                          <input {...input} className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Field name="firstName" component="input">
                      {({ input, meta }) => (
                        <div>
                          <label>{LoginAuth.firstName}</label>
                          <input {...input} className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                  <Col xs={6}>
                    <Field name="lastName" component="input">
                      {({ input, meta }) => (
                        <div>
                          <label>{LoginAuth.lastName}</label>
                          <input {...input} className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Field name="newPassword" component="input">
                      {({ input, meta }) => (
                        <div>
                          <label>{LoginAuth.password}</label>
                          <input {...input} type="password" className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                  <Col xs={6}>
                    <Field name="confirmPassword" component="input">
                      {({ input, meta }) => (
                        <div>
                          <label>{LoginAuth.passwordConfirmation}</label>
                          <input {...input} type="password" className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                          {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                      )}
                    </Field>
                  </Col>
                </Row>
                <Button className="mt-3" variant="primary" type="submit" disabled={submitting}>Register</Button>
              </form>
            )}
          />
        </Tab>
      </Tabs>
    </div >
  );
};

export default AuthForm;