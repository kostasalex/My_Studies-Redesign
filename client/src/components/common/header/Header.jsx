import { useState } from 'react';
import styles from './Header.module.css';
import { FaGlobe, FaUser } from 'react-icons/fa';
import englishFlag from '../../../../public/english.png';
import greekFlag from '../../../../public/greek.png';
import files from "../../../../public/uoalogo.png";
import { useLocation } from 'react-router-dom';
import {headerTexts} from '@/locales/gr';
import CustomButton from "../buttons/CustomButton.jsx";
const Header = () => {
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    const toggleLanguageDropdown = () => setShowLanguageDropdown(!showLanguageDropdown);

    const handleLanguageChange = (language) => {
        console.log(`Language changed to ${language}`);
        // Implement your language change logic here
    };
    const location = useLocation();
    const [showTeacherButton, setShowTeacherButton] = useState(true); // Initial state set to show teacher button

    const toggleButton = () => {
        setShowTeacherButton(prevState => !prevState); // Toggle the state
    };


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={`${files}`} alt="UOA Logo" className={styles.logoleft}/>
            </div>
            <nav className={styles.nav}>
                <a href="/">{headerTexts.home}</a>
                <a href="/about">{headerTexts.about}</a>
                <a href="/contact">{headerTexts.contact}</a>

            </nav>
            <div className={styles.loginbtn}>
                {location.pathname === '/' && (
                    <>
                        {showTeacherButton ? (
                            <div className={styles.loginbtn}>
                                <CustomButton onClick={toggleButton}>
                                    {headerTexts.teacherPortal}
                                </CustomButton>
                            </div>
                        ) : (
                            <div className={styles.loginbtn}>
                                <CustomButton onClick={toggleButton}>
                                    {headerTexts.studentPortal}
                                </CustomButton>
                            </div>
                        )}
                    </>
                )}
            </div>
            <div className={styles.languageSwitcher}>

                <FaGlobe onClick={toggleLanguageDropdown}/>
                {showLanguageDropdown && (
                    <div className={styles.languageDropdown}>
                        <div onClick={() => handleLanguageChange('en')}>
                            <img className={styles.imgl} src={englishFlag} alt="English"/> English
                        </div>
                        <div onClick={() => handleLanguageChange('gr')}>
                            <img className={styles.imgl} src={greekFlag} alt="Greek"/> Ελληνικά
                        </div>
                    </div>
                )}
                <FaUser className={styles.icon}/>
                {/* Profile icon logic here */}
            </div>
        </header>
    );
};

export default Header;
