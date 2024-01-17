import Card from './Card';
import styles from './InfoSection.module.css';
import { guestInfoCardData as guestInfoCardDataTextsEn } from '@/locales/en';
import { guestInfoCardData as guestInfoCardDataTextsGr } from '@/locales/gr';
import {useContext} from "react";
import {LanguageContext} from "../../../../context/LanguageContext.jsx";
const InfoSection = () => {
    const { language } = useContext(LanguageContext);
    const guestInfoCardData = language === 'en' ? guestInfoCardDataTextsEn : guestInfoCardDataTextsGr;
    return (
        <div className={styles["info-section"]}>
            {guestInfoCardData.map(card => (
                <Card key={card.id} title={card.title} text={card.text} />
            ))}
        </div>
    );
};

export default InfoSection;
