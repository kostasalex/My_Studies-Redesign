import styles from "./TableDesign.module.css";
const TableDesign = ({ children }) => {
    return (
        <div className={styles.table}>
            {children}
        </div>
    );
};

export default TableDesign;
