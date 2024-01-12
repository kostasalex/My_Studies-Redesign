import styles from './CustomButton.module.css';

const CustomButton = ({ children, onClick }) => {
    return (
        <button className={styles.custom_button} onClick={onClick} >
            {children}
        </button>
    );
};

export default CustomButton;
