
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, Guest, Student, Teacher, Contact, Faq } from './components';
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
