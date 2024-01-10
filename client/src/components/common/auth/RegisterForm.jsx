import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { registerValidator, validateWithZod } from "./validation";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const handleSubmit = (values) => {
    console.log("Register submitted", values);
    // Πρόσθεσε τον κώδικα για το register εδώ
  };

  return (
    <div className={styles["register-form"]}>
      <button
        className="login border-0 bg-transparent float-right"
        type="button"
      >
        Back to Login →
      </button>

      <img
        src="https://res.cloudinary.com/drijmbypg/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702593334/logo-large_uaskki.jpg?_s=public-apps"
        alt="Register"
        className={styles["register-image"]}
      />
      <h1>Register</h1>
      <Form
        onSubmit={handleSubmit}
        validate={validateWithZod(registerValidator)}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="userName">
              {({ input, meta }) => (
                <div className={styles["input-group"]}>
                  <label htmlFor="userName">Username</label>
                  <input {...input} type="text" placeholder="Enter username" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div className={styles["input-group"]}>
                  <label htmlFor="password">Password</label>
                  <input
                    {...input}
                    type="password"
                    placeholder="Enter password"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            {/* Προσθέστε περισσότερα πεδία που απαιτούνται για την εγγραφή */}
            <div className="d-flex justify-content-center mt-3">
              <button
                className="btn btn-primary btn-lg mr-2"
                type="submit"
                disabled={submitting}
              >
                Register
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default RegisterForm;
