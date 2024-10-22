import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { faqSectionTexts as faqTextsEn } from '@/locales/en';
import { faqSectionTexts as faqTextsGr } from '@/locales/gr';
import faqimage from "@/assets/homepage/faq.png";
import styles from "./FaqSection.module.css";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import CustomButton from "../../../common/buttons/CustomButton.jsx";

const FaqSection = () => {
    const navigate = useNavigate();

    const { language } = useContext(LanguageContext);
    const faqTexts = language === 'en' ? faqTextsEn : faqTextsGr;

    return (
        <div className={styles["faq-section"]}>
            <div className={styles["left-section"]}>
                <img src={faqimage} alt="FAQ" />
            </div>

            <div className={styles["right-section"]}>
                <h3>{faqTexts.title}</h3>
                <div className={styles.newline}>
                    <p>
                        {faqTexts.description}
                    </p>
                </div>
                <div className={styles["buttons-container"]}>
                    <CustomButton
                        className={styles["button"]}
                        onClick={() => navigate('/faq')}>
                        {faqTexts.readFaqsButton}
                    </CustomButton>
                    <CustomButton
                        className={styles["button"]}
                        onClick={() => navigate('/contact')}>
                        {faqTexts.askQuestionButton}
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
