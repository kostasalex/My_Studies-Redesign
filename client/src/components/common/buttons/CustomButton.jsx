import styles from './CustomButton.module.css';

const CustomButton = ({ children, onClick, disabled }) => {
    return (
        <button className={styles.custom_button} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default CustomButton;
