
import styles from './contactForm.module.css';
// Import the appropriate locale data based on the user's language preference
import { contactFormTexts } from '@/locales/gr';
import {useContext} from "react";
import {LanguageContext} from "../../../context/LanguageContext.jsx";
import { contactFormTexts as LanguageContextTextsEn } from '@/locales/en';
import { contactFormTexts as LanguageContextTextsGr } from '@/locales/gr';
const ContactForm = () => {
    const {language} = useContext(LanguageContext);
    const contactFormTexts = language === 'en' ? LanguageContextTextsEn : LanguageContextTextsGr;
    return (
        <div className={styles.formContainer}>
            <form className={styles.contactForm}>
                <h2 className={styles.formTitle}>{contactFormTexts.formTitle}</h2>

                <label htmlFor="email" className={styles.label}>{contactFormTexts.emailLabel}</label>
                <input type="email" id="email" name="email" className={styles.input} />

                <label htmlFor="name" className={styles.label}>{contactFormTexts.nameLabel}</label>
                <input type="text" id="name" name="name" className={styles.input} />

                <label htmlFor="message" className={styles.label}>{contactFormTexts.messageLabel}</label>
                <textarea id="message" name="message" className={styles.textarea}></textarea>

                <button type="submit" className={styles.submitButton}>{contactFormTexts.submitButton}</button>
            </form>
        </div>
    );
};

export default ContactForm;
