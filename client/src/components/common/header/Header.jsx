
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    const navigate = useNavigate();

    const handleUserChange = (userType) => {
        switch (userType) {
            case 'student':
                navigate('/student');
                break;
            case 'teacher':
                navigate('/teacher');
                break;
            default:
                navigate('/');
                break;
        }
    };

    return (
        <div className={styles.header}>
            <button type="button" className="btn btn-primary m-3" onClick={() => handleUserChange('guest')}>Guest</button>
            <button type="button" className="btn btn-secondary m-3" onClick={() => handleUserChange('student')}>Student</button>
            <button type="button" className="btn btn-info m-3" onClick={() => handleUserChange('teacher')}>Teacher</button>
        </div>
    );
}
