
import { useContext, useState } from "react";
import { Form, Field } from "react-final-form";
import { Tab, Tabs, Card, Button, Row, Col } from 'react-bootstrap';
import { LoginAuth as LoginAuthTextsEn } from '@/locales/en';
import { LoginAuth as LoginAuthTextsGr } from '@/locales/gr';
import { LanguageContext } from "../../../context/LanguageContext.jsx";
import { StudetTeacherContext } from "../../../context/HeaderButtonContext.jsx";
import { useNavigate } from 'react-router-dom';
import { validateWithZod, loginSchema, registerSchema } from "./validation.js";
import styles from "./AuthForm.module.css";
import Swal from 'sweetalert2';

const AuthForm = ({ redirectUrl }) => {
  const [key, setKey] = useState('login');
  const { language } = useContext(LanguageContext);
  const LoginAuth = language === 'en' ? LoginAuthTextsEn : LoginAuthTextsGr;
  const navigate = useNavigate();
  const { user } = useContext(StudetTeacherContext);
  const usermode = user === true ? "My Studies" : "My Studies Professor";

  const handleLogin = async (values) => {

    await Swal.fire({
      title: 'Success!',
      text: LoginAuth.loginSuccessMessage,
      icon: 'success',
      confirmButtonText: 'OK'
    });
    redirectUrl ? navigate(redirectUrl) : navigate("/");
  };

  const handleRegister = async (values) => {

    await Swal.fire({
      title: 'Success!',
      text: LoginAuth.registerSuccessMessage,
      icon: 'success',
      confirmButtonText: 'OK'
    });
    redirectUrl ? navigate(redirectUrl) : navigate("/");
  };

  return (
    <Card className="m-3" style={{ maxWidth: '400px', margin: 'auto' }}>
      <Card.Body>
        <div className="d-flex justify-content-center flex-column text-center ">
          <img
            src="https://res.cloudinary.com/drijmbypg/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702593334/logo-large_uaskki.jpg?_s=public-apps"
            alt="Login"
            className={styles["login-image"]}
          />
          <h4 className="text-black">{usermode}</h4>
        </div>
        <Tabs id="auth-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="login" title="Login">
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
                        {meta.error && meta.touched && <div className="invalid-feedback">{meta.error}</div>}
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                      <div>
                        <label>{LoginAuth.password}</label>
                        <input {...input} type="password" className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                        {meta.error && meta.touched && <div className="invalid-feedback">{meta.error}</div>}
                      </div>
                    )}
                  </Field>
                  <Button className="mt-4 " variant="primary" type="submit" disabled={submitting}>Login</Button>
                </form>
              )}
            />
          </Tab>
          <Tab eventKey="register" title="Register">
            <Form
              validate={validateWithZod(registerSchema, language)}
              onSubmit={handleRegister}
              render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Field name="newUsername" component="input">
                        {({ input, meta }) => (
                          <div>
                            <label>{LoginAuth.username}</label>
                            <input {...input} className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                            {meta.error && meta.touched && <div className="invalid-feedback">{meta.error}</div>}
                          </div>
                        )}
                      </Field>
                    </Col>
                    <Col md={6}>
                      <Field name="studentId" component="input">
                        {({ input, meta }) => (
                          <div>
                            <label>{LoginAuth.studentId}</label>
                            <input {...input} className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                            {meta.error && meta.touched && <div className="invalid-feedback">{meta.error}</div>}
                          </div>
                        )}
                      </Field>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Field name="firstName" component="input">
                        {({ input, meta }) => (
                          <div>
                            <label>{LoginAuth.firstName}</label>
                            <input {...input} className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                            {meta.error && meta.touched && <div className="invalid-feedback">{meta.error}</div>}
                          </div>
                        )}
                      </Field>
                    </Col>
                    <Col md={6}>
                      <Field name="lastName" component="input">
                        {({ input, meta }) => (
                          <div>
                            <label>{LoginAuth.lastName}</label>
                            <input {...input} className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                            {meta.error && meta.touched && <div className="invalid-feedback">{meta.error}</div>}
                          </div>
                        )}
                      </Field>
                    </Col>
                  </Row>
                  <Field name="newPassword" component="input">
                    {({ input, meta }) => (
                      <div>
                        <label>{LoginAuth.password}</label>
                        <input {...input} type="password" className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                        {meta.error && meta.touched && <div className="invalid-feedback">{meta.error}</div>}
                      </div>
                    )}
                  </Field>
                  <Field name="confirmPassword" component="input">
                    {({ input, meta }) => (
                      <div>
                        <label>{LoginAuth.passwordConfirmation}</label>
                        <input {...input} type="password" className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`} />
                        {meta.error && meta.touched && <div className="invalid-feedback">{meta.error}</div>}
                      </div>
                    )}
                  </Field>
                  <Button className="mt-4 " variant="primary" type="submit" disabled={submitting}>Register</Button>
                </form>
              )}
            />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
};

export default AuthForm;