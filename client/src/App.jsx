import React from 'react';
import { Header, Footer, Guest, Student, Teacher } from './components';
import styles from './App.module.css';

const App = () => {
  const [currentUser, setCurrentUser] = React.useState('guest');

  const handleUserChange = (userType) => {
    setCurrentUser(userType);
  };

  const renderUserComponent = () => {
    switch (currentUser) {
      case 'student':
        return <Student />;
      case 'teacher':
        return <Teacher />;
      default:
        return <Guest />;
    }
  };

  return (
    <div className={styles.appContainer}>
      <Header onUserChange={handleUserChange} />
      <div className={styles.content}>
        {renderUserComponent()}
      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
