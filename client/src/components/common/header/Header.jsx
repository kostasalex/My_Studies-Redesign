import {useContext, useState} from 'react';
import styles from './Header.module.css';
import { FaGlobe, FaUser } from 'react-icons/fa';
import englishFlag from '../../../../public/english.png';
import greekFlag from '../../../../public/greek.png';
import files from "../../../../public/uoalogo.png";
import { useLocation } from 'react-router-dom';

import CustomButton from "../buttons/CustomButton.jsx";


import {LanguageContext} from "../../../context/LanguageContext.jsx";
import {StudetTeacherContext} from "../../../context/HeaderButtonContext.jsx";

import { headerTexts as headerTextsEn } from '@/locales/en';
import { headerTexts as headerTextsGr } from '@/locales/gr';

const Header = () => {
    const { language, changeLanguage } = useContext(LanguageContext);
    const headerTexts = language === 'en' ? headerTextsEn : headerTextsGr;

    const { user, changeUser } = useContext(StudetTeacherContext);
    const usermode = user === true ? true : false;


    const handleLanguageChange = (language) => {
        changeLanguage(language);
    };
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    const toggleLanguageDropdown = () => setShowLanguageDropdown(!showLanguageDropdown);


    const location = useLocation();

    const toggleButton = (user) => {
        changeUser(user)
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
                        {usermode ? (
                            <div className={styles.loginbtn}>
                                <CustomButton onClick={() => toggleButton(false)}>
                                    {headerTexts.teacherPortal}
                                </CustomButton>
                            </div>
                        ) : (
                            <div className={styles.loginbtn}>
                                <CustomButton onClick={() => toggleButton(true)}>
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
