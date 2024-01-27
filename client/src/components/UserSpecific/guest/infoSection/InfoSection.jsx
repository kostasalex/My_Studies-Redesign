import { useContext, useState, useEffect } from 'react';
import styles from './InfoSection.module.css';
import { Card } from 'react-bootstrap';
import { studentInfoCardData as studentInfoCardDataTextsEn } from '@/locales/en';
import { studentInfoCardData as studentInfoCardDataTextsGr } from '@/locales/gr';
import { teacherInfoCardData as teacherInfoCardDataTextsEn } from '@/locales/en';
import { teacherInfoCardData as teacherInfoCardDataTextsGr } from '@/locales/gr';
import { studentSectionTitle as studentSectionTitleEn } from '@/locales/en';
import { teacherSectionTitle as teacherSectionTitleEn } from '@/locales/en';
import { teacherSectionTitle as teacherSectionTitleGr } from '@/locales/gr';
import { studentSectionTitle as studentSectionTitleGr } from '@/locales/gr';
import { LoginAuth as LoginAuthEn } from '@/locales/en';
import { LoginAuth as LoginAuthGr } from '@/locales/gr';
import { LanguageContext } from "../../../../context/LanguageContext.jsx";
import { StudetTeacherContext } from "../../../../context/HeaderButtonContext.jsx";

import ModalComponent, { useModalControl } from '@/components/common/ModalComponent';
import AuthForm from '../../../common/auth/AuthForm.jsx';

const InfoSection = ({ setIsModalOpen }) => {
    const { language } = useContext(LanguageContext);
    const { user, studentColor, teacherColor } = useContext(StudetTeacherContext);

    const infoCardData = user === 'student'
        ? (language === 'en' ? studentInfoCardDataTextsEn : studentInfoCardDataTextsGr)
        : (language === 'en' ? teacherInfoCardDataTextsEn : teacherInfoCardDataTextsGr);

    const sectionTitle = user === 'student'
        ? (language === 'en' ? studentSectionTitleEn : studentSectionTitleGr)
        : (language === 'en' ? teacherSectionTitleEn : teacherSectionTitleGr);

    const authFormColor = user === 'student'
        ? studentColor : teacherColor;


    const loginAuth = language === 'en' ? LoginAuthEn : LoginAuthGr;

    const { isOpen, openModal, closeModal } = useModalControl();
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
        openModal();
    };

    useEffect(() => {
        if (!isOpen) {
            setIsModalOpen(false);
            console.log("false modal")
        }
    }, [isOpen]);

    const getRedirectUrl = (cardId) => {
        if (user === "student") {
            switch (cardId) {
                case 1: return '/grades';
                case 2: return '/registration';
                case 3: return '/certificates';
                default: return '/';
            }
        }
        else {
            switch (cardId) {
                case 1: return '/current-semester';
                case 2: return '/old-semesters';
                case 3: return '/statistics';
                default: return '/';
            }
        }

    };

    return (
        <div className={styles["info-section"]}>
            <h2 className={styles["section-title"]}>{sectionTitle}</h2>
            <div>
                {infoCardData.map(card => (
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
                        <AuthForm redirectUrl={getRedirectUrl(selectedCard.id)} opacity={100} bgcolor={authFormColor} />
                    </ModalComponent>
                )}
            </div>

        </div>
    );
};

export default InfoSection;
