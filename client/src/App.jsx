import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, Guest, Student, Teacher, Contact, Faq } from './components';
import styles from './App.module.css';
import { LanguageProvider } from './context/LanguageContext';
import { StudetTeacherProvider } from "./context/HeaderButtonContext.jsx";
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {

  return (
    <LanguageProvider>
      <StudetTeacherProvider>
        <Router>
          <ScrollToTop />
          <div className={styles.appContainer}>
            <Header />
            <div className={styles.content}>
              <Routes>
                <Route path="/" element={<Guest />} />
                <Route path="/student/*" element={<Student />} />
                <Route path="/teacher/*" element={<Teacher />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </StudetTeacherProvider>
    </LanguageProvider>
  );
};

export default App;
