import styles from './CustomSelect.module.css';

const CustomSelect = ({ children, onChange, value }) => {
    return (
        <select className={styles.custom_select} onChange={onChange} value={value}>
            {children}
        </select>
    );
};

export default CustomSelect;
