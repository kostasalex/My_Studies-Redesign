import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Header, Footer, Guest, Student, Teacher, Contact, Faq } from './components';
import styles from './App.module.css';
import { LanguageContext, LanguageProvider } from './context/LanguageContext';
import { StudetTeacherProvider, StudetTeacherContext } from "./context/HeaderButtonContext.jsx";
import ScrollToTop from './components/common/ScrollToTop';
import { useContext, useEffect } from 'react';
import { invalidPathMsg as invalidPathMsgEn } from '@/locales/en';
import { invalidPathMsg as invalidPathMsgGr } from '@/locales/gr';


import Swal from 'sweetalert2';

const validPaths = ['/', '/contact', '/faq', '/about'];

const MainComponentSelector = () => {
  const { user, isUserLoggedIn } = useContext(StudetTeacherContext);
  if (isUserLoggedIn) {
    if (user === 'student') return <Student />;
    else return <Teacher />;
  }
  else return <Guest />;
};


const PathValidator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useContext(LanguageContext);
  const pathErrorMsg = language === 'gr' ? invalidPathMsgGr : invalidPathMsgEn;

  useEffect(() => {
    if (localStorage.getItem('isUserLoggedIn') === "false" && !validPaths.includes(location.pathname)) {
      navigate("/");
      Swal.fire({
        title: 'Restricted Access',
        text: pathErrorMsg,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    }
  }, [location]);

  return null;
};


const App = () => {
  return (
    <LanguageProvider>
      <StudetTeacherProvider>
        <Router>
          <ScrollToTop />
          <PathValidator />
          <div className={styles.appContainer}>
            <Header />
            <div className={styles.content}>
              <Routes>
                <Route path="/*" element={<MainComponentSelector />} />
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