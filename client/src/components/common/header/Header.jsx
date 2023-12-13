import styles from './Header.module.css';
import PropTypes from 'prop-types';

export default function Header({ onUserChange }) {
    return (
        <div className={styles.header}>
            <button type="button" className="btn btn-primary m-3" onClick={() => onUserChange('guest')}>Guest</button>
            <button type="button" className="btn btn-secondary m-3" onClick={() => onUserChange('student')}>Student</button>
            <button type="button" className="btn btn-info m-3" onClick={() => onUserChange('teacher')}>Teacher</button>
        </div>
    );
}

Header.propTypes = {
    onUserChange: PropTypes.func.isRequired
};