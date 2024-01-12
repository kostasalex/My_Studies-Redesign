import styles from './CustomPagination.module.css';

const CustomPagination = ({ children }) => {
    return (
        <nav className={styles.pagination}>
            <ul className="pagination">
                {children}
            </ul>
        </nav>
    );
};

export default CustomPagination;
