import { useContext, useState } from 'react';
import styles from './InfoSection.module.css';
import { Card } from 'react-bootstrap';
import { guestInfoCardData as guestInfoCardDataTextsEn } from '@/locales/en';
import { guestInfoCardData as guestInfoCardDataTextsGr } from '@/locales/gr';
import { LoginAuth as LoginAuthEn } from '@/locales/en';
import { LoginAuth as LoginAuthGr } from '@/locales/gr';
import { LanguageContext } from "../../../../context/LanguageContext.jsx";

import ModalComponent, { useModalControl } from '@/components/common/ModalComponent';
import AuthForm from '../../../common/auth/AuthForm.jsx';

const InfoSection = () => {
    const { language } = useContext(LanguageContext);
    const guestInfoCardData = language === 'en' ? guestInfoCardDataTextsEn : guestInfoCardDataTextsGr;
    const loginAuth = language === 'en' ? LoginAuthEn : LoginAuthGr;

    const { isOpen, openModal, closeModal } = useModalControl();
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        openModal();
    };

    const getRedirectUrl = (cardId) => {
        switch (cardId) {
            case 1: return '/student/grades';
            case 2: return '/student/registration';
            case 3: return '/student/certificates';
            default: return '/';
        }
    };

    return (
        <div className={styles["info-section"]}>
            {guestInfoCardData.map(card => (
                <Card key={card.id} className={styles["card"]} onClick={() => handleCardClick(card)}>
                    <Card.Body className='m-2'>
                        <div className='d-flex flex-column text-center'>
                            <h4>{card.title}</h4>
                            <p>{card.text}</p>
                        </div>
                    </Card.Body>
                </Card>
            ))}

            {selectedCard && (
                <ModalComponent isOpen={isOpen} closeModal={closeModal} title={loginAuth.authentication}>
                    <AuthForm redirectUrl={getRedirectUrl(selectedCard.id)} />
                </ModalComponent>
            )}
        </div>
    );
};

export default InfoSection;
