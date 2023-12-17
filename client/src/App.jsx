
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, Guest, Student, Teacher } from './components';
import styles from './App.module.css';

const App = () => {

  return (
    <Router>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Guest />} />
            <Route path="/student/*" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
