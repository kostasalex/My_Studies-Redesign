import React, { useContext } from 'react';
import { faqSectionTexts as faqTextsEn } from '@/locales/en';
import { faqSectionTexts as faqTextsGr } from '@/locales/gr';
import faqimage from "@/assets/homepage/faq.png";
import styles from "./FaqSection.module.css";
import {LanguageContext} from "../../../../context/LanguageContext.jsx";

const FaqSection = () => {
    const { language } = useContext(LanguageContext);
    const faqTexts = language === 'en' ? faqTextsEn : faqTextsGr;

    return (
        <div className={styles["faq-section"]}>
            <div className={styles["left-section"]}>
                <img src={faqimage} alt="FAQ" />
            </div>

            <div className={styles["right-section"]}>
                <h1>{faqTexts.title}</h1>
                <div className={styles.newline}>
                    <h4>
                        {faqTexts.description}
                    </h4>
                </div>

                <div className={styles["buttons-container"]}>
                    <button className={styles["button"]}>{faqTexts.readFaqsButton}</button>
                    <button className={styles["button"]}>{faqTexts.askQuestionButton}</button>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
