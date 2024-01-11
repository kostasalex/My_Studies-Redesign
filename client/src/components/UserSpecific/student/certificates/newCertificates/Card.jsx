import styles from "./Card.module.css";
import { cardTexts } from '@/locales/gr';
import Swal from 'sweetalert2';

const Card = ({ title }) => {
    const handleNext = () => {

            Swal.fire({
                title: cardTexts.warningText,
                icon: 'warning',
                confirmButtonText: cardTexts.applyCert
            }).then(() => {
                handleClose();
            });


    };
    const handleClose = () => {

        Swal.fire({
            title: cardTexts.successMessage,
            icon: 'success',
            confirmButtonText: cardTexts.closeCert
        }).then(() => {
            navigate('/student/certificates');
        });


    };
  return (
    <div className={styles.cardd}>
      <h5 className={styles["cardd h5"]}>{title}</h5>
      <button onClick={handleNext} className={styles["cardd button"]}>{cardTexts.applyButton}</button>

    </div>
  );
};

export default Card;
