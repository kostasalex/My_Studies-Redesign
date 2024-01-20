
import { useContext, useState } from 'react';
import styles from './Header.module.css';
import { FaGlobe, FaUser } from 'react-icons/fa';
import englishFlag from '../../../../public/english.png';
import greekFlag from '../../../../public/greek.png';
import files from "../../../../public/uoalogo.svg";
import { useLocation, useNavigate } from 'react-router-dom';

import CustomButton from "../buttons/CustomButton.jsx";


import { LanguageContext } from "../../../context/LanguageContext.jsx";
import { StudetTeacherContext } from "../../../context/HeaderButtonContext.jsx";

import { headerTexts as headerTextsEn } from '@/locales/en';
import { headerTexts as headerTextsGr } from '@/locales/gr';

const Header = () => {
    const { language, changeLanguage } = useContext(LanguageContext);
    const headerTexts = language === 'en' ? headerTextsEn : headerTextsGr;

    const { user, changeUser, studentColor, teacherColor } = useContext(StudetTeacherContext);

    const isUserLoggedIn = localStorage.getItem("isUserLoggedIn") === "true";
    console.log("header: ", isUserLoggedIn)
    const navigate = useNavigate()

    const handleLanguageChange = (language) => {
        changeLanguage(language);
    };
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    const toggleLanguageDropdown = () => setShowLanguageDropdown(!showLanguageDropdown);

    console.log(isUserLoggedIn)

    const toggleUser = () => {
        let nextUser = user === "student" ? "teacher" : "student";
        changeUser(nextUser)
    };

    const logOut = () => {
        console.log("logout!");
        localStorage.setItem('isUserLoggedIn', 'false');
        navigate("/")
    }

    console.log(user);
    return (
        <header style={{ background: user === "student" ? studentColor : teacherColor }} className={styles.header}>
            <a href="/" className={styles.logo}>
                <img src={`${files}`} alt="UOA Logo" className={styles.logoleft} />
            </a>
            <nav className={styles.nav}>
                <a href="/">{headerTexts.home}</a>
                <a href="/about">{headerTexts.about}</a>
                <a href="/contact">{headerTexts.contact}</a>

            </nav>
            <div className='d-flex '>
                <div className={styles.languageSwitcher}>

                    <FaGlobe onClick={toggleLanguageDropdown} />
                    {showLanguageDropdown && (
                        <div className={styles.languageDropdown}>
                            <div onClick={() => handleLanguageChange('en')}>
                                <img className={styles.imgl} src={englishFlag} alt="English" /> English
                            </div>
                            <div onClick={() => handleLanguageChange('gr')}>
                                <img className={styles.imgl} src={greekFlag} alt="Greek" /> Ελληνικά
                            </div>
                        </div>
                    )}

                    {/* Profile icon logic here */}
                </div>
                <div className="text-center">
                    {isUserLoggedIn ?
                        (<button onClick={logOut}><FaUser className={styles.icon} /></button>) :

                        (<div className={styles.loginbtn}>
                            <button style={{ background: user === "student" ? teacherColor : studentColor }} onClick={toggleUser}>
                                {user === "student" ? headerTexts.teacherPortal : headerTexts.studentPortal}
                            </button>
                        </div>)

                    }
                </div>
            </div>

        </header>
    );
};

export default Header;
