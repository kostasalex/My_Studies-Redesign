import styles from './Footer.module.css';

import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import { footerData as footerTextsEn } from '@/locales/en';
import { footerData as footerTextsGr } from '@/locales/gr';

const Footer = () => {
    const {language} = useContext(LanguageContext);
    const footerData = language === 'en' ? footerTextsEn : footerTextsGr;
    return (
        <div className={styles.footer}>
            <div>
                {footerData.map((card) => (
                    <div key={card.id}>
                        <a href={card.link} target={card.link.startsWith('http') ? '_blank' : '_self'}
                           rel="noopener noreferrer">
                            {card.title}
                        </a>
                    </div>
                ))}
            </div>
            <div className={styles.footerText}>My Studies UoA © 2024</div>
        </div>
    );

};

export default Footer;
