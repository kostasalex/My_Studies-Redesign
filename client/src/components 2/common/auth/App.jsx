// App.js
import React, { useState } from "react";
import LoginForm from "./LoginForm";

const App = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div>
      {isRegister ? (
        <RegisterForm />
      ) : (
        <LoginForm onRegisterClick={toggleForm} />
      )}
    </div>
  );
};

export default App;
