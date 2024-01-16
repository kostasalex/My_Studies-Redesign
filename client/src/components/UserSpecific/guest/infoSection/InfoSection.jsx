import Card from './Card';
import styles from './InfoSection.module.css';
import { guestInfoCardData as guestInfoCardDataTextsEn } from '@/locales/en';
import { guestInfoCardData as guestInfoCardDataTextsGr } from '@/locales/gr';
import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import LoginModalButton from '../../../common/auth/LoginModalButton.jsx';
const InfoSection = () => {
    const { language } = useContext(LanguageContext);
    const guestInfoCardData = language === 'en' ? guestInfoCardDataTextsEn : guestInfoCardDataTextsGr;
    return (
        <div className={styles["info-section"]}>
            {guestInfoCardData.map(card => (
                <LoginModalButton key={card.id}><Card title={card.title} text={card.text} /></LoginModalButton>
            ))}
        </div>
    );
};

export default InfoSection;
