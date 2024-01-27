import styles from './CustomButtonTeacher.module.css';

const CustomButtonTeacher = ({ children, onClick, disabled }) => {
    return (
        <button className={styles.custom_button_teacher} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default CustomButtonTeacher;
