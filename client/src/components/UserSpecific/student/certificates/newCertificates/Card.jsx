import styles from "./Card.module.css";
import Swal from 'sweetalert2';
import CustomButton from "../../../../common/buttons/CustomButton.jsx";
import { cardTexts as cardTextsTextsEn } from '@/locales/en';
import { cardTexts as cardTextsTextsGr } from '@/locales/gr';
import {useContext} from "react";
import {LanguageContext} from "../../../../../context/LanguageContext.jsx";
const Card = ({ title }) => {
    const handleNext = () => {

            Swal.fire({
                text: cardTexts.warningText,
                icon: 'warning',
                title: cardTexts.certificate+"\n"+title,
                showCancelButton: true,
                cancelButtonText:  cardTexts.cancelCert,
                confirmButtonColor: "#007fff",
                cancelButtonColor: "#ab0d0d",
                confirmButtonText: cardTexts.applyCert,
                reverseButtons: true
            }).then((result) => {
            if (result.isConfirmed) {
                handleClose();
            }
        });

    };
    const handleClose = () => {

        Swal.fire({
            title: cardTexts.successMessage,
            icon: 'success',
            confirmButtonColor: "#007fff",
            confirmButtonText: cardTexts.closeCert
        }).then(() => {
            navigate('/student/certificates');
        });


    };
    const {language} = useContext(LanguageContext);
    const cardTexts = language === 'en' ? cardTextsTextsEn : cardTextsTextsGr;
  return (
    <div className={styles.cardd}>
      <h5 className={styles["cardd h5"]}>{title}</h5>
        <CustomButton onClick={handleNext}>
            {cardTexts.applyButton}
        </CustomButton>

    </div>
  );
};

export default Card;
