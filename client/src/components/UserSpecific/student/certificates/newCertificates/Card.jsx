import styles from "./Card.module.css";
import { cardTexts } from '@/locales/gr';
import Swal from 'sweetalert2';
import CustomButton from "../../../../common/buttons/CustomButton.jsx";
const Card = ({ title }) => {
    const handleNext = () => {

            Swal.fire({
                title: cardTexts.warningText,
                icon: 'warning',

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
