
import styles from './CustomSearchBar.module.css';

const CustomSearchBar = ({ onSearchChange, searchQuery, placeholder }) => {
    return (
        <div>
            <input
                type="text"
                placeholder=placeholder
                onChange={onSearchChange}
                value={searchQuery}
                className={styles.CustomSearchBar}
            />
        </div>
    );
};

export default CustomSearchBar;
