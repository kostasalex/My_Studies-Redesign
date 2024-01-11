import styles from "./Card.module.css";
import { cardTexts } from '@/locales/gr';
import Swal from 'sweetalert2';

const Card = ({ title }) => {
    const handleNext = () => {

            Swal.fire({
                title: cardTexts.warningText,
                icon: 'warning',

                showCancelButton: true,
                cancelButtonText:  cardTexts.cancelCert,
                confirmButtonColor: "#007fff",
                cancelButtonColor: "#d33",
                confirmButtonText: cardTexts.applyCert
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
  return (
    <div className={styles.cardd}>
      <h5 className={styles["cardd h5"]}>{title}</h5>
      <button onClick={handleNext} className={styles["cardd button"]}>{cardTexts.applyButton}</button>

    </div>
  );
};

export default Card;
