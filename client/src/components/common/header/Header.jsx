import { useState } from 'react';
import styles from './Header.module.css';
import { FaGlobe, FaUser } from 'react-icons/fa';
import englishFlag from '../../../../public/english.png';
import greekFlag from '../../../../public/greek.png';
import files from "../../../../public/uoalogo.png";

import {headerTexts} from '@/locales/gr';
const Header = () => {
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    const toggleLanguageDropdown = () => setShowLanguageDropdown(!showLanguageDropdown);

    const handleLanguageChange = (language) => {
        console.log(`Language changed to ${language}`);
        // Implement your language change logic here
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={`${files}`} alt="UOA Logo" className={styles.logoleft}/>
            </div>
            <nav className={styles.nav}>
                <a href="/">{headerTexts.home}</a>
                <a href="/about">{headerTexts.about}</a>
                <a href="/contact">{}</a>
            </nav>
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
